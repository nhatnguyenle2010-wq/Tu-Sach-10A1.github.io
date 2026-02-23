/* Câu 1 – specific JS: make table rows glow on click */
document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('.styled-table tbody tr');

  rows.forEach(row => {
    row.addEventListener('click', () => {
      rows.forEach(r => r.style.outline = '');
      row.style.outline = '2px solid #6366f1';
      row.style.outlineOffset = '-2px';
    });
  });
});
