const layer = document.getElementById('leaves');

// Leaf shapes: simple SVG-like divs with varied border-radius to mimic leaves
const colors = [
  '#a5d6a7', '#81c784', '#c8e6c9',
  '#dcedc8', '#b2dfdb', '#aed581',
  '#c5e1a5', '#e8f5e9'
];

for (let i = 0; i < 28; i++) {
  const el = document.createElement('div');
  el.className = 'leaf';

  const w = Math.random() * 14 + 8;
  const h = w * (Math.random() * 0.6 + 0.8);
  const color = colors[Math.floor(Math.random() * colors.length)];

  // Randomise leaf shape with border-radius
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
