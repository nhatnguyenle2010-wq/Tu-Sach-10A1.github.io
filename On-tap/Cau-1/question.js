document.addEventListener('DOMContentLoaded', () => {
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      const next = document.querySelector('.btn-next:not(.btn-disabled)');
      if (next) next.click();
    }
    if (e.key === 'ArrowLeft') {
      const prev = document.querySelector('.btn-prev:not(.btn-disabled)');
      if (prev) prev.click();
    }
  });

  // Highlight active dot on hover
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => {
    dot.addEventListener('mouseenter', () => {
      if (!dot.classList.contains('active')) {
        dot.style.background = '#818cf8';
      }
    });
    dot.addEventListener('mouseleave', () => {
      if (!dot.classList.contains('active')) {
        dot.style.background = '';
      }
    });
  });
});
