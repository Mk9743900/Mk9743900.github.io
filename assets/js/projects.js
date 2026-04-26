// ============================================================
//  PROJECTS.JS — YOUR PORTFOLIO DATA FILE
//  ✅ To add a new project: copy one block inside the array
//     and fill in your details. That's it. Nothing else to touch.
//  ✅ To remove a project: delete its block from the array.
//  ✅ Featured projects appear first & larger. Max 2 featured.
// ============================================================

const PROJECTS = [
  {
    id: 1,
    featured: true,
    title: "Telco Customer Churn Prediction",
    category: "Machine Learning",
    problem: "Telecom company had no system to identify customers likely to leave — losing revenue with zero early warning.",
    solution: "Built a Random Forest classifier on 7,043 IBM Telco records, removed 11 corrupted rows, engineered features around tenure, charges, and contract type.",
    outcome: "79% Accuracy · ROC-AUC 0.817 · Top churn drivers identified",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/Mk9743900/telco-churn-prediction",
    demo: "",
    image: "",
    year: "2024"
  },
  {
    id: 2,
    featured: true,
    title: "SQL Social Media Analysis",
    category: "Data Analysis",
    problem: "Social media platform data sitting in raw tables with no structured insights on user behavior or engagement patterns.",
    solution: "Designed and queried a relational database to extract user activity trends, top content performers, and engagement metrics using advanced SQL.",
    outcome: "Uncovered key engagement patterns · Structured insights from raw relational data",
    tags: ["SQL", "Data Modeling", "Aggregations", "Joins", "Subqueries"],
    github: "https://github.com/Mk9743900/SQL-Social_media_Project",
    demo: "",
    image: "",
    year: "2024"
  },
  {
    id: 3,
    featured: false,
    title: "Zomato Data Analysis",
    category: "Data Analysis",
    problem: "Restaurant industry data from Zomato with no clear picture of what drives ratings, orders, and customer preferences.",
    solution: "Performed end-to-end exploratory data analysis on Zomato dataset — cleaning, visualizing, and extracting patterns across cuisines, locations, and pricing.",
    outcome: "Key restaurant success factors identified · Actionable insights on pricing & ratings",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    github: "https://github.com/Mk9743900/Zomato_Data_analysis",
    demo: "",
    image: "",
    year: "2024"
  },
  {
    id: 4,
    featured: false,
    title: "JavaScript Projects Collection",
    category: "Web Development",
    problem: "Needed to build practical frontend skills to complement data science work and create interactive data visualizations.",
    solution: "Built a collection of JavaScript projects covering DOM manipulation, API integration, and interactive UI components.",
    outcome: "Expanded full-stack capability · Foundation for interactive DS dashboards",
    tags: ["JavaScript", "HTML", "CSS", "DOM", "APIs"],
    github: "https://github.com/Mk9743900/JavaScript-Projects",
    demo: "",
    image: "",
    year: "2024"
  }

  ,{
    id: 5,
    featured: false,
    title: "AI Prompt Generator",
    category: "AI Tools",
    problem: "Users struggle to write effective AI prompts — either building from scratch or fixing broken ones that give poor results.",
    solution: "Built a live web tool powered by Google Gemini with two modes: Builder (craft prompts from role, tone, format inputs) and Fixer (analyze and repair bad prompts).",
    outcome: "Fully live tool · Dual-mode Builder + Fixer · Powered by Gemini API",
    tags: ["JavaScript", "Gemini API", "HTML", "CSS", "Prompt Engineering"],
    github: "https://github.com/Mk9743900/prompt-generator",
    demo: "https://mk9743900.github.io/prompt-generator/",
    image: "",
    year: "2025"
  }

  // ─────────────────────────────────────────────────
  //  ADD YOUR NEXT PROJECT HERE — just copy the block
  //  above and paste it after this comment, inside the
  //  array. Separate blocks with a comma.
  // ─────────────────────────────────────────────────
];


// ============================================================
//  SKILLS — Edit these arrays to update your skills section
// ============================================================

const SKILLS = {
  "Languages":   ["Python", "SQL", "R", "Bash"],
  "ML / AI":     ["Scikit-learn", "XGBoost", "TensorFlow", "BERT", "Prophet"],
  "Data":        ["Pandas", "NumPy", "Spark", "dbt"],
  "Visualization": ["Plotly", "Seaborn", "Matplotlib", "Tableau", "Power BI"],
  "Tools":       ["Git", "Docker", "Jupyter", "VS Code", "Airflow"]
};


// ============================================================
//  PERSONAL INFO — Edit once, reflects everywhere on the site
// ============================================================

const PROFILE = {
  name:        "Mohammed Israhar",
  role:        "Data Scientist",
  tagline:     "I turn raw, messy data into decisions that move businesses.",
  location:    "Delhi, India 🇮🇳",
  email:       "mk9743900@gmail.com",
  github:      "https://github.com/Mk9743900",
  linkedin:    "https://linkedin.com/in/yourusername",
  resume:      "assets/docs/resume.pdf",
  bio:         "Data Analyst transitioning into Data Science — with hands-on experience in Python, statistical modeling, and building ML pipelines. I care about clarity, reproducibility, and impact."
};
