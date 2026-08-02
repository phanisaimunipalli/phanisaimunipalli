// Source of truth: /public/profile/*.json (copied from original repo).
// Walmart-internal project details are intentionally excluded.

export const site = {
  name: "Phani Sai Ram Munipalli",
  shortName: "Phani",
  tagline: "Senior Product Manager · Software Engineer · Author · Podcast Host",
  location: "Bay Area, California",
  email: "phanisaimunipalli@gmail.com",
  heroImage: "/images/about/phanisairam_home_image.PNG",
  heroImageCircle: "/images/about/phanisairam_home_image_circle.PNG",
  aboutImage: "/images/about/phani_about1.png",
  roles: [
    "a Senior Product Manager",
    "a Software Engineer",
    "a builder of AI agent tools",
    "an Author",
    "a Founder & Podcast Host",
  ],
  links: {
    linkedin: "https://linkedin.com/in/iamphanisairam",
    github: "https://github.com/phanisaimunipalli",
    newsletter: "https://phanisproduct.substack.com",
    medium: "https://medium.com/cloud9writings",
    podcastSpotify: "https://open.spotify.com/show/0qh7VRnAXiUqzWEBD87HBN",
    podcastAll: "https://linktr.ee/thehustlechapters",
    topmate: "https://topmate.io/iamphanisairam",
    resume: "/pdfs/PhaniSaiRam_Munipalli_Resume.pdf",
  },
};

// About toverbatim from about.json, with markdown bold converted inline.
export const about = {
  paragraphs: [
    "Hello! I'm **Phani Sai Ram Munipalli**, a Senior Product Manager in the Bay Area. For the past **6 years**, I've been dedicated to building and shipping technology products. From the fast-paced environment of startups to the scale of industry leaders like IBM & Walmart.",
    "My career began at the heart of technology. In Software Engineering. This hands-on experience gave me a ^^fundamental understanding of what it takes to build great products^^ from the ground up and sparked my passion for bridging the gap between technical execution and strategic vision.",
    "My philosophy is that the most successful products are built on a foundation of deep user empathy. My approach is always to start with the customer, collaborating closely with Data, Engineering, Design and Business teams to translate user insights into elegant and impactful solutions.",
    "My background provides a distinct advantage: I am fluent in the languages of both product and engineering. This allows me to architect a compelling product vision while understanding the technical nuances, foster seamless collaboration between technical and non-technical teams, and ^^ensure we not only design the right product but also build the product right^^.",
  ],
  image: "/images/about/phani_about1.png",
};

export type ExperienceItem = {
  title: string;
  company: string;
  workType: "Full-Time" | "Internship" | "Part-Time" | "Volunteer";
  description?: string;
  skills: string[];
  date: string;
  kind: "PM" | "SWE" | "EDU";
};

