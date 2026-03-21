export const portfolioData = {
  personal: {
    name: "SOUHITYA SAR",
    surname: "SHO",
    role: "Copywriter | Content Strategist",
    welcomeMessage: "Welcome to the SHO-verse!",
    tagline: "Where we 'SHO' up for the good of storytelling.",
    instructions: "Dial in to the work. Choose your brand.",
    bio: "A dedicated writer and content strategist with 4+ years of experience, working with an array of national and international brands.",
    email: "souhityasar@gmail.com",
    phone: "+91 90078 34186",
    yearsOfExperience: "4+"
  },

  callCenterMessages: [
    "Your creative call is important...",
    "Please hold while I connect you to amazing work...",
    "All brand representatives are currently engaged with storytelling. Your patience is appreciated.",
    "Thank you for dialing into the SHO-verse!",
    "Press # to return to the main menu, or 0 to go home."
  ],

  brands: [
    {
      id: 1,
      key: "1",
      name: "CAMPUS SHOES",
      shortName: "Campus",
      description: "Footwear campaigns that made GenZ walk the talk"
    },
    {
      id: 2,
      key: "2",
      name: "TRIUMPH MOTORCYCLES",
      shortName: "Triumph",
      description: "Campaigns for the distinguished rider"
    },
    {
      id: 3,
      key: "3",
      name: "AUDI INDIA",
      shortName: "Audi",
      description: "Campaigns crafted for every mood"
    },
    {
      id: 4,
      key: "4",
      name: "HAVMOR",
      shortName: "Havmor",
      description: "Ice cream campaigns so tasty, you wanna Havmor"
    },
    {
      id: 5,
      key: "5",
      name: "CASTROL INDIA",
      shortName: "Castrol",
      description: "Performance-first campaigns for the ultimate motostar"
    },
    {
      id: 6,
      key: "6",
      name: "BIRLA ESTATES",
      shortName: "Birla",
      description: "Luxury campaigns that indulge in living"
    }
  ],

  projects: [
    // CAMPUS SHOES (1)
    {
      id: 101,
      brandId: 1,
      brand: "CAMPUS SHOES",
      title: "You Go Girl!",
      year: "2025",
      thumbnail: "campus-you-go-girl",
      shortDescription: "Launched Kriti Sanon as the brand ambassador with a powerful campaign.",
      description: "Launched Kriti Sanon as the brand ambassador. Created a powerful TVC and website innovation for Campus women's collection.",
      brief: "Showcase Campus' women's collection by elevating the 'YOU GO GIRL!' narrative and inspiring women to own their style.",
      idea: "Anchored on balloons carrying negative comments, symbolizing judgments women face, with the message of crushing them to move forward.",
      amplification: "TVC launch with brand ambassador + website gamification where users crush balloons with negative comments to reveal positive messages and get discounts.",
      category: "Integrated TVC Campaign",
      tags: ["TVC", "Brand Launch", "Website Innovation", "Social Commentary"],
      videoUrl: "https://youtu.be/1dS11Tf9yUo?si=y7xCWYQhi1MDXsiO"
    },

    // HAVMOR (4)
    {
      id: 201,
      brandId: 4,
      brand: "HAVMOR ICE CREAMS",
      title: "So Tasty, You Wanna Havmor!",
      year: "2024",
      thumbnail: "havmor-tvc",
      shortDescription: "A playful TVC with 'greed' as the central theme.",
      description: "Created a playful TVC emphasizing Havmor ice creams as the tastiest and creamiest, with 'greed' as the central theme.",
      brief: "Create a playful TVC, showing Havmor ice creams to be the tastiest and creamiest the market - that gets you greedy instantly.",
      idea: "The idea revolved around a simple insight - Greed is when you're done with what you're having and you start eyeing whatever the other person is. This insight gave rise to the TVC called 'Table Trouble'.",
      category: "TVC Campaign",
      tags: ["TVC", "Brand Communication", "Consumer Insight"],
      videoUrl: "https://youtu.be/H8QsOPzQT1s?si=jnPhMJg4YBbhnJh3"
    },

    // CASTROL INDIA (5)
    {
      id: 301,
      brandId: 5,
      brand: "CASTROL INDIA",
      title: "India's Ultimate Motostar",
      year: "2023",
      thumbnail: "castrol-motostar",
      shortDescription: "Created India's first reality show around motoracing.",
      description: "Created India's first motoracing centric IP to showcase Castrol POWER1's MotoGP association and market it as a performance-first engine oil in India.",
      brief: "Solidify Castrol POWER1's presence in India as a performance-first engine oil by leveraging their association with the LCR Honda MotoGP team.",
      idea: "Create a reality show around motoracing across the country - the first ever to happen in India.",
      amplification: "Amplified via podcast 'Untold Racing Stories' and other content formats.",
      category: "Branded Entertainment",
      tags: ["Reality Show", "Podcast", "Content Strategy", "Branded Entertainment"],
      videoUrl: "https://youtu.be/f-On6cBOBTc?si=lxK3AcwNNiwk_g3P",
      videos: [
        {
          url: "https://youtu.be/2G9msv5drZ8?si=FmZmwfs_ZQBE6KJG",
          label: "Amplification via podcast",
          isYouTube: true
        }
      ]
    },

    // TRIUMPH MOTORCYCLES (2)
    {
      id: 401,
      brandId: 2,
      brand: "TRIUMPH MOTORCYCLES",
      title: "The GST Campaign",
      year: "2025",
      thumbnail: "triumph-gst",
      shortDescription: "Dual-read statements highlighting Triumph's decision to absorb GST hike.",
      description: "Created dual-read statements highlighting Triumph's decision to absorb GST hike, keeping prices down and spirits up.",
      brief: "Highlight Triumph motorcycles' choice of absorbing the GST hike on 400cc+ motorcycles.",
      idea: "Dual-read statements that speak to the joy of riding and the reassurance of Triumph's pricing strategy.",
      amplification: "Series of social media posts with (somewhat) clever copywriting.",
      category: "Social Campaign",
      tags: ["Social Media", "Copywriting", "Brand Communication"],
      videoUrl: null,
      images: [
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/sk7mv8c1_image.png",
          label: null
        },
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/npv2cprk_image.png",
          label: null
        },
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/mxs89ppk_image.png",
          label: null
        }
      ]
    },
    {
      id: 402,
      brandId: 2,
      brand: "TRIUMPH MOTORCYCLES",
      title: "Two Triumphants",
      year: "2025",
      thumbnail: "triumph-podcast",
      shortDescription: "A podcast series featuring Triumph owners' authentic stories.",
      description: "Developed a podcast series where Triumph owners discuss their love for the ride and the brand in candid conversations.",
      brief: "Make customer testimonials more interesting.",
      idea: "Elevate the concept of testimonials into a podcast series featuring real Triumph owners - offering aspirational and authentic content for the audience.",
      amplification: "Multiple snippets from the main podcast going up as Shorts.",
      category: "Podcast Series",
      tags: ["Podcast", "Content Strategy", "Customer Stories"],
      videoUrl: "https://youtu.be/i8-5-6sPWVo?si=rxpQaBpTWuzO_COd"
    },
    {
      id: 403,
      brandId: 2,
      brand: "TRIUMPH MOTORCYCLES",
      title: "The Road Less Scrambled",
      year: "2026",
      thumbnail: "triumph-scrambled",
      shortDescription: "A campaign showcasing the Triumph Scrambler 400 X.",
      description: "A campaign showcasing the Triumph Scrambler 400 X with authentic storytelling and adventure.",
      brief: "To strengthen Triumph's 'For those who know the difference' communication and position the Scrambler 400 X as the discerning rider's choice; for those who explore beyond the obvious.",
      briefLabel: "THE OBJECTIVE",
      idea: "In a world driven by popular choices, only a few seek meaning in exploration. And they do so, by choosing what others overlook.",
      ideaLabel: "THE INSIGHT",
      amplification: "A content series that celebrates intentional exploration to 'roads less scrambled' - where those who know, choose experiences that stand apart.",
      amplificationLabel: "THE IDEA",
      category: "YouTube Series",
      tags: ["Event Marketing", "Social Media", "Brand Positioning"],
      videoUrl: "https://youtu.be/HdUgOxr8kRY?si=OCQ-CkexDHrtUM14"
    },
    {
      id: 404,
      brandId: 2,
      brand: "TRIUMPH MOTORCYCLES",
      title: "Poster Series",
      year: "2025",
      thumbnail: "triumph-posters",
      shortDescription: "A gritty poster series capturing the raw feeling of the ride.",
      description: "Created a gritty poster series for Triumph that captured the raw feeling of the ride, strengthening the 'For those who know the difference' communication.",
      briefLabel: "THE OBJECTIVE",
      brief: "To reinforce 'For those who know the difference' by translating the ride into a visceral, emotional experience.",
      ideaLabel: "THE INSIGHT",
      idea: "Riders who truly know the difference don't just understand performance, they truly feel it.",
      amplificationLabel: "THE IDEA",
      amplification: "A series of macro, close-up riding shots paired with sharp copy that brings the raw, unmistakable feeling of the ride to life. Those who know the difference, know the feeling.",
      category: "Social and Print Campaign",
      tags: ["Poster Design", "Brand Communication", "Copywriting"],
      videoUrl: null,
      images: [
        { url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/s44g07e3_image.png", label: null },
        { url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/8e7tojwc_image.png", label: null },
        { url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/hyvmso7m_image.png", label: null },
        { url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/a6ps115m_image.png", label: null }
      ]
    },
    {
      id: 405,
      brandId: 2,
      brand: "TRIUMPH MOTORCYCLES",
      title: "Long Copy",
      year: "2025",
      thumbnail: "triumph-longcopy",
      shortDescription: "Insightful long copy work that got appreciated",
      description: "Showcasing some of my topical-specific long copy work that got appreciated by both the clients and the audience.",
      brief: null,
      idea: null,
      amplification: null,
      category: "Copywriting",
      tags: ["Long Copy", "Copywriting", "Topical"],
      videoUrl: null,
      images: [
        { url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/jji9jhwa_image.png", label: "Father's Day" },
        { url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/k9ruslba_image.png", label: "International Men's Day" }
      ]
    },

    // AUDI INDIA (3)
    {
      id: 501,
      brandId: 3,
      brand: "AUDI INDIA",
      title: "Audi MyAuras",
      year: "2024",
      thumbnail: "audi-myauras",
      shortDescription: "Launch campaign for MyAudiConnect personalization feature.",
      description: "Launched a personalization feature via the MyAudiConnect app to control in-car atmosphere and ambience for every Audi.",
      brief: "Launch a personalization feature via MyAudiConnect app to control in-car atmosphere and ambience.",
      idea: "Showcase how the Audi cabin becomes an immersive world that mirrors the user's mood at the tap of a finger. Four preset moods: Chill, Relax, Fireside, Euphoria.",
      amplification: "Contextual ads and YouTube bumper ads targeting real pain points of consumers.",
      category: "Digital Campaign",
      tags: ["App Launch", "Personalization", "Digital Marketing", "YouTube"],
      videoUrl: null,
      tagline: "Crafted for every mood.",
      images: [
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/aqvfqdgb_image.png",
          label: "Teaser"
        },
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/6rcq113h_image.png",
          label: "Launch"
        },
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/1sivo9zm_image.png",
          label: "Banner Ad"
        },
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/ptxmpm3t_image.png",
          label: "Contextual Ad"
        }
      ],
      videos: [
        {
          url: "https://customer-assets.emergentagent.com/job_be2031ef-937f-48dc-96ce-8f18b87718c2/artifacts/rp8c2xke_orange_1.mp4",
          label: "YT Contextual Pre-roll"
        }
      ]
    },

    // BIRLA ESTATES (6)
    {
      id: 601,
      brandId: 6,
      brand: "BIRLA ESTATES",
      title: "Avik by Birla Navya",
      year: "2024",
      thumbnail: "birla-avik",
      shortDescription: "Luxury residences campaign with Randeep Hooda and an unexpected guest.",
      description: "Created a campaign for Birla Avik that redefined luxury living through an unexpected lens.",
      briefLabel: "THE BRIEF",
      brief: "Build the communication and launch film for Birla Avik, positioning it as a luxury residence in Gurgaon, with Randeep Hooda as the face of the brand.",
      ideaLabel: "THE INSIGHT",
      idea: "In today's fast-paced world, true luxury is about having a space that makes you slow down, unwind, and truly indulge in the life you're living.",
      amplificationLabel: "THE IDEA",
      amplification: "While Randeep Hooda embodied indulgence, we pushed the thought a bit further - who indulges more than the most indulgent man himself?\nHIS DOG.\nBy making his dog the unexpected co-protagonist, we brought alive a world where even indulgence has another level, perfectly capturing what it means to 'Indulge in Living'.",
      category: "DVC Campaign",
      tags: ["Celebrity Endorsement", "Luxury Marketing", "Campaign Development"],
      videoUrl: "https://youtu.be/G3FzO2OD20Q?si=9XAB66J4cYstkTlk",
      tagline: "Indulge in Living."
    },

    // DABUR (Additional)
    {
      id: 701,
      brandId: 7,
      brand: "DABUR CHYAWANPRASH",
      title: "The Immunity Vending Machine",
      year: "2023",
      thumbnail: "dabur-vending",
      shortDescription: "On-ground activation encouraging precaution over medicine hoarding.",
      description: "An on-ground activation encouraging people to prioritize precaution instead of hoarding medicines.",
      brief: "Promote Dabur Chyawanprash by addressing consumer behavior around health and precaution.",
      idea: "'Ghar ko dawaai ki dukaan mat banao' - An Immunity Vending Machine activation as an eye-opener.",
      amplification: "On-ground experiential marketing activation.",
      category: "Activation",
      tags: ["Experiential Marketing", "On-ground Activation", "Health Communication"],
      videoUrl: null
    }
  ],

  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Brands", value: "15+" },
    { label: "Campaigns", value: "25+" }
  ]
};
