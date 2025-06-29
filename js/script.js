document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.link img');
  const toggleBtn = document.getElementById('theme-toggle');

  let isDark = document.body.classList.contains('dark-mode');

  // Gestion du hover des logos
  links.forEach(img => {
    const original = img.dataset.original;
    const hover = img.dataset.hover;

    img.parentElement.addEventListener('mouseenter', () => {
      img.src = hover;
    });

    img.parentElement.addEventListener('mouseleave', () => {
      img.src = isDark ? hover : original;
    });
  });

  // Gestion du thème
  toggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('dark-mode', isDark);
    toggleBtn.textContent = isDark ? 'Mode sombre' : 'Mode clair';

    // Mettre à jour les icônes selon le thème
    links.forEach(img => {
      img.src = isDark ? img.dataset.hover : img.dataset.original;
    });
  });
});