// Experiences verbatim. Walmart descriptions are scope only, no internal
// metrics, parameters, or system names.
export const experiences: ExperienceItem[] = [
  {
    title: "Senior Product Manager",
    company: "Walmart · U.S. Last Mile Delivery",
    workType: "Full-Time",
    description:
      "Leading the driver promotions platform for supply and demand optimization in last mile delivery.",
    skills: ["AI/ML", "Cross-Functional Leadership", "Product Strategy"],
    date: "May 2026 to Present",
    kind: "PM",
  },
  {
    title: "Product Manager III",
    company: "Walmart · U.S. Last Mile Delivery",
    workType: "Full-Time",
    description:
      "Led location intelligence optimization, built identity verification experience for gig drivers, and owned the driver promotions platform.",
    skills: ["AI/ML", "Cross-Functional Leadership", "Product Strategy"],
    date: "July 2024 to May 2026",
    kind: "PM",
  },
  {
    title: "Product Management Intern",
    company: "VComply · Risk & Compliance",
    workType: "Internship",
    description:
      "Reduced policy creation time by 85% with a GPT-4o (Azure OpenAI) multilingual generator (10 languages), resulting in 40% enterprise adoption.",
    skills: ["LLMs", "User Experience", "Product Execution", "Document Search"],
    date: "Feb 2024 to May 2024",
    kind: "PM",
  },
  {
    title: "Product Management Intern",
    company: "Walmart · U.S. Last Mile Delivery",
    workType: "Internship",
    description:
      "Authored and drove alignment on 2 detailed PRDs and 7 product one-pagers in an accelerated timeline of eight weeks; secured stakeholder buy-in across Business, Engineering, Data Science, and UX Design teams.",
    skills: ["Product Strategy", "Data Analysis", "Product Discovery", "User Research"],
    date: "May 2023 to Aug 2023",
    kind: "PM",
  },
  {
    title: "AI Research Assistant",
    company: "SJSU Research Foundation · Explainable AI · Conversational Agents",
    workType: "Part-Time",
    description:
      "Advanced Conversational AI research by reviewing 24+ papers monthly, developing novel datasets with ChatGPT, and co-authoring conference papers.",
    skills: ["AI Research", "NLP", "Dataset Development", "Python"],
    date: "Jan 2023 to May 2023",
    kind: "PM",
  },
  {
    title: "Teaching Assistant",
    company: "SJSU · Computer Applications",
    workType: "Part-Time",
    description:
      "Co-managed a Python course for 75+ undergrad students, improving coding skills through hands-on workshops.",
    skills: ["Python", "Teaching", "Curriculum Development", "Mentorship"],
    date: "Jan 2023 to May 2023",
    kind: "EDU",
  },
  {
    title: "Chief Technology Officer",
    company: "SJSU · Indian Student Organization",
    workType: "Volunteer",
    description:
      "Led technical direction and web development using the MERN stack, collaborating with a distributed team to integrate various services for university events.",
    skills: ["MERN Stack", "Leadership", "Web", "Collaboration"],
    date: "Aug 2022 to Jun 2023",
    kind: "SWE",
  },
  {
    title: "Software Engineer II",
    company: "Walmart Global Tech",
    workType: "Full-Time",
    description:
      "Architected 16+ microservices and re-engineered 8 REST APIs to reduce p99 latency by 32%, while driving initiatives that achieved 2-day delivery for 60% of orders.",
    skills: ["Microservices", "System Architecture", "API Design", "Performance Tuning"],
    date: "Jun 2020 to Jul 2022",
    kind: "SWE",
  },
  {
    title: "Software Engineer I",
    company: "IBM India Pvt Ltd",
    workType: "Full-Time",
    description:
      "Developed and maintained a highly available microservices architecture for a large-scale payments platform, handling 8M+ transactions daily.",
    skills: ["Microservices", "Java", "Spring Boot", "High Availability"],
    date: "Mar 2018 to Jun 2020",
    kind: "SWE",
  },
  {
    title: "Software Development Intern",
    company: "Pinapaka IT",
    workType: "Internship",
    description:
      "Developed and tested a critical Java middleware component for a payment gateway integration, achieving over 80% unit test coverage for high reliability.",
    skills: ["Java", "Middleware", "Unit Testing", "Payment Gateways"],
    date: "May 2017 to Mar 2018",
    kind: "SWE",
  },
  {
    title: "IoT Engineering Intern",
    company: "Miracle Software Systems Inc",
    workType: "Internship",
    description:
      "Led a team of 4 to win a 24-hour live hackathon and subsequently developed an RFID-enabled IoT ticketing system using Python and Raspberry Pi.",
    skills: ["IoT", "Python", "Raspberry Pi", "Prototyping"],
    date: "Jan 2017 to Mar 2017",
    kind: "SWE",
  },
];

export type Project = {
  title: string;
  emoji?: string;
  body: string;
  tags: string[];
  primaryLink?: { text: string; href: string };
  secondaryLink?: { text: string; href: string };
  year: string;
  category: "AI" | "Cloud" | "Product" | "Podcast" | "Enterprise" | "Web";
  gradient: { from: string; via?: string; to: string };
  image?: string;
  isNew?: boolean;
};

