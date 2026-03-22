const ARTICLES = [
  {
    title: "I Migrated My Chatbot from Hugging Face to AWS for $0.40/Month",
    date: "2026-03-01",
    readTime: "5 min read",
    description: "My personal portfolio chatbot was sleeping on the job — literally. Hugging Face's free tier shuts down inactive spaces, leaving visitors staring at a loading screen for 30-60 seconds. The always-on plan was $10/month. I moved it to AWS serverless for 40 cents a month and learned something important about pushing back on AI suggestions along the way.",
    tags: ["AWS", "Lambda", "Serverless", "RAG", "Architecture"],
    linkedinUrl: "https://www.linkedin.com/in/nevzatpinar/",
    demoUrl: "https://nevzatpinar.com",
    demoLabel: "🤖 Try the Chatbot"
  }
];

function renderArticles() {
  const grid = document.getElementById('articles-grid');
  if (!grid) return;

  grid.innerHTML = ARTICLES.map(a => `
    <div class="project-card">
      <div>
        <h3>${a.title}</h3>
        <div class="project-meta">📅 ${a.date} · ⏱ ${a.readTime}</div>
      </div>
      <p class="project-desc">${a.description}</p>
      <div class="tags">
        ${a.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="card-actions">
        <a href="${a.linkedinUrl}" target="_blank" class="card-btn btn-demo">📖 Read on LinkedIn</a>
        <a href="${a.demoUrl}" target="_blank" class="card-btn btn-gh">${a.demoLabel}</a>
      </div>
    </div>
  `).join('');
}