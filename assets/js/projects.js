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
    featured: true,                          // ← true = large card (max 2)
    title: "Customer Churn Predictor",
    category: "Machine Learning",
    problem: "Telecom company losing 18% of customers with zero early warning system in place.",
    solution: "Built an XGBoost classifier with feature engineering on 50K+ customer records.",
    outcome: "91% accuracy · Reduced churn by 23% in Q1",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn", "SHAP"],
    github: "https://github.com/Mk9743900/churn-predictor",
    demo: "",                                // ← leave empty string if no live demo
    image: "",                               // ← add image path e.g. "assets/images/projects/churn.webp"
    year: "2024"
  },
  {
    id: 2,
    featured: true,
    title: "Sales Forecasting Dashboard",
    category: "Data Analysis",
    problem: "Finance team spending 3 days every month manually building forecasts in Excel.",
    solution: "Built an automated forecasting pipeline using Prophet + interactive Plotly dashboard.",
    outcome: "3 days → 10 minutes · 87% forecast accuracy",
    tags: ["Python", "Prophet", "Plotly", "SQL", "Pandas"],
    github: "https://github.com/Mk9743900/sales-forecast",
    demo: "",
    image: "",
    year: "2024"
  },
  {
    id: 3,
    featured: false,
    title: "NLP Sentiment Analyzer",
    category: "NLP",
    problem: "Support team manually tagging 500+ customer reviews per day.",
    solution: "Fine-tuned BERT model to auto-classify sentiment with 3 labels.",
    outcome: "94% classification accuracy · Saved 15 hrs/week",
    tags: ["Python", "BERT", "HuggingFace", "Flask"],
    github: "https://github.com/Mk9743900/sentiment-nlp",
    demo: "",
    image: "",
    year: "2023"
  },
  {
    id: 4,
    featured: false,
    title: "E-Commerce EDA Report",
    category: "Data Analysis",
    problem: "Business had 2 years of sales data but no actionable insight extracted from it.",
    solution: "Deep exploratory analysis uncovering seasonal patterns and high-value customer segments.",
    outcome: "Identified top 3 revenue levers · Presented to leadership",
    tags: ["Python", "Pandas", "Seaborn", "Jupyter", "SQL"],
    github: "https://github.com/Mk9743900/ecommerce-eda",
    demo: "",
    image: "",
    year: "2023"
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
  name:        "Mohammed",
  role:        "Data Scientist",
  tagline:     "I turn raw, messy data into decisions that move businesses.",
  location:    "Delhi, India 🇮🇳",
  email:       "your@email.com",
  github:      "https://github.com/Mk9743900",
  linkedin:    "https://www.linkedin.com/in/mohammed-israhar-694a7b1b0",
  resume:      "assets/docs/resume.pdf",
  bio:         "Data Analyst transitioning into Data Science — with hands-on experience in Python, statistical modeling, and building ML pipelines. I care about clarity, reproducibility, and impact."
};
