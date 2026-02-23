const layer = document.getElementById('petals');

const colors = [
  '#fdcbf1', '#e6a8d7', '#f0c4f8',
  '#dbb8e8', '#f7d6f7', '#e8c6f0',
  '#fbd0f5', '#e6dee9'
];

for (let i = 0; i < 28; i++) {
  const el = document.createElement('div');
  el.className = 'petal';

  const w = Math.random() * 14 + 8;
  const h = w * (Math.random() * 0.6 + 0.8);
  const color = colors[Math.floor(Math.random() * colors.length)];

  const shapes = [
    '50% 0% 50% 0%',
    '0% 50% 0% 50%',
    '80% 20% 80% 20%',
    '20% 80% 20% 80%',
    '50% 50% 20% 80%',
  ];
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
