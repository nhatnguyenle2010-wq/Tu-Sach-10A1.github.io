

const DUCK_COLORS = {
  body:  '#feeb37',
  dark:  '#f0b830',
  beak:  '#fb9d00',
  eye:   '#000000',
  shine: '#ffffff',
  darkyellow: '#f0b830',
};


const DUCK_MAP = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,1,1,0,0,0,0,0,0],
[0,0,0,1,1,1,1,1,1,0,0,0,0,0],
[0,0,0,3,1,4,1,1,1,0,0,0,0,0],
[0,3,3,3,1,1,1,1,1,0,0,0,0,0],
[0,0,3,3,3,1,1,1,0,0,0,0,0,0],
[0,0,0,0,1,1,1,0,1,1,1,0,1,0],
[0,0,0,1,1,1,1,1,1,1,1,4,1,0],
[0,0,1,1,1,1,4,1,1,1,4,1,1,0],
[0,0,1,1,1,1,1,4,4,4,1,1,1,0],
[0,0,1,1,1,1,1,1,1,1,1,1,1,0],
[0,0,0,1,1,1,1,1,1,1,1,1,0,0],
[0,0,0,0,1,1,1,1,1,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

const PALETTE = [
  'transparent',
  DUCK_COLORS.body,
  DUCK_COLORS.dark,
  DUCK_COLORS.beak,
  DUCK_COLORS.eye,
  DUCK_COLORS.shine,
];


function drawDuck(canvas, scale, flip = false) {
  const rows = DUCK_MAP.length;
  const cols = DUCK_MAP[0].length;
  canvas.width  = cols * scale;
  canvas.height = rows * scale;
  canvas.style.imageRendering = 'pixelated';

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  if (flip) {
    ctx.scale(-1, 1);
    ctx.translate(-canvas.width, 0);
  }
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = DUCK_MAP[r][c];
      if (!v) continue;
      ctx.fillStyle = PALETTE[v];
      ctx.fillRect(c * scale, r * scale, scale, scale);
    }
  }
  ctx.restore();
}



function initDecoDucks() {
  drawDuck(document.getElementById('duckBR'),  5, false);
  drawDuck(document.getElementById('duckBL'),  5, true);
  drawDuck(document.getElementById('duckMid'), 4, true);
}

function initWalkingParade() {
  const parade = document.getElementById('walkingDucks');
  for (let i = 0; i < 5; i++) {
    const c = document.createElement('canvas');
    drawDuck(c, 4, false);
    parade.appendChild(c);
  }
}

function initGrass() {
  const grassRow = document.getElementById('grassRow');
  for (let i = 0; i < 44; i++) {
    const blade = document.createElement('div');
    blade.className = 'grass-blade';
    grassRow.appendChild(blade);
  }
}



const CARDS = [
  { label: 'Video 1', emoji: '🦆', src: 'vid/video (3).mp4', title: 'Đất Rừng Phương Nam' },
  { label: 'Video 2', emoji: '🐥', src: 'vid/video (4).mp4', title: 'Giang' },
  { label: 'Video 3', emoji: '🐤', src: 'vid/video (1).mp4', title: 'Xuân về' },
  { label: 'Video 4', emoji: '🐣', src: 'vid/video (2).mp4', title: 'Buổi Học Cuối Cùng' },
];



function buildCardHTML(card, index) {
  return `
    <div class="card-tag"><span>${card.emoji}</span> ${card.label}</div>

    <input type="file" class="file-input" accept="video/mp4,video/*" id="file-${index}" />

    <div class="video-wrap">
      <video id="video-${index}" controls preload="metadata"></video>

    </div>

    <div class="card-info">
      <span class="video-title placeholder" id="title-${index}">Chưa có video...</span>
      
    </div>
  `;
}


function loadVideoIntoCard(i, src, displayTitle) {
  const vid   = document.getElementById(`video-${i}`);
  const title = document.getElementById(`title-${i}`);
  const card  = document.getElementById(`card-${i}`);

  vid.src = src;
  vid.load();

  title.textContent = displayTitle || src.split('/').pop().replace(/\.[^/.]+$/, '');
  title.classList.remove('placeholder');
  card.classList.add('has-video');
}

function initVideoCards() {
  const grid = document.getElementById('grid');

  CARDS.forEach((cardData, i) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.id = `card-${i}`;
    card.innerHTML = buildCardHTML(cardData, i);
    grid.appendChild(card);

   
    if (cardData.src) {
      loadVideoIntoCard(i, cardData.src, cardData.title);
    }


    document.getElementById(`file-${i}`).addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

 
      const vid = document.getElementById(`video-${i}`);
      if (vid.src && vid.src.startsWith('blob:')) URL.revokeObjectURL(vid.src);

      loadVideoIntoCard(i, URL.createObjectURL(file), file.name.replace(/\.[^/.]+$/, ''));
    });
  });
}


function removeVideo(i) {
  const vid   = document.getElementById(`video-${i}`);
  const file  = document.getElementById(`file-${i}`);
  const title = document.getElementById(`title-${i}`);
  const card  = document.getElementById(`card-${i}`);

  if (vid.src && vid.src.startsWith('blob:')) URL.revokeObjectURL(vid.src);
  vid.src   = '';
  file.value = '';
  title.textContent = 'Chưa có video...';
  title.classList.add('placeholder');
  card.classList.remove('has-video');
}



document.addEventListener('DOMContentLoaded', () => {
  initDecoDucks();
  initWalkingParade();
  initGrass();
  initVideoCards();
});
