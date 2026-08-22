export const PERSONAL_INFO = {
  name: "Aditya Kumar",
  role: "Data Scientist",
  titleSuffix: "Machine Learning & GenAI",
  subtitles: [
    "Data Scientist @ Genpact",
    "Enterprise Time-Series Forecasting Specialist",
    "Dirichlet-Multinomial (DirMult) & Statistical Modeling Architect",
    "GenAI & LLM Analytics Agent Developer",
    "Competitive Programmer (LeetCode Top 6.3%)"
  ],
  email: "aditya0211kuar@gmmail.com",
  phone: "+91 6202393823",
  location: "Bengaluru, Karnataka, India",
  status: "Available for Data Science, Time-Series & GenAI Roles",
  linkedin: "https://www.linkedin.com/in/aditya-kumar-26a107212/",
  github: "https://github.com/AADIKANE002",
  leetcode: "https://leetcode.com/",
  resumePdfUrl: "./Aditya_Kumar.pdf",
  resumeDocxUrl: "./Aditya_Kumar_Data_Scientist_Resume.docx",
  bio: "Data Scientist with 2+ years of experience building machine learning, statistical modeling, and GenAI-driven analytics solutions for enterprise clients. Skilled in transforming raw enterprise data into actionable insights through feature engineering, hypothesis-driven experimentation, and rigorous model evaluation (MAPE). Delivered production forecasting systems on AWS Lambda, automated data-quality workflows saving 40+ hours/week, and built segmentation models that improved targeting efficiency by 20%.",
  stats: [
    { label: "Experience", value: "2+ Years", subtext: "Enterprise ML & Stats" },
    { label: "Targeting Efficiency", value: "+20%", subtext: "Scikit-Learn Segmentation" },
    { label: "Time Saved", value: "40 hrs/wk", subtext: "Automated QC & Modeling" },
    { label: "Query Latency Cut", value: "45%", subtext: "SQL DB Optimization" },
  ]
};

export const EXPERIENCES = [
  {
    id: "genpact-ds",
    company: "Genpact",
    role: "Data Scientist",
    type: "Full-time",
    period: "Aug 2024 – Present",
    location: "Bengaluru, India",
    current: true,
    accent: "from-emerald-500 to-teal-600",
    metrics: [
      { label: "Targeting Efficiency", value: "+20%" },
      { label: "Weekly Time Saved", value: "40 hrs" },
      { label: "Evaluation Metric", value: "MAPE" }
    ],
    highlights: [
      "Enterprise Analytics & Forecasting: Built Python-based analytics and ML workflows spanning PostgreSQL data extraction, attribute/time/geography filtering, feature preparation, model experimentation, and MAPE-based evaluation for production forecasting on AWS Lambda.",
      "GenAI Forecasting Framework: Developed a reusable, GenAI-powered time-series + LLM framework that layers automated insight generation on top of statistical forecasting outputs, improving stakeholder interpretability.",
      "Analytical Modeling & Automation: Built CDT-tree workflows using Dirichlet-Multinomial (DirMult) modeling, switching constants, hierarchical clustering, and client-specific recoding logic; automated preprocessing, validation, and pre-QC checks in Python/R, saving approximately 40 hours/week.",
      "Business ML Impact: Developed Scikit-learn customer segmentation and behavioral-analysis models that improved targeting efficiency by 20%; automated model benchmarking, validation, and selection through CI/CD-integrated pipeline automation.",
      "Experimentation Rigor: Designed controlled experiments and statistical comparisons across candidate models to ensure reproducible, defensible model-selection decisions for enterprise clients."
    ],
    skills: ["Python", "Time-Series Forecasting", "Dirichlet-Multinomial Modeling", "Hierarchical Clustering", "Scikit-learn", "PostgreSQL", "AWS Lambda", "MAPE", "R", "GenAI", "ETL Pipelines"]
  },
  {
    id: "genpact-intern",
    company: "Genpact",
    role: "Data Analyst Intern",
    type: "Internship",
    period: "Jan 2024 – Jun 2024",
    location: "Bengaluru, India",
    current: false,
    accent: "from-blue-500 to-cyan-600",
    metrics: [
      { label: "Query Latency Cut", value: "45%" },
      { label: "Reporting Velocity", value: "Real-time" }
    ],
    highlights: [
      "Optimized complex SQL queries on Oracle DB, reducing dashboard data-fetch latency by 45% for high-throughput enterprise applications.",
      "Built interactive KPI dashboards using Power BI and Tableau to support business reporting and data-driven executive decision-making.",
      "Conducted exploratory data analysis (EDA) to detect anomalies and streamline ETL pipeline validation."
    ],
    skills: ["Oracle DB", "SQL Optimization", "Power BI", "Tableau", "EDA", "Data Warehousing", "ETL"]
  }
];

