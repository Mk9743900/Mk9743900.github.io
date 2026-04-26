# Mohammed's Portfolio Website

## 🚀 How to Deploy (One Time Setup)

```bash
# 1. Create a new repo on GitHub named exactly:
#    yourusername.github.io

# 2. In this folder, run:
git init
git add .
git commit -m "feat: launch portfolio v1.0"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main

# 3. Go to your repo on GitHub → Settings → Pages
#    Source: Deploy from branch → main → / (root)
#    Your site will be live at: https://yourusername.github.io
```

---

## ✏️ How to Add a New Project (The Only File You Need to Edit)

Open `assets/js/projects.js` and add a new block to the `PROJECTS` array:

```js
{
  id: 5,                              // next number in sequence
  featured: false,                    // true = large card (max 2 featured)
  title: "Your Project Title",
  category: "Machine Learning",       // used for filter buttons
  problem: "What problem did you solve?",
  solution: "How did you solve it?",
  outcome: "What was the measurable result?",
  tags: ["Python", "Pandas", "SQL"],
  github: "https://github.com/yourusername/your-repo",
  demo: "",                           // leave empty if no live demo
  image: "",                          // or "assets/images/projects/name.webp"
  year: "2025"
}
```

Then push:
```bash
git add .
git commit -m "feat: add new project"
git push
```
That's it. GitHub Pages auto-deploys in ~2 minutes.

---

## 🔧 How to Update Personal Info

Edit the `PROFILE` object in `assets/js/projects.js`:
- Name, role, tagline, bio
- Email, GitHub, LinkedIn links
- Resume PDF path

---

## 📁 Folder Structure

```
portfolio/
├── index.html                  ← Main HTML (structure only)
├── assets/
│   ├── css/main.css            ← All styles & CSS variables
│   ├── js/
│   │   ├── projects.js         ← ✅ YOUR DATA FILE (edit this)
│   │   └── main.js             ← Logic (no need to touch)
│   ├── images/projects/        ← Add project screenshots here
│   └── docs/resume.pdf         ← Add your resume here
```
