# nevzatpinar.com — Personal Portfolio

Personal portfolio website for Nevzat Pinar, Senior Lead Software Engineer.

Live at: [nevzatpinar.com](https://nevzatpinar.com)

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript — no frameworks
- **Hosting**: GitHub Pages (free)
- **AI Chatbot**: AWS Lambda + API Gateway + OpenAI GPT-4o-mini
- **RAG**: Pre-computed embeddings stored in AWS S3
- **Notifications**: AWS SES
- **CI/CD**: GitHub Actions (backend repo)

---

## Project Structure
```
npinar.github.io/
    assets/
        nevzat.jpg          # Profile photo
    css/
        styles.css          # All styles
    js/
        app.js              # Tab loading, chat logic
        projects.js         # Projects data and rendering
        articles.js         # Articles data and rendering
    tabs/
        about.html          # About Me tab
        projects.html       # Projects tab
        chat.html           # AI Chat tab
        contact.html        # Contact tab
        articles.html       # Articles tab (disabled in nav)
    index.html              # Shell — header, nav, footer only
```

---

## Adding a New Project

Open `js/projects.js` and add a new object to the `PROJECTS` array:
```javascript
{
  title: "Your Project Title",
  description: "Short description of what it does.",
  tags: ["AWS", "Python", "OpenAI"],
  updated: "2026-04-01",
  demo_url: "https://your-demo-url.com",
  github_url: "https://github.com/npinar/your-repo"
}
```

## Running Locally
```bash
# Navigate into the repo folder
cd npinar.github.io

# Start a local web server
python -m http.server 8000
```

Then open your browser and go to:
```
http://localhost:8000
```

> **Note:** You must use a local server — opening `index.html` directly as a file (`file:///`) will block tab loading due to browser CORS restrictions.

---
## Related Repos

- **Backend (private)**: `nevzat-chat-backend` — Lambda function, RAG pipeline, GitHub Actions deploy