export const PROJECTS = [
  {
    id: "llm-agent",
    title: "LLM-Based Analytics Agent (Internal POC)",
    category: "GenAI & Analytics",
    tagline: "Goal-driven Python LLM agent for dataset analysis, reasoning & automated insight generation",
    description: "Built a Python goal-driven LLM agent for dataset analysis, insight generation, and analytical reasoning, applying tool usage, memory-based context handling, and Agentic AI/RAG design patterns.",
    longDescription: "Engineered an intelligent analytical agent capable of multi-step hypothesis generation, dataset querying, statistical anomaly detection, and automated narrative reporting for enterprise stakeholders.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "LLMs", "RAG", "Agentic AI", "Prompt Orchestration", "Memory State", "Data Analytics"],
    features: [
      "Dynamic tool calling and dataset query execution with structured output validation",
      "Short-term and long-term memory retrieval for analytical context persistence",
      "Automated insight generation converting statistical charts into executive summaries",
      "Modular design allowing integration with PostgreSQL and custom data lakes"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "sales-nexus",
    title: "Sales-Nexus — Time-Series + LLM Forecasting Framework",
    category: "Forecasting & ML",
    tagline: "Enterprise time-series forecasting framework with MAPE evaluation & LLM insight layer",
    description: "Designed a reusable forecasting framework combining preprocessing, feature engineering, error-based candidate model selection (MAPE), and LLM-generated business insights.",
    longDescription: "Combines statistical forecasting (Dirichlet-Multinomial modeling, exponential smoothing) with automated error benchmarking across candidate models, feeding outputs into an LLM layer that synthesizes actionable market trends.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "Time-Series", "DirMult Modeling", "Scikit-learn", "MAPE", "AWS Lambda", "PostgreSQL"],
    features: [
      "Automated time-series feature engineering and multi-period seasonality adjustments",
      "MAPE-based automated model selection across candidate statistical/ML estimators",
      "Dirichlet-Multinomial modeling for segmented category decision tree generation",
      "Serverless deployment on AWS Lambda for production scoring"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "robo-weed",
    title: "RoboWeed — IoT Agricultural Rover",
    category: "Computer Vision & IoT",
    tagline: "Raspberry Pi + YOLOv8 computer vision system with 90% detection accuracy",
    description: "Built a Raspberry Pi + YOLOv8 computer-vision system for real-time weed detection and automated spraying using Python, Roboflow, and IoT sensors; achieved 90% detection accuracy.",
    longDescription: "Collected and labeled custom agricultural imagery via Roboflow, trained and optimized a YOLOv8 object detection model for edge hardware, and deployed the real-time inference loop on a Raspberry Pi rover.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=800&auto=format&fit=crop",
    techStack: ["Python", "YOLOv8", "Computer Vision", "Raspberry Pi", "Roboflow", "IoT Sensors"],
    features: [
      "YOLOv8 model fine-tuning with Roboflow data augmentation pipeline",
      "90% real-time weed detection accuracy under variable natural lighting conditions",
      "Low-latency edge inference and precision spray actuator control",
      "Telemetry data collection for continual model retraining"
    ],
    github: "https://github.com/AADIKANE002",
    featured: true
  },
  {
    id: "buyme-analytics",
    title: "BuyMe — E-Commerce Platform & Data Model",
    category: "Data Engineering",
    tagline: "Full-stack Django platform with underlying relational data model, user behavior & order analytics",
    description: "Developed a Django/JavaScript/SQLite e-commerce platform with authentication, order management, REST APIs, and MVC architecture, including the underlying data model and analytics.",
    longDescription: "Structured relational database schemas with optimized indexing, designed transactional tracking, and implemented customer purchasing analytics pipelines.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    techStack: ["Django", "Python", "SQLite", "Data Modeling", "REST APIs", "JavaScript", "Analytics"],
    features: [
      "Optimized relational schema for product catalog and transaction logs",
      "Customer purchasing trend analytics and session tracking",
      "RESTful endpoints for data ingestion and dashboard reporting",
      "Modular MVC architecture with scalable data access layer"
    ],
    github: "https://github.com/AADIKANE002",
    featured: false
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Data Science & ML",
    icon: "Brain",
    skills: [
      { name: "Time-Series Forecasting", level: 95, tag: "Production Pipelines" },
      { name: "Scikit-learn", level: 94, tag: "Segmentation & Classifiers" },
      { name: "Statistical Modeling", level: 92, tag: "Hypothesis Testing" },
      { name: "Model Selection & MAPE", level: 95, tag: "Evaluation Rigor" },
      { name: "Feature Engineering", level: 92, tag: "Time/Geo Segmentation" },
      { name: "TensorFlow", level: 85, tag: "Deep Learning" },
      { name: "NLP", level: 88, tag: "Text Analytics" }
    ]
  },
  {
    title: "GenAI & LLMs",
    icon: "Sparkles",
    skills: [
      { name: "LLMs & Agentic AI", level: 92, tag: "Multi-Step Reasoners" },
      { name: "RAG Architectures", level: 90, tag: "Knowledge Retrieval" },
      { name: "Prompt Orchestration", level: 94, tag: "Structured Outputs" },
      { name: "Insight Generation", level: 92, tag: "Executive Summaries" },
      { name: "Memory-Based Context", level: 88, tag: "Stateful Agents" }
    ]
  },
  {
    title: "Data Engineering & Modeling",
    icon: "Server",
    skills: [
      { name: "PostgreSQL", level: 92, tag: "Complex Queries & Extraction" },
      { name: "Dirichlet-Multinomial (DirMult)", level: 94, tag: "CDT Decision Trees" },
      { name: "Hierarchical Clustering", level: 90, tag: "Customer Grouping" },
      { name: "ETL & Pre-QC Automation", level: 95, tag: "40 hrs/wk Saved" },
      { name: "Oracle DB & SQL Tuning", level: 90, tag: "45% Latency Cut" },
      { name: "Data Validation", level: 92, tag: "Data Quality Pipelines" }
    ]
  },
  {
    title: "MLOps & Cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS Lambda", level: 90, tag: "Serverless ML Workloads" },
      { name: "CI / CD Pipelines", level: 88, tag: "Automated Model Selection" },
      { name: "Docker", level: 86, tag: "Containerization" },
      { name: "AWS EC2 & IoT Core", level: 84, tag: "Edge & Cloud Compute" },
      { name: "Oracle Cloud (OCI)", level: 82, tag: "AI Foundations" },
      { name: "Git & GitHub", level: 92, tag: "Version Control" }
    ]
  },
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: 96, tag: "Primary ML/DS & AI" },
      { name: "SQL", level: 92, tag: "Complex Queries & Tuning" },
      { name: "R", level: 86, tag: "Statistical Modeling & DirMult" },
      { name: "Java", level: 82, tag: "OOP & Mobile" },
      { name: "C++", level: 86, tag: "Algorithms & DSA" }
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "leetcode",
    title: "LeetCode 1835 Rating",
    subtitle: "Top 6.3% Globally",
    description: "Consistent problem solver with deep algorithmic foundation in dynamic programming, graph theory, trees, and mathematical computation.",
    icon: "Trophy",
    badge: "Top 6.3%",
    stat: "1835 Rating",
    link: "https://leetcode.com/"
  },
  {
    id: "impact-genpact",
    title: "Genpact Automation & ML Impact",
    subtitle: "40 hrs/wk Saved | +20% Efficiency",
    description: "Automated CDT preprocessing saving 40 hours weekly, built Scikit-learn segmentation boosting targeting by 20%, and reduced database latency by 45%.",
    icon: "Zap",
    badge: "Production Impact",
    stat: "40 hrs/wk"
  },
  {
    id: "codejam",
    title: "Google Code Jam Qualifier",
    subtitle: "Score: 71 / 100",
    description: "Qualified for Google's prestigious international algorithmic programming competition, demonstrating high-speed analytical problem-solving.",
    icon: "Award",
    badge: "International",
    stat: "71/100 Score"
  },
  {
    id: "dsc-lead",
    title: "Co-Lead Competitive Programming",
    subtitle: "Google Developer Student Clubs (DSC RVITM)",
    description: "Mentored 150+ students in Data Structures, Algorithms, and analytical thinking; organized university coding contests.",
    icon: "Users",
    badge: "Leadership",
    stat: "150+ Mentees"
  },
  {
    id: "robotics",
    title: "1st Place, CODE BATTLE",
    subtitle: "Phoenix Robotics Club & 2nd Place CODM",
    description: "Won 1st place in algorithmic programming championship and 2nd place in robotics software development challenge.",
    icon: "Sparkles",
    badge: "Champion",
    stat: "1st Place"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Lean Six Sigma Green Belt",
    issuer: "Genpact",
    tag: "Statistical Quality & Optimization",
    icon: "ShieldCheck"
  },
  {
    title: "Machine Learning, Data Science & GenAI with Python",
    issuer: "Udemy",
    tag: "ML, Deep Learning & GenAI",
    icon: "Brain"
  },
  {
    title: "Natural Language Processing with Python",
    issuer: "Udemy",
    tag: "NLP & Text Processing",
    icon: "Sparkles"
  },
  {
    title: "Oracle Cloud Infrastructure (OCI) AI Foundations",
    issuer: "Oracle University",
    tag: "Cloud AI Architecture",
    icon: "Cloud"
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan (Coursera)",
    tag: "Data Structures & Computational Logic",
    icon: "Code2"
  }
];

