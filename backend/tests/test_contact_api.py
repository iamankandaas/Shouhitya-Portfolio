"""
Backend API tests for Contact endpoints:
- POST /api/contact: Submit a new contact form
- GET /api/contacts: Retrieve all submitted contacts
"""
import pytest
import requests
import os
import uuid

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')


class TestContactAPI:
    """Contact API endpoint tests"""

    def test_api_root_health(self):
        """Test API root endpoint returns Hello World"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert data["message"] == "Hello World"
        print("PASS: API root endpoint returns 200 with Hello World")

    def test_post_contact_success(self):
        """Test POST /api/contact with valid data returns 200 with all fields"""
        test_name = f"TEST_User_{uuid.uuid4().hex[:8]}"
        test_email = f"test_{uuid.uuid4().hex[:8]}@example.com"
        test_message = "This is a test message from automated testing"

        payload = {
            "name": test_name,
            "email": test_email,
            "message": test_message
        }

        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )

        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        # Verify all required fields are returned
        assert "id" in data, "Response missing 'id' field"
        assert "name" in data, "Response missing 'name' field"
        assert "email" in data, "Response missing 'email' field"
        assert "message" in data, "Response missing 'message' field"
        assert "timestamp" in data, "Response missing 'timestamp' field"
        
        # Verify values match input
        assert data["name"] == test_name, f"Name mismatch: expected {test_name}, got {data['name']}"
        assert data["email"] == test_email, f"Email mismatch: expected {test_email}, got {data['email']}"
        assert data["message"] == test_message, f"Message mismatch"
        
        # Verify id is a valid UUID
        assert len(data["id"]) == 36, "ID should be a valid UUID"
        
        # Verify timestamp is ISO format
        assert "T" in data["timestamp"], "Timestamp should be ISO format"
        
        print(f"PASS: POST /api/contact returns 200 with id={data['id']}")

    def test_post_contact_validates_email(self):
        """Test POST /api/contact - verify email field is required"""
        payload = {
            "name": "Test User",
            "message": "Test message"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should return 422 for missing required field
        assert response.status_code == 422, f"Expected 422 for missing email, got {response.status_code}"
        print("PASS: POST /api/contact returns 422 when email is missing")

    def test_post_contact_validates_name(self):
        """Test POST /api/contact - verify name field is required"""
        payload = {
            "email": "test@example.com",
            "message": "Test message"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should return 422 for missing required field
        assert response.status_code == 422, f"Expected 422 for missing name, got {response.status_code}"
        print("PASS: POST /api/contact returns 422 when name is missing")

    def test_post_contact_validates_message(self):
        """Test POST /api/contact - verify message field is required"""
        payload = {
            "name": "Test User",
            "email": "test@example.com"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=payload,
            headers={"Content-Type": "application/json"}
        )
        
        # Should return 422 for missing required field
        assert response.status_code == 422, f"Expected 422 for missing message, got {response.status_code}"
        print("PASS: POST /api/contact returns 422 when message is missing")

    def test_get_contacts_returns_list(self):
        """Test GET /api/contacts returns a list"""
        response = requests.get(f"{BASE_URL}/api/contacts")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        data = response.json()
        assert isinstance(data, list), "Response should be a list"
        
        print(f"PASS: GET /api/contacts returns 200 with {len(data)} contacts")

    def test_post_contact_and_verify_in_get(self):
        """Test that a posted contact appears in GET /api/contacts"""
        # Create a unique contact
        unique_id = uuid.uuid4().hex[:8]
        test_name = f"TEST_Verify_{unique_id}"
        test_email = f"verify_{unique_id}@test.com"
        test_message = f"Verification test message {unique_id}"

        # POST the contact
        post_response = requests.post(
            f"{BASE_URL}/api/contact",
            json={"name": test_name, "email": test_email, "message": test_message},
            headers={"Content-Type": "application/json"}
        )
        
        assert post_response.status_code == 200
        posted_data = post_response.json()
        posted_id = posted_data["id"]
        
        # GET all contacts and verify our contact is there
        get_response = requests.get(f"{BASE_URL}/api/contacts")
        assert get_response.status_code == 200
        
        contacts = get_response.json()
        
        # Find our contact by ID
        found_contact = None
        for contact in contacts:
            if contact.get("id") == posted_id:
                found_contact = contact
                break
        
        assert found_contact is not None, f"Posted contact with id {posted_id} not found in GET response"
        assert found_contact["name"] == test_name
        assert found_contact["email"] == test_email
        assert found_contact["message"] == test_message
        
        print(f"PASS: Posted contact {posted_id} found in GET /api/contacts")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
