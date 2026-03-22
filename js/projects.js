const PROJECTS = [
  { title:"Personal Career Portfolio", description:"A platform to share information about my career, background, skills, and experiences as a software engineer. Designed for potential clients, employers, or anyone interested in my professional journey.", tags:["Portfolio","Career","Software Engineer"], updated:"2025-06-15", demo_url:"https://huggingface.co/spaces/npinar/ask-nevzat", github_url:"https://github.com/npinar/my_career_conversation_public" },
  { title:"AI Hangman Game", description:"An intelligent twist on the classic hangman game that leverages OpenAI's GPT model to dynamically generate words based on difficulty levels.", tags:["Game","Hangman","OpenAI"], updated:"2025-08-10", demo_url:"https://huggingface.co/spaces/npinar/hangman", github_url:"https://github.com/npinar/hangman" },
  { title:"Quiz Generator with RAG", description:"An intelligent quiz generation system that transforms any PDF document into interactive, contextual quizzes using OpenAI's GPT models and Retrieval-Augmented Generation (RAG). Features semantic document understanding through vector embeddings and AI-powered feedback.", tags:["RAG","Quiz Generator","FAISS Vector Database","SentenceTransformers"], updated:"2025-08-16", demo_url:"https://huggingface.co/spaces/npinar/quiz-generator", github_url:"https://github.com/npinar/quiz-generator-with-rag" },
  { title:"Portfolio & Position Size Calculator", description:"Helps investors determine how much capital to allocate per stock when distributing portfolio value equally, and helps traders manage risk by calculating optimal trade size based on stop loss and dollar risk.", tags:["Investment","Stock","Calculator"], updated:"2025-08-17", demo_url:"https://huggingface.co/spaces/npinar/portfolio-inv-calculator", github_url:"https://github.com/npinar/investment-tools" },
  { title:"Place Holder - Music Generation with AI", description:"Generate original music compositions using transformer models trained on classical and contemporary music datasets.", tags:["Music Generation","Transformers","Audio","Creative AI"], updated:"2023-12-28", demo_url:"#", github_url:"#" },
  { title:"Place Holder - Stock Price Predictor", description:"Machine learning model for predicting stock prices using LSTM networks and technical indicators with backtesting capabilities.", tags:["Finance","LSTM","Time Series","Prediction"], updated:"2023-12-20", demo_url:"#", github_url:"#" }
];

function renderCard(p) {
  const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const demoOff = p.demo_url === '#' ? 'style="opacity:0.4;pointer-events:none;"' : '';
  const ghOff   = p.github_url === '#' ? 'style="opacity:0.4;pointer-events:none;"' : '';
  return `<div class="project-card">
    <div><h3>${p.title}</h3><div class="project-meta">📅 ${p.updated}</div></div>
    <p class="project-desc">${p.description}</p>
    <div class="tags">${tags}</div>
    <div class="card-actions">
      <a href="${p.demo_url}" target="_blank" rel="noopener noreferrer" class="card-btn btn-demo" ${demoOff}>🚀 Demo</a>
      <a href="${p.github_url}" target="_blank" rel="noopener noreferrer" class="card-btn btn-gh" ${ghOff}>📂 GitHub</a>
    </div>
  </div>`;
}

function filterProjects() {
  const search = document.getElementById('search-input').value.toLowerCase();
  const active = [...document.querySelectorAll('.tag-filter-btn.active')].map(b => b.textContent);
  const filtered = PROJECTS.filter(p => {
    const ms = !search || p.title.toLowerCase().includes(search) || p.description.toLowerCase().includes(search);
    const mt = active.length === 0 || active.some(t => p.tags.includes(t));
    return ms && mt;
  });
  document.getElementById('filtered-projects-grid').innerHTML =
    filtered.length ? filtered.map(renderCard).join('') : '<div class="no-results">😔 No projects found.</div>';
  document.getElementById('results-count').innerHTML =
    `Showing <span>${filtered.length}</span> of <span>${PROJECTS.length}</span> projects`;
}

function initProjects() {
  const allTags = [...new Set(PROJECTS.flatMap(p => p.tags))].sort();
  const tagFiltersEl = document.getElementById('tag-filters');
  tagFiltersEl.innerHTML = '';
  allTags.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag-filter-btn';
    btn.textContent = tag;
    btn.onclick = () => { btn.classList.toggle('active'); filterProjects(); };
    tagFiltersEl.appendChild(btn);
  });
  filterProjects();
}