export const EDUCATION = {
  institution: "RV Institute of Technology and Management",
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science and Engineering",
  period: "2020 – 2024",
  gpa: "8.04 / 10.0",
  location: "Bengaluru, India",
  highlights: [
    "Co-lead Competitive Programming at Google DSC RVITM",
    "Coursework in Machine Learning, Statistical Analysis, Database Management, Algorithms, and Distributed Computing"
  ]
};

export const TERMINAL_COMMANDS = {
  help: `Available commands:
  • about       - Data science background summary
  • exp         - View work experience timeline
  • projects    - List all ML & GenAI projects
  • skills      - Output technical skill matrix
  • certs       - Professional data science certifications
  • achievements- Honors, awards & competitive coding
  • education   - Academic background & GPA
  • contact     - Direct links and email
  • resume      - Download or view Data Scientist resume
  • clear       - Clean terminal screen
  • matrix      - Secret hacker matrix rain toggle`,

  about: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role} (${PERSONAL_INFO.titleSuffix})
Location: ${PERSONAL_INFO.location}
Bio: ${PERSONAL_INFO.bio}
Status: ${PERSONAL_INFO.status}`,

  exp: `[1] Genpact | Data Scientist (Aug 2024 - Present)
    • Built Python analytics & ML forecasting on AWS Lambda
    • Time-series + GenAI insight generation framework
    • Dirichlet-Multinomial (DirMult) modeling & hierarchical clustering
    • Scikit-learn segmentation boosting targeting by 20%
    • Automated pre-QC saving 40 hrs/week

