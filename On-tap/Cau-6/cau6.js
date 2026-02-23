/* Câu 6 – specific JS: confetti burst on load */
document.addEventListener('DOMContentLoaded', () => {
  // Animate paragraphs
  const paras = document.querySelectorAll('.card-content p');
  paras.forEach((p, i) => {
    p.style.opacity = '0';
    p.style.transform = 'translateY(10px)';
    p.style.transition = `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`;
    requestAnimationFrame(() => {
      p.style.opacity = '1';
      p.style.transform = 'translateY(0)';
    });
  });

  // Subtle sparkle on finish badge
  const badge = document.querySelector('.finish-badge');
  if (badge) {
    setTimeout(() => {
      badge.style.transform = 'scale(1.03)';
      badge.style.transition = 'transform 0.3s ease';
      setTimeout(() => { badge.style.transform = 'scale(1)'; }, 300);
    }, 800);
  }
});
