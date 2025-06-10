 // Toggle theme
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.getElementById('theme-toggle').textContent = isDark ? '☀️' : '🌙';
});

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('✅ Message sent! I will get back to you soon.');
});
