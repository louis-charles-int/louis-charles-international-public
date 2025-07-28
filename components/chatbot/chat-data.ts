import type { ChatQuestion } from "./chat-types"

export const chatQuestions: ChatQuestion[] = [
  {
    id: "services",
    question: "What services does Louis Charles International offer?",
    answer:
      "We offer three main services: Marketing Solutions (SEO, social media, content marketing), AI Automation (chatbots, workflow automation, predictive analytics), and Admin Support (virtual assistants, data entry, customer communication).",
    link: {
      label: "View Our Services",
      href: "/expertise",
    },
    followUpQuestions: ["pricing", "timeline", "industries"],
  },
  {
    id: "contact",
    question: "How can I contact your team?",
    answer:
      "You can email us at info@louis-charles.com or fill out our partnership form. We typically respond within 24 hours and offer a free 60-minute consultation call.",
    link: {
      label: "Contact Us",
      href: "/partnership#form",
    },
    followUpQuestions: ["response-time", "consultation", "location"],
  },
  {
    id: "location",
    question: "Where are you located?",
    answer:
      "Our headquarters are in Dubai, UAE (City Tower 2, Sheikh Zayed Road), but we serve clients globally across the UK, USA, and other international markets.",
    followUpQuestions: ["timezone", "global-reach", "remote-work"],
  },
  {
    id: "industries",
    question: "What industries do you specialize in?",
    answer:
      "We work with clients across various industries including technology, healthcare, finance, retail, manufacturing, and more. Our solutions are tailored to meet specific industry needs.",
    followUpQuestions: ["case-studies", "experience", "customization"],
  },
  {
    id: "pricing",
    question: "How much do your services cost?",
    answer:
      "Our pricing varies based on your specific needs and project scope. We offer competitive rates from Dubai and provide custom quotes after understanding your requirements. Early adopters get special founder's pricing.",
    link: {
      label: "Get Custom Quote",
      href: "/partnership#form",
    },
    followUpQuestions: ["payment-terms", "packages", "roi"],
  },
  {
    id: "timeline",
    question: "How quickly can you start working on my project?",
    answer:
      "We can typically start within 1 week after our initial consultation and agreement. Our process includes: Discovery Call (1 hour) → Strategic Assessment (1-2 weeks) → Partnership Proposal (3-5 days) → Onboarding & Launch (1 week).",
    link: {
      label: "Learn About Our Process",
      href: "/partnership#process",
    },
    followUpQuestions: ["onboarding", "consultation", "requirements"],
  },
  {
    id: "ai-automation",
    question: "What AI automation tools do you use?",
    answer:
      "We implement various AI solutions including chatbots, workflow automation, predictive analytics, machine learning models, and custom AI integrations tailored to streamline your business operations.",
    link: {
      label: "Explore AI Services",
      href: "/expertise#ai-automation",
    },
    followUpQuestions: ["integration", "training", "maintenance"],
  },
  {
    id: "marketing",
    question: "What's included in your marketing solutions?",
    answer:
      "Our marketing solutions include brand strategy, social media campaigns, SEO & SEM, content marketing, email automation, digital advertising, performance analytics, and conversion optimization.",
    link: {
      label: "View Marketing Services",
      href: "/expertise#marketing-solutions",
    },
    followUpQuestions: ["results", "reporting", "strategy"],
  },
  {
    id: "admin-support",
    question: "What admin support services do you provide?",
    answer:
      "We offer comprehensive admin support including inbox & calendar management, data entry, HR admin support, customer communication, research & reporting, CRM updates, and virtual assistant services.",
    link: {
      label: "Learn About Admin Support",
      href: "/expertise#admin-support",
    },
    followUpQuestions: ["availability", "security", "communication"],
  },
  {
    id: "small-business",
    question: "Do you work with small businesses?",
    answer:
      "We work with businesses of all sizes, from startups to enterprises. Our Dubai location allows us to offer world-class services at competitive rates, making us accessible to small and medium businesses.",
    followUpQuestions: ["pricing", "packages", "scalability"],
  },
  {
    id: "response-time",
    question: "How quickly do you respond to inquiries?",
    answer:
      "We typically respond to all inquiries within 24 hours. For urgent matters, we aim to respond within a few hours during business hours (Dubai time: GMT+4).",
    followUpQuestions: ["timezone", "support", "communication"],
  },
  {
    id: "consultation",
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer a free 60-minute consultation call to understand your business needs, discuss opportunities, and explain how we can help achieve your goals.",
    link: {
      label: "Book Consultation",
      href: "/partnership#form",
    },
    followUpQuestions: ["preparation", "timeline", "next-steps"],
  },
  {
    id: "global-reach",
    question: "Do you work with international clients?",
    answer:
      "Yes, we serve clients globally, with a focus on the UK and USA markets. Our Dubai location provides strategic advantages for international business operations.",
    followUpQuestions: ["timezone", "communication", "legal"],
  },
  {
    id: "security",
    question: "How do you handle data security and confidentiality?",
    answer:
      "We take data security very seriously. We implement industry-standard security measures, sign NDAs when required, and follow strict confidentiality protocols to protect your business information.",
    followUpQuestions: ["compliance", "backup", "access-control"],
  },
  {
    id: "results",
    question: "How do you measure success and ROI?",
    answer:
      "We use comprehensive analytics and KPIs specific to your goals. For marketing: lead generation, conversion rates, traffic growth. For automation: time saved, error reduction, efficiency gains. We provide regular performance reports.",
    followUpQuestions: ["reporting", "optimization", "goals"],
  },
  {
    id: "support",
    question: "What kind of ongoing support do you provide?",
    answer:
      "We offer 24/7 global support across time zones, regular performance monitoring, optimization recommendations, and continuous improvement of your systems and campaigns.",
    followUpQuestions: ["availability", "maintenance", "updates"],
  },
  {
    id: "experience",
    question: "How experienced is your team?",
    answer:
      "Our team consists of experienced professionals with industry-spanning expertise in marketing, AI/automation, and business operations. We bring years of experience working with diverse clients globally.",
    followUpQuestions: ["team-size", "specializations", "certifications"],
  },
  {
    id: "customization",
    question: "Can you customize solutions for my specific needs?",
    answer:
      "Every solution we provide is tailored to meet your specific business needs and objectives. We don't believe in one-size-fits-all approaches.",
    link: {
      label: "Discuss Custom Solutions",
      href: "/partnership#form",
    },
    followUpQuestions: ["requirements", "timeline", "pricing"],
  },
  {
    id: "partnership",
    question: "How does the partnership process work?",
    answer:
      "Our partnership process is simple: 1) Free consultation call, 2) Strategic assessment of your needs, 3) Custom partnership proposal, 4) Onboarding and project launch. We make it seamless and transparent.",
    link: {
      label: "Start Partnership",
      href: "/partnership",
    },
    followUpQuestions: ["timeline", "requirements", "next-steps"],
  },
  {
    id: "why-dubai",
    question: "Why choose a Dubai-based company?",
    answer:
      "Dubai's strategic location offers unique advantages: competitive pricing, access to global talent, business-friendly environment, and the ability to serve multiple time zones effectively while maintaining high-quality standards.",
    followUpQuestions: ["advantages", "timezone", "cost-benefits"],
  },
]

export const initialQuestions = ["services", "contact", "pricing", "timeline"]

export const getQuestionById = (id: string): ChatQuestion | undefined => {
  return chatQuestions.find((q) => q.id === id)
}

export const getQuestionsByIds = (ids: string[]): ChatQuestion[] => {
  return ids.map((id) => getQuestionById(id)).filter(Boolean) as ChatQuestion[]
}
