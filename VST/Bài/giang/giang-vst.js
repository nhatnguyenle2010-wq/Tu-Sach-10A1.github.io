const layer = document.getElementById('leaves');

const colors = [
  '#ffd4b8', '#fcb69f', '#ffcba4',
  '#ffe5cc', '#f9a27a', '#ffc5a0',
  '#ffecd2', '#f4a080'
];

const shapes = [
  '50% 0% 50% 0%',
  '0% 50% 0% 50%',
  '80% 20% 80% 20%',
  '20% 80% 20% 80%',
  '50% 50% 20% 80%',
];

for (let i = 0; i < 28; i++) {
  const el = document.createElement('div');
  el.className = 'leaf';

  const w = Math.random() * 12 + 7;
  const h = w * (Math.random() * 0.6 + 0.8);
  const color = colors[Math.floor(Math.random() * colors.length)];
  const shape = shapes[Math.floor(Math.random() * shapes.length)];

  el.style.cssText = `
    left: ${Math.random() * 100}%;
    width: ${w}px;
    height: ${h}px;
    background: ${color};
    animation-duration: ${Math.random() * 10 + 8}s;
    animation-delay: ${Math.random() * 14}s;
    border-radius: ${shape};
    opacity: 0;
  `;

  layer.appendChild(el);
}
