// Smoothly handle "back to top" when using keyboard focus
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      history.pushState(null,'',id);
    }
  });
});

// Theme toggle: adds/removes .dark on <body>
const toggle = document.getElementById('themeToggle');
toggle?.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  // Optional: save preference
  const mode = document.body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
});

// Load saved theme on first paint
(function initTheme(){
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') document.body.classList.add('dark');
})();
