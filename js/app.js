const chatHistory = [];

async function loadTab(name) {
  const panel = document.getElementById('tab-' + name);
  if (panel.dataset.loaded) return;
  const res = await fetch('tabs/' + name + '.html');
  const html = await res.text();
  panel.innerHTML = html;
  panel.dataset.loaded = 'true';
}

async function showTab(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));

  await loadTab(name);

  document.getElementById('tab-' + name).classList.add('active');
  if (btn) btn.classList.add('active');

  if (name === 'chat') warmupLambda();
  if (name === 'projects') initProjects();
  if (name === 'articles') renderArticles();
}

function warmupLambda() {
  fetch('https://84a8kdwkh2.execute-api.us-east-1.amazonaws.com/prod/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': 'GKnPlBbMT47fx682L1D2W7Jc4ShPo4w91BIagQN4' },
    body: JSON.stringify({ message: '__warmup__', history: [] })
  }).catch(() => {});
}

async function callChatAPI(message, history) {
  const res = await fetch('https://84a8kdwkh2.execute-api.us-east-1.amazonaws.com/prod/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': 'GKnPlBbMT47fx682L1D2W7Jc4ShPo4w91BIagQN4' },
    body: JSON.stringify({ message, history })
  });
  const data = await res.json();
  return data.reply;
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function appendMessage(role, text) {
  const container = document.getElementById('chat-messages');
  const isBot = role === 'bot';
  const div = document.createElement('div');
  div.className = `message ${role}`;
  const formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  div.innerHTML = `
    <div class="msg-avatar">${isBot ? '🤖' : '👤'}</div>
    <div>
      <div class="msg-bubble">${formatted}</div>
      <div class="msg-time">${getTime()}</div>
    </div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'typing-indicator';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="msg-avatar">🤖</div>
    <div class="typing-dots"><span></span><span></span><span></span></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typing-indicator');
  if (el) el.remove();
}

async function sendMessage() {
  const input = document.getElementById('chat-input');
  const btn   = document.getElementById('send-btn');
  const text  = input.value.trim();
  if (!text) return;

  input.value = '';
  input.style.height = 'auto';
  btn.disabled = true;

  appendMessage('user', text);
  chatHistory.push({ role: 'user', content: text });
  showTyping();

  try {
    const reply = await callChatAPI(text, chatHistory);
    removeTyping();
    appendMessage('bot', reply);
    chatHistory.push({ role: 'assistant', content: reply });
  } catch (err) {
    removeTyping();
    appendMessage('bot', "Sorry, I ran into an issue. Please try again in a moment!");
  }

  btn.disabled = false;
  input.focus();
}

function handleKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

function askSuggested(btn) {
  const input = document.getElementById('chat-input');
  input.value = btn.textContent;
  autoResize(input);
  showTab('chat', document.querySelector('nav button.nav-ai'));
  sendMessage();
}

// Load About tab on page start
window.addEventListener('DOMContentLoaded', () => {
  loadTab('about');
});