// Projects toverbatim bodies from projects.json.
// Walmart internal projects (WFS, GDM, Rx Audit) explicitly excluded.
export const projects: Project[] = [
  {
    title: "BrandNamer",
    emoji: "🏷️",
    year: "Apr 2026",
    category: "AI",
    body: "AI-powered brand name generator for App Store launches. Describe your product, pick an LLM, get a curated table of names with App Store conflict checks.",
    tags: ["Apr 2026", "Python", "Gemini", "OpenAI", "Claude", "Ollama"],
    primaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/brandnamer" },
    gradient: { from: "#1e3a5f", via: "#1d4ed8", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Knoted",
    emoji: "📱",
    year: "Apr 2026",
    category: "Cloud",
    body: "iOS app for pinning and discovering hyperlocal tips. Restaurants, hidden spots, neighbourhood secrets. Built with SwiftUI, CloudKit, and MapKit. Submitted to the App Store.",
    tags: ["Apr 2026", "Swift", "SwiftUI", "CloudKit", "MapKit", "iOS"],
    primaryLink: { text: "Website", href: "https://github.com/phanisaimunipalli/knoted-web" },
    gradient: { from: "#0f4c81", via: "#2563eb", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Dhvani",
    emoji: "🎙️",
    year: "Mar 2026",
    category: "AI",
    body: "Real time YouTube video dubbing system. Paste a URL, pick a language, and speech streams through ASR, translation, and TTS in under 3 seconds. Built at Boson AI × Eigen AI Hackathon.",
    tags: ["Mar 2026", "Hackathon", "Python", "FastAPI", "Gemini", "Boson AI"],
    primaryLink: { text: "Live Demo", href: "https://dhvani-demo-deploy.vercel.app/" },
    secondaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/dhvani-higgs" },
    gradient: { from: "#0c4a6e", via: "#0369a1", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Glide",
    emoji: "⚡",
    year: "Mar 2026",
    category: "AI",
    body: "Latency-aware model cascade for agentic LLM workflows. Automatically routes requests to the fastest available model with failover built in.",
    tags: ["Mar 2026", "Python", "LLM", "Agents", "Claude", "Anthropic"],
    primaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/glide" },
    gradient: { from: "#0b2d6e", via: "#1e40af", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Symm",
    emoji: "🔍",
    year: "Mar 2026",
    category: "AI",
    body: "Post-generation API drift detection and correction for LLM-generated Python code. Catches hallucinated APIs before they break production.",
    tags: ["Mar 2026", "Python", "LLM", "Code Quality", "AI Safety"],
    primaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/symm" },
    gradient: { from: "#064e6b", via: "#0e7490", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "llm-circuit",
    emoji: "🔌",
    year: "Mar 2026",
    category: "AI",
    body: "Circuit breaker pattern for agentic LLM workflows. Auto-fails over from Anthropic to local Ollama when the primary model is unavailable or slow.",
    tags: ["Mar 2026", "Python", "FastAPI", "Anthropic", "Ollama", "Open Source"],
    primaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/llm-circuit" },
    gradient: { from: "#1e1b4b", via: "#3730a3", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Passlogue",
    emoji: "🔑",
    year: "Mar 2026",
    category: "AI",
    body: "Human-readable identifiers for multi-agent AI systems. Generates slugs like cached-relay-opens instead of UUIDs. Zero dependencies, works offline, plugs into LangChain and AutoGen.",
    tags: ["Mar 2026", "Python", "Agents", "LangChain", "AutoGen", "Open Source"],
    primaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/passlogue" },
    gradient: { from: "#0f3460", via: "#0284c7", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Startup Sunsets",
    emoji: "🌅",
    year: "Feb 2026",
    category: "Product",
    body: "Billion dollar startup failures turned into a library of lessons. Every shutdown, every pivot gone wrong, archived and searchable so the next founder doesn't repeat it.",
    tags: ["Feb 2026", "TypeScript", "Startups", "Product Research"],
    primaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/startupsunsets" },
    gradient: { from: "#1e1b4b", via: "#4338ca", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Locant",
    emoji: "🗺️",
    year: "Feb 2026",
    category: "Product",
    body: "Matches local search intent with supply. Surfaces the right local business at the moment someone is looking, bridging discovery and conversion.",
    tags: ["Feb 2026", "TypeScript", "Local Search", "Product"],
    primaryLink: { text: "Visit Locant", href: "https://locant.vercel.app/" },
    secondaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/locant" },
    gradient: { from: "#0a2e52", via: "#1d4ed8", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Daily Lenny",
    emoji: "📬",
    year: "Jan 2026",
    category: "AI",
    body: "AI powered newsletter engine that extracts actionable insights from Lenny's Podcast and delivers them personalized to your role. Growth, hiring, strategy, or product.",
    tags: ["Jan 2026", "TypeScript", "Gemini", "Supabase", "Resend", "AI"],
    primaryLink: { text: "Visit Daily Lenny", href: "https://dailylenny.vercel.app/" },
    secondaryLink: { text: "GitHub", href: "https://github.com/phanisaimunipalli/dailylenny" },
    gradient: { from: "#0b3d91", via: "#1e40af", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "SafeWord AI",
    emoji: "🛡️",
    year: "Aug 2024",
    category: "AI",
    body:
      "A safety companion that generates personalized safewords and distress-signal plans. Built end-to-end and shipped solo, powered by Google Gemini.",
    tags: ["Aug 2024", "Gemini", "Next.js", "Vercel", "Safety", "Solo"],
    primaryLink: { text: "Try SafeWord", href: "https://safewordai.vercel.app/" },
    gradient: { from: "#0b3d91", via: "#1d4ed8", to: "#0b0b0b" },
    isNew: true,
  },
  {
    title: "Ad Creator GPT",
    emoji: "🚀",
    year: "Nov 2023",
    category: "AI",
    body:
      "Create a custom GPT using OpenAI's GPT that ships Ads visually stunning and filled with positive vibes. Generate personalized Ad images to add personality to your brand.",
    tags: ["Nov 2023", "Open AI", "GPTs", "Ads", "Custom GPT"],
    primaryLink: {
      text: "Open Ad Creator GPT",
      href: "https://chat.openai.com/g/g-xHib60YWY-ad-creator",
    },
    gradient: { from: "#0f4c81", via: "#2563eb", to: "#0b0b0b" },
  },
  {
    title: "LinkPlus",
    emoji: "🚀",
    year: "Oct 2023",
    category: "AI",
    body:
      "Boost your LinkedIn presence by generating impactful headlines and messages tailored to your experience and skill set. Get creative headlines based on your skill set and tailor connection-request messages in seconds.",
    tags: ["Oct 2023", "Vercel Edge Functions", "OpenAI", "Product Discovery", "UX"],
    primaryLink: { text: "Try LinkPlus", href: "https://linkplus.vercel.app" },
    secondaryLink: {
      text: "GitHub",
      href: "https://github.com/phanisaimunipalli/linkplus",
    },
    gradient: { from: "#064e6b", via: "#0891b2", to: "#0b0b0b" },
  },
  {
    title: "The Hustle Chapters",
    emoji: "🎧",
    year: "Apr 2023",
    category: "Podcast",
    body:
      "A podcast show about decision-making in technology & business. I always wonder how people make decisions. I invite industry experts to share their stories and decision-making strategies.",
    tags: ["2023", "Founder", "Podcast", "Spotify", "Apple Podcasts", "Amazon Music"],
    primaryLink: { text: "Listen", href: "https://linktr.ee/thehustlechapters" },
    gradient: { from: "#1e3a8a", via: "#3b82f6", to: "#0b0b0b" },
  },
  {
    title: "Product · User Research",
    emoji: "👨‍🔬",
    year: "Mar 2023",
    category: "Product",
    body:
      "With the rise of Generative AI tools everywhere, users are overwhelmed with options. I started research into users' pain points. Out of 50+ users: 86% prefer Data Privacy, 82% prioritize Productivity, and 25% had never used these tools as of March 2023.",
    tags: ["2023", "Product Research", "Product-Market Fit", "User Pain Points"],
    primaryLink: {
      text: "Research PDF",
      href: "/pdfs/AI_Products_Survey.pdf",
    },
    gradient: { from: "#0c4a6e", via: "#0ea5e9", to: "#0b0b0b" },
  },
  {
    title: "GiftGen",
    emoji: "🎁",
    year: "Jan 2023",
    category: "AI",
    body:
      "GiftGen utilizes ChatGPT and DALL·E to generate personalized gift ideas for your friends and family. Easy to browse, tailored to interests, and makes gift-giving more fun & thoughtful.",
    tags: ["2023", "DALL·E APIs", "OpenAI", "ChatGPT", "React.js", "MUI", "Vercel"],
    primaryLink: { text: "Open GiftGen", href: "https://giftgen-gpt.vercel.app" },
    secondaryLink: {
      text: "GitHub",
      href: "https://github.com/phanisaimunipalli/giftgen",
    },
    gradient: { from: "#1e40af", via: "#4f46e5", to: "#0b0b0b" },
  },
  {
    title: "InTool",
    emoji: "🤖",
    year: "Mar 2023",
    category: "Product",
    body:
      "InTool is a one-stop shop for all your AI needs and a way to supercharge your productivity. Find the right AI resource in a single search instead of trying out multiple things.",
    tags: ["2023", "Airtable", "Softr", "Product Manager", "Product Launch"],
    primaryLink: { text: "Visit InTool", href: "https://www.intool.website/" },
    gradient: { from: "#075985", via: "#0284c7", to: "#0b0b0b" },
  },
  {
    title: "Subspire",
    emoji: "📊",
    year: "Nov 2022",
    category: "Cloud",
    body:
      "End-to-end subscriptions management dashboard to track and generate analytics for informed decisions. Finalist at Silicon Valley Innovation Challenge 2022.",
    tags: [
      "2022",
      "SVIC '22 Finalist",
      "AWS",
      "Micro Frontends",
      "React.js",
      "Tailwind",
      "Lambda",
    ],
    primaryLink: {
      text: "GitHub",
      href: "https://github.com/phanisaimunipalli/subspire-frontend",
    },
    gradient: { from: "#1e3a8a", via: "#3730a3", to: "#0b0b0b" },
  },
  {
    title: "InSearch",
    emoji: "🔍",
    year: "Oct 2022",
    category: "Cloud",
    body:
      "AWS InSearch is a serverless app powered by AWS Lambda and AWS Rekognition, which detects items and generates labels from images uploaded to an S3 bucket.",
    tags: ["2022", "Serverless", "AWS Rekognition", "AWS S3", "Lambda"],
    primaryLink: {
      text: "More about InSearch",
      href: "https://github.com/phanisaimunipalli/aws-insearch",
    },
    gradient: { from: "#164e63", via: "#0891b2", to: "#0b0b0b" },
  },
  {
    title: "AWS QR Saver",
    emoji: "☁️📁",
    year: "Oct 2022",
    category: "Cloud",
    body:
      "QR Saver is powered by AWS CodeStar. It leverages AWS Cloud services deployed via AWS CloudFormation to Elastic Beanstalk and Amazon API Gateway.",
    tags: ["2022", "NodeJS", "Express", "DynamoDB", "S3", "Lambda"],
    primaryLink: {
      text: "GitHub",
      href: "https://github.com/phanisaimunipalli/AWS-QR-Saver",
    },
    gradient: { from: "#0c4a6e", via: "#0369a1", to: "#0b0b0b" },
  },
  {
    title: "ISO-SJSU Web",
    emoji: "🎓",
    year: "Aug 2022",
    category: "Web",
    body:
      "A web application built using the MERN stack to provide information to Indian students studying at San José State University. Rebranded and rebuilt from scratch with the SJSU theme.",
    tags: ["MERN", "React", "NextJS", "Volunteer"],
    primaryLink: { text: "Visit ISO-SJSU", href: "http://isosjsu.com/" },
    gradient: { from: "#1e40af", via: "#0369a1", to: "#0b0b0b" },
  },
];

export const skills = [
  {
    title: "Cloud Technologies",
    items: [
      { icon: "/images/skills/aws.png", title: "Amazon Web Services" },
      { icon: "/images/skills/azure.png", title: "Azure" },
      { icon: "/images/skills/gcp.png", title: "Google Cloud" },
      { icon: "/images/skills/ibm.png", title: "IBM Cloud" },
    ],
  },
  {
    title: "Languages & Databases",
    items: [
      { icon: "/images/skills/java.png", title: "Java" },
      { icon: "/images/skills/js.png", title: "JavaScript" },
      { icon: "/images/skills/python.png", title: "Python" },
      { icon: "/images/skills/mysql.png", title: "MySQL" },
      { icon: "/images/skills/mongo-db.png", title: "MongoDB" },
      { icon: "/images/skills/html.png", title: "HTML5" },
      { icon: "/images/skills/css.png", title: "CSS" },
    ],
  },
  {
    title: "Frameworks & Technologies",
    items: [
      { icon: "/images/skills/react.png", title: "React" },
      { icon: "/images/skills/spring.png", title: "Spring" },
      { icon: "/images/skills/android_new.png", title: "Android" },
      { icon: "/images/skills/nodejs.png", title: "Node.js" },
      { icon: "/images/skills/kafka.png", title: "Kafka" },
      { icon: "/images/skills/camel.png", title: "Camel" },
      { icon: "/images/skills/angular.svg", title: "Angular" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { icon: "/images/skills/watson.png", title: "IBM Watson" },
      { icon: "/images/skills/git.png", title: "Git" },
      { icon: "/images/skills/docker.png", title: "Docker" },
      { icon: "/images/skills/kube.png", title: "Kubernetes" },
      { icon: "/images/skills/jenkins.png", title: "Jenkins" },
      { icon: "/images/skills/salesforce.png", title: "Salesforce" },
    ],
  },
];

export type Achievement = {
  date: string;
  title: string;
  subtitle: string;
  description?: string[];
  image: string;
};

export const achievements: Achievement[] = [
  {
    date: "August 2023",
    title: "Product Strategy Micro-Certification",
    subtitle: "Product School",
    image: "/images/achievements/ProductStrategy-Certification-Phani.png",
  },
  {
    date: "June 2023",
    title: "Leadership & Career Certification Program",
    subtitle: "San José State University",
    image: "/images/achievements/Phani-LCCP_Certificate_of_Completion_2023.png",
  },
  {
    date: "January 2023",
    title: "AWS Cloud Quest: Cloud Practitioner",
    subtitle: "Amazon Web Services",
    description: [
      "Demonstrated basic solution-building knowledge using AWS services and a fundamental understanding of AWS Cloud concepts.",
      "Hands-on experience with compute, networking, database, and security services.",
    ],
    image: "/images/achievements/Phani_AWSCloud_Quest_CredlyBadge.png",
  },
  {
    date: "December 2022",
    title: "Product-Led Certified",
    subtitle: "Pendo & Mind The Product",
    description: [
      "Knowledge of how to place the product at the center of the customer experience.",
      "Leverage the product to solve challenges across all departments of the business.",
    ],
    image: "/images/achievements/PhaniM_ProductLed_Certified.png",
  },
  {
    date: "May 2021",
    title: "Bravo Award",
    subtitle: "Walmart Global Tech India",
    description: [
      "Recognition for engineering impact during the Software Engineering chapter of my career.",
    ],
    image: "/images/achievements/phani_bravo_award.png",
  },
  {
    date: "June 2021",
    title: "Innovation Award",
    subtitle: "Walmart Global Tech India",
    description: [
      "For creating Python scripts to handle 2 million records in seconds instead of the traditional way.",
    ],
    image: "/images/achievements/phani_innovation_award.png",
  },
  {
    date: "July 2018",
    title: "Brighter Blue",
    subtitle: "IBM India Pvt Ltd",
    description: [
      "Recognized for creative use of technology to convey engaging stories through a conversational agent.",
    ],
    image: "/images/achievements/phani_ibm_award.jpg",
  },
  {
    date: "April 2017",
    title: "College Representative Recognition",
    subtitle: "Entrepreneurship Cell of IIT Bombay",
    description: [
      "For representing the college and driving entrepreneurial spirit within the student community.",
    ],
    image: "/images/achievements/phani_iit_bombay.jpg",
  },
  {
    date: "December 2016",
    title: "3rd Place · 24 Hour Code-A-Thon",
    subtitle: "Miracle Software Systems, Inc",
    description: ["IoT segment. 24 hours of continuous coding to build a working application."],
    image: "/images/achievements/phani_miracle.jpg",
  },
  {
    date: "Aug 2016",
    title: "2nd Place · National Project Presentation",
    subtitle: "JNTU Kakinada",
    description: ["Presentation on the e-Magazine platform built for the college student body."],
    image: "/images/achievements/phani_jntuk_project.jpg",
  },
];

export const education = [
  {
    date: "Aug 2022 to May 2024",
    title: "Master's Degree in Software Engineering",
    subtitle: "San José State University · California, USA",
    details: ["Enterprise Software Platforms", "Cloud Technologies", "Machine Learning"],
  },
  {
    date: "Aug 2013 to May 2017",
    title: "Bachelor's Degree in Computer Science & Engineering",
    subtitle: "JNTU Kakinada, India",
    details: [],
  },
  {
    date: "Jun 2011 to Jun 2013",
    title: "Senior High School",
    subtitle: "Narayana Jr College, Vijayawada, India",
    details: ["Maths · Physics · Chemistry"],
  },
];

export const writing = {
  newsletter: {
    title: "Phani's Product",
    tagline:
      "A weekly newsletter on AI-native product management, builder stories, and what I learned shipping this week.",
    href: site.links.newsletter,
  },
  medium: {
    title: "Cloud 9 Writings",
    tagline:
      "Long-form essays on AI, product craft, and the decisions behind the products I ship.",
    href: site.links.medium,
  },
};

export const podcast = {
  title: "The Hustle Chapters",
  tagline:
    "Unfiltered conversations with operators, founders, and product leaders about the decisions that actually shipped their products. Listeners across six countries.",
  spotify: site.links.podcastSpotify,
  all: site.links.podcastAll,
};

export const stats = [
  { label: "years industry", value: "6" },
  { label: "products shipped", value: "10+" },
  { label: "countries listening", value: "6" },
  { label: "awards won", value: "8" },
];
