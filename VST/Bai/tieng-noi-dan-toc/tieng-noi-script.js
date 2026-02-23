const layer = document.getElementById('particles');

const colors = [
  'rgba(197,202,233,0.7)',
  'rgba(159,168,218,0.6)',
  'rgba(121,134,203,0.5)',
  'rgba(255,255,255,0.45)',
  'rgba(179,192,232,0.55)',
  'rgba(232,234,246,0.6)',
];

for (let i = 0; i < 32; i++) {
  const el = document.createElement('div');
  el.className = 'particle';

  const size = Math.random() * 9 + 4;

  el.style.cssText = `
    left: ${Math.random() * 100}%;
    width: ${size}px;
    height: ${size}px;
    background: ${colors[Math.floor(Math.random() * colors.length)]};
    animation-duration: ${Math.random() * 10 + 9}s;
    animation-delay: ${Math.random() * 15}s;
  `;

  layer.appendChild(el);
}