[2] Genpact | Data Analyst Intern (Jan 2024 - Jun 2024)
    • Optimized complex Oracle DB SQL queries (-45% latency)
    • Built Power BI & Tableau executive KPI dashboards`,

  projects: `[1] LLM-Based Analytics Agent (Python, RAG, Agentic AI, Memory Context)
[2] Sales-Nexus — Time-Series + LLM Forecasting (DirMult, Scikit-learn, MAPE)
[3] RoboWeed — IoT Agricultural Rover (Raspberry Pi, YOLOv8, 90% Accuracy)
[4] BuyMe — Platform Data Model & Analytics (Django, SQLite, REST)`,

  skills: `• Data Science & ML: Time-Series Forecasting, Scikit-learn, DirMult, Clustering, MAPE, TensorFlow
• GenAI: LLMs, RAG, Agentic AI, Prompt Orchestration, Insight Generation
• Data Engineering: PostgreSQL, Oracle DB, SQL Tuning, ETL Pipelines, Pre-QC Automation
• MLOps & Cloud: AWS Lambda, Docker, CI/CD Pipelines, OCI, Git
• Languages: Python, SQL, R, Java, C++`,

  certs: `🎓 Lean Six Sigma Green Belt — Genpact
🎓 Machine Learning, Data Science & GenAI with Python — Udemy
🎓 Natural Language Processing with Python — Udemy
🎓 OCI AI Foundations — Oracle University
🎓 Python Data Structures — University of Michigan`,

  achievements: `🏆 LeetCode 1835 Rating (Top 6.3% Globally)
⚡ 40 hrs/wk Saved & +20% Targeting Efficiency at Genpact
🚀 Google Code Jam Qualifier (Score: 71/100)
👥 Co-Lead Competitive Programming @ Google DSC RVITM
🥇 1st Place, CODE BATTLE — Phoenix Robotics Club`,

  education: `🎓 RV Institute of Technology and Management (2020 - 2024)
Degree: B.E. in Computer Science (GPA: 8.04 / 10)
Location: Bengaluru, India`,

  contact: `📧 Email: ${PERSONAL_INFO.email}
📱 Phone: ${PERSONAL_INFO.phone}
💼 LinkedIn: ${PERSONAL_INFO.linkedin}
🐙 GitHub: ${PERSONAL_INFO.github}`,

  resume: `📄 Opening Resume: ${PERSONAL_INFO.resumePdfUrl}`
};
