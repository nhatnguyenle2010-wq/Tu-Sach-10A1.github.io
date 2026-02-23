
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
  if (flip) { ctx.scale(-1, 1); ctx.translate(-canvas.width, 0); }
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

// ===== CARDS CONFIG =====
// Để thêm video của bạn:
//   - Nếu có link online: điền vào "src" 
//   - Nếu muốn upload từ máy: để src rỗng (''), click nút 📁 khi chạy web
const CARDS = [
  { label: 'Video 1', emoji: '🦆', src: 'https://drive.google.com/file/d/1FvP_IzZ1GDZzwk0-bYSzSgqgsJOVxVN9/view?usp=drive_link', title: 'Đất Rừng Phương Nam' },
  { label: 'Video 2', emoji: '🐥', src: 'https://drive.google.com/file/d/1yksnonXH3QqQ-UbxxupKiimR6CH31Mk_/view?usp=drive_link', title: 'Giang' },
  { label: 'Video 3', emoji: '🐤', src: 'https://drive.google.com/file/d/1pNAxCcX12oenWCqcRhXPIhy_C1ysEQV-/view?usp=drive_link', title: 'Xuân về' },
  { label: 'Video 4', emoji: '🐣', src: 'https://drive.google.com/file/d/1db6KjkgwcOGMdagKi-0ebYFS1hp0ccOK/view?usp=drive_link', title: 'Buổi Học Cuối Cùng' },
];

// ===== BUILD CARD HTML =====
function buildCardHTML(card, index) {
  return `
    <div class="card-tag"><span>${card.emoji}</span> ${card.label}</div>

    <input type="file" class="file-input" accept="video/mp4,video/webm,video/ogg,video/*" id="file-${index}" />

    <div class="video-wrap">
      <video id="video-${index}" controls preload="metadata" playsinline></video>

      <!-- Hiện khi chưa có video -->
      <div class="empty-state" id="empty-${index}">
        <div class="empty-icon">🎬</div>
        <div class="add-label">+ Thêm video</div>
        <div class="empty-hint">Nhấn để chọn file từ máy tính</div>
      </div>

      <!-- Nút xóa video -->
      <button class="remove-btn" id="remove-${index}" title="Xóa video">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
             stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <div class="card-info">
      <span class="video-title placeholder" id="title-${index}">Chưa có video...</span>
      <button class="upload-btn" id="upload-btn-${index}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg>
        📁 Tải lên
      </button>
    </div>
  `;
}

// ===== LOAD VIDEO INTO CARD =====
function loadVideoIntoCard(i, src, displayTitle) {
  const vid    = document.getElementById(`video-${i}`);
  const title  = document.getElementById(`title-${i}`);
  const card   = document.getElementById(`card-${i}`);
  const empty  = document.getElementById(`empty-${i}`);

  vid.src = src;
  vid.load();

  // Hiện tên video
  const name = displayTitle || src.split('/').pop().replace(/\.[^/.]+$/, '') || 'Video không tên';
  title.textContent = name;
  title.classList.remove('placeholder');

  // Ẩn empty state, hiện remove btn
  if (empty) empty.style.display = 'none';
  card.classList.add('has-video');
}

// ===== REMOVE VIDEO =====
function removeVideo(i) {
  const vid   = document.getElementById(`video-${i}`);
  const file  = document.getElementById(`file-${i}`);
  const title = document.getElementById(`title-${i}`);
  const card  = document.getElementById(`card-${i}`);
  const empty = document.getElementById(`empty-${i}`);

  if (vid.src && vid.src.startsWith('blob:')) URL.revokeObjectURL(vid.src);
  vid.src    = '';
  vid.load();
  file.value = '';
  title.textContent = 'Chưa có video...';
  title.classList.add('placeholder');
  if (empty) empty.style.display = '';
  card.classList.remove('has-video');
}

// ===== INIT VIDEO CARDS =====
function initVideoCards() {
  const grid = document.getElementById('grid');

  CARDS.forEach((cardData, i) => {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.id = `card-${i}`;
    card.innerHTML = buildCardHTML(cardData, i);
    grid.appendChild(card);

    const fileInput  = document.getElementById(`file-${i}`);
    const uploadBtn  = document.getElementById(`upload-btn-${i}`);
    const removeBtn  = document.getElementById(`remove-${i}`);
    const emptyState = document.getElementById(`empty-${i}`);

    // --- Load video có sẵn từ CARDS config ---
    if (cardData.src) {
      loadVideoIntoCard(i, cardData.src, cardData.title);
    }

    // --- Nút "Tải lên" ở card-info ---
    uploadBtn.addEventListener('click', () => fileInput.click());

    // --- Click vào vùng trống cũng mở chọn file ---
    emptyState.addEventListener('click', () => fileInput.click());

    // --- Khi chọn file xong ---
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      // Kiểm tra kích thước (cảnh báo nếu > 500MB)
      if (file.size > 500 * 1024 * 1024) {
        alert('⚠️ File quá lớn (>500MB). Video có thể load chậm.');
      }

      // Giải phóng blob URL cũ nếu có
      const vid = document.getElementById(`video-${i}`);
      if (vid.src && vid.src.startsWith('blob:')) URL.revokeObjectURL(vid.src);

      const blobURL = URL.createObjectURL(file);
      loadVideoIntoCard(i, blobURL, file.name.replace(/\.[^/.]+$/, ''));
    });

    // --- Nút xóa video ---
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeVideo(i);
    });
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initDecoDucks();
  initWalkingParade();
  initGrass();
  initVideoCards();
});
