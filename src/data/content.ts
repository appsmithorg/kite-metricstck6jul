export const siteName = "MetricStack";

export const stats = [
  { label: "Data processed daily", value: "2.4PB" },
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Global customers", value: "10,000+" }
];

export const productShowcase = [
  {
    title: "Cohort Analysis",
    description: "Understand user retention over time with multi-dimensional cohort tables."
  },
  {
    title: "Revenue Forecast",
    description: "Predict future MRR based on historical growth and churn velocity."
  },
  {
    title: "Custom Reports",
    description: "Build bespoke dashboards with our drag-and-drop metrics builder."
  }
];

export const visualFeatures = [
  {
    title: "Real-time sync",
    description: "Your dashboard updates the millisecond a transaction clears."
  },
  {
    title: "Deep segmentation",
    description: "Filter any metric by plan, geography, or custom user attributes."
  }
];

export const modularFeatures = [
  {
    title: "Multi-currency",
    description: "Automatically normalize global revenue into your base currency.",
    icon: "Globe"
  },
  {
    title: "Anomaly detection",
    description: "Get alerted instantly when churn spikes or upgrades drop.",
    icon: "Activity"
  },
  {
    title: "API Access",
    description: "Pull your normalized metrics directly into your own data warehouse.",
    icon: "Code"
  },
  {
    title: "Team Permissions",
    description: "Granular access controls for finance, product, and leadership teams.",
    icon: "Users"
  },
  {
    title: "Export to CSV",
    description: "Download any chart or table for offline analysis and reporting.",
    icon: "Download"
  },
  {
    title: "Audit Logs",
    description: "Track every configuration change and data export across your organization.",
    icon: "FileText"
  }
];

export const integrations = ["Stripe", "Paddle", "Chargebee", "Braintree", "PayPal", "Shopify"];

export const testimonials = [
  {
    quote: "MetricStack replaced three different internal tools. We finally have a single source of truth for our revenue.",
    author: "Sarah Jenkins",
    role: "VP Finance, TechCorp",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-testimonial-portrait.png"
  },
  {
    quote: "The cohort analysis alone paid for the product in the first month. Incredible clarity into our retention.",
    author: "Michael Chang",
    role: "Founder, SaaSify",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-testimonial-portrait.png"
  }
];

export const pricing = [
  {
    tier: "Starter",
    monthlyPrice: "$99",
    yearlyPrice: "$79",
    description: "For early-stage startups finding product-market fit.",
    features: ["Up to $50k tracked MRR", "Standard metrics dashboard", "Daily data sync", "Email support"],
    isPopular: false
  },
  {
    tier: "Enterprise",
    monthlyPrice: "$499",
    yearlyPrice: "$399",
    description: "For scaling companies with complex data needs.",
    features: ["Unlimited tracked MRR", "Custom report builder", "Real-time data sync", "Dedicated success manager"],
    isPopular: true
  }
];

export const faqs = [
  {
    question: "How long does it take to integrate?",
    answer: "Most customers connect their billing provider and see data flowing within 5 minutes. Historical syncs may take up to an hour depending on volume."
  },
  {
    question: "Do you store our customer data?",
    answer: "We store aggregated metrics and anonymized transaction IDs. We do not store PII, credit card numbers, or raw billing profiles."
  },
  {
    question: "Can I connect multiple Stripe accounts?",
    answer: "Yes, the Enterprise plan supports unlimited billing connections consolidated into a single master dashboard."
  }
];

export const values = [
  {
    title: "Absolute Precision",
    description: "In finance, 99% accuracy is a failure. We engineer for exact reconciliation across every cent."
  },
  {
    title: "Zero Latency",
    description: "Decisions decay in value. We build systems that deliver insights the moment the underlying data changes."
  },
  {
    title: "Radical Simplicity",
    description: "Complex data demands quiet interfaces. We remove noise so you can focus on the signal."
  }
];

export const timeline = [
  {
    year: "2021",
    title: "The Genesis",
    description: "Founded out of frustration with existing analytics tools that couldn't handle edge-case SaaS billing."
  },
  {
    year: "2022",
    title: "Seed & Scale",
    description: "Raised $4M seed round and launched our real-time engine, reducing query latency by 100x."
  },
  {
    year: "2023",
    title: "Enterprise Grade",
    description: "Achieved SOC2 Type II compliance and onboarded our first 100 enterprise customers."
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Handling over $2B in annualized tracked revenue across 40 countries."
  }
];

export const leadership = [
  {
    name: "David Chen",
    role: "CEO & Co-founder",
    bio: "Former engineering lead at Stripe, obsessed with data accuracy and system architecture.",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-leader-1.png"
  },
  {
    name: "Elena Rodriguez",
    role: "Chief Product Officer",
    bio: "Design systems expert who led product at three successful B2B SaaS unicorns.",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-leader-2.png"
  },
  {
    name: "Marcus Webb",
    role: "VP of Engineering",
    bio: "Distributed systems specialist. Built the real-time ingestion engine that powers our core.",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1200/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-leader-3.png"
  }
];

export const blogPosts = [
  {
    slug: "rethinking-cohort-analysis",
    title: "Rethinking Cohort Analysis for Usage-Based Pricing",
    excerpt: "Why traditional monthly cohorts fail when customers pay per API call, and how to model it correctly.",
    date: "Oct 12, 2023",
    author: "Elena Rodriguez",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-blog-thumb-1.png"
  },
  {
    slug: "building-real-time-engine",
    title: "Architecture of a Sub-Second Analytics Engine",
    excerpt: "A deep dive into how we use ClickHouse and Kafka to process millions of webhook events.",
    date: "Nov 04, 2023",
    author: "Marcus Webb",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-blog-thumb-2.png"
  },
  {
    slug: "saas-metrics-2024",
    title: "The New Standard for SaaS Metrics in 2024",
    excerpt: "NDR is out, rule of 40 is evolving. Here's how top decile companies are measuring themselves.",
    date: "Jan 18, 2024",
    author: "David Chen",
    image: "https://static.kite.ai/image/upload/f_auto,q_auto,w_1600/app/b12484dd-3f8d-4153-82f4-9d2296905e6f/iter1/iter1-blog-thumb-3.png"
  }
];
