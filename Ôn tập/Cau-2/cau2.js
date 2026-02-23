/* Câu 2 – specific JS: animate list items on load */
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('li');
  items.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-12px)';
    item.style.transition = `opacity 0.4s ease ${i * 0.12}s, transform 0.4s ease ${i * 0.12}s`;
    requestAnimationFrame(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    });
  });
});
