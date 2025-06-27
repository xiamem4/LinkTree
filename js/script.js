const links = document.querySelectorAll('.link');
const toggleBtn = document.getElementById('theme-toggle');

// Appliquer les événements hover/click sur les logos
links.forEach(link => {
  const img = link.querySelector('img');
  const originalSrc = img.getAttribute('data-original');
  const hoverSrc = img.getAttribute('data-hover');

  link.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  link.addEventListener('mouseleave', () => {
    const isDark = document.body.classList.contains('dark-mode');
    img.src = isDark ? hoverSrc : originalSrc;
  });

  link.addEventListener('click', () => {
    img.src = hoverSrc;
  });
});

// Gestion du bouton de thème
toggleBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = isDark ? 'Mode sombre' : 'Mode clair';

  // Mettre à jour les icônes selon le thème
  links.forEach(link => {
    const img = link.querySelector('img');
    const originalSrc = img.getAttribute('data-original');
    const hoverSrc = img.getAttribute('data-hover');
    img.src = isDark ? hoverSrc : originalSrc;
  });
});
