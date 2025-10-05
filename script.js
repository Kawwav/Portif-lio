const toggle = document.getElementById('theme-toggle');
const body = document.body;

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});
