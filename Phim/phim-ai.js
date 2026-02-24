/* ============================================================
   DUCK PIXEL ART
   ============================================================ */
const DUCK_COLORS = {
  body: '#feeb37', dark: '#f0b830',
  beak: '#fb9d00', eye:  '#000000', shine: '#ffffff',
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
  'transparent', DUCK_COLORS.body, DUCK_COLORS.dark,
  DUCK_COLORS.beak, DUCK_COLORS.eye, DUCK_COLORS.shine,
];

function drawDuck(canvas, scale, flip = false) {
  const rows = DUCK_MAP.length, cols = DUCK_MAP[0].length;
  canvas.width  = cols * scale;
  canvas.height = rows * scale;
  canvas.style.imageRendering = 'pixelated';
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  if (flip) { ctx.scale(-1, 1); ctx.translate(-canvas.width, 0); }
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) {
      const v = DUCK_MAP[r][c];
      if (!v) continue;
      ctx.fillStyle = PALETTE[v];
      ctx.fillRect(c * scale, r * scale, scale, scale);
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

/* ============================================================
   ★ DANH SÁCH VIDEO — CHỈNH SỬA TẠI ĐÂY ★
   ------------------------------------------------------------
   Dán link vào "src". Code tự nhận dạng:

   YouTube  → https://www.youtube.com/watch?v=XXXXXXXXXXX
              https://youtu.be/XXXXXXXXXXX

   G.Drive  → https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing
              (copy thẳng link chia sẻ, không cần đổi gì)

   MP4 link → https://example.com/video.mp4

   Upload   → để src: ''  rồi nhấn nút tải lên trên web
   ============================================================ */
const CARDS = [
  {
    label: 'Video 1', emoji: '🦆',
    src:   'https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/Phim/vid/video-1.mp4',
    title: 'Đất Rừng Phương Nam',
  },
  {
    label: 'Video 2', emoji: '🐥',
    src:   'https://drive.google.com/file/d/1yksnonXH3QqQ-UbxxupKiimR6CH31Mk_/view?usp=drive_link',
    title: 'Giang',
  },
  {
    label: 'Video 3', emoji: '🐤',
    src:   'https://drive.google.com/file/d/1pNAxCcX12oenWCqcRhXPIhy_C1ysEQV-/view?usp=drive_link',
    title: 'Xuân về',
  },
  {
    label: 'Video 4', emoji: '🐣',
    src:   'https://drive.google.com/file/d/1db6KjkgwcOGMdagKi-0ebYFS1hp0ccOK/view?usp=drive_link',   // ← dán link vào đây
    title: 'Buổi Học Cuối Cùng',   // ← đổi tiêu đề nếu muốn
  },
];

/* ============================================================
   PHÁT HIỆN LOẠI LINK
   ============================================================ */
function detectType(src) {
  if (!src) return 'empty';
  if (/youtube\.com\/watch\?.*v=|youtu\.be\//.test(src)) return 'youtube';
  if (/drive\.google\.com/.test(src)) return 'gdrive';
  return 'direct';
}

function getYouTubeID(src) {
  const m = src.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function getDriveID(src) {
  const m = src.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

/* ============================================================
   BUILD HTML CỦA CARD
   ============================================================ */
function buildCardHTML(card, index) {
  return `
    <div class="card-tag"><span>${card.emoji}</span> ${card.label}</div>
    <input type="file" class="file-input" accept="video/mp4,video/webm,video/ogg,video/*" id="file-${index}" />

    <div class="video-wrap" id="wrap-${index}">
      <div class="empty-state" id="empty-${index}">
        <div class="empty-icon">🎬</div>
        <div class="add-label">+ Thêm video</div>
        <div class="empty-hint">Nhấn để chọn file từ máy tính</div>
      </div>
      <button class="remove-btn" id="remove-${index}" title="Xóa video">
       
      </button>
    </div>

    <div class="card-info">
      <span class="video-title placeholder" id="title-${index}">Chưa có video...</span>
      <button class="upload-btn" id="upload-btn-${index}">
        
      </button>
    </div>
  `;
}

/* ============================================================
   TẠO PLAYER PHÙ HỢP VỚI LOẠI LINK
   ============================================================ */
function createPlayer(type, src) {
  const baseStyle = 'width:100%;height:100%;border:none;display:block;';

  if (type === 'youtube') {
    const id = getYouTubeID(src);
    if (!id) return null;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${id}?rel=0`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.style.cssText = baseStyle;
    return iframe;
  }

  if (type === 'gdrive') {
    const id = getDriveID(src);
    if (!id) return null;
    const iframe = document.createElement('iframe');
    iframe.src = `https://drive.google.com/file/d/${id}/preview`;
    iframe.allow = 'autoplay';
    iframe.allowFullscreen = true;
    iframe.style.cssText = baseStyle;
    return iframe;
  }

  // Direct / blob
  const video = document.createElement('video');
  video.controls   = true;
  video.preload    = 'metadata';
  video.playsinline = true;
  video.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
  video.src = src;
  video.load();
  return video;
}

/* ============================================================
   LOAD VIDEO VÀO CARD
   ============================================================ */
function loadVideoIntoCard(i, src, displayTitle) {
  const wrap  = document.getElementById(`wrap-${i}`);
  const title = document.getElementById(`title-${i}`);
  const card  = document.getElementById(`card-${i}`);
  const empty = document.getElementById(`empty-${i}`);

  // Xóa player cũ
  clearPlayer(wrap);

  const type = detectType(src);

  // Thông báo lỗi cho link không hợp lệ
  if (type === 'youtube' && !getYouTubeID(src)) {
    return showError(wrap, 'Link YouTube không hợp lệ 😵');
  }
  if (type === 'gdrive' && !getDriveID(src)) {
    return showError(wrap, 'Link Google Drive không hợp lệ 😵');
  }

  const player = createPlayer(type, src);
  if (!player) return;

  // Với <video> trực tiếp, thêm handler lỗi
  if (player.tagName === 'VIDEO') {
    player.addEventListener('error', () => {
      player.remove();
      showError(wrap, '⚠️ Không tải được video. Hãy thử link khác hoặc upload từ máy.');
      card.classList.remove('has-video');
      empty.style.display = '';
    });
  }

  // Chèn player vào trước empty-state
  wrap.insertBefore(player, empty);

  // Cập nhật UI
  const name = displayTitle
    || src.split('/').pop().split('?')[0].replace(/\.[^/.]+$/, '')
    || 'Video';
  title.textContent = name;
  title.classList.remove('placeholder');
  empty.style.display = 'none';
  card.classList.add('has-video');
}

/* ============================================================
   TIỆN ÍCH
   ============================================================ */
function clearPlayer(wrap) {
  const old = wrap.querySelector('video, iframe');
  if (old) {
    if (old.tagName === 'VIDEO' && old.src.startsWith('blob:'))
      URL.revokeObjectURL(old.src);
    old.remove();
  }
  const err = wrap.querySelector('.error-msg');
  if (err) err.remove();
}

function showError(wrap, msg) {
  const div = document.createElement('div');
  div.className = 'error-msg';
  div.style.cssText = `
    position:absolute;inset:0;display:flex;flex-direction:column;
    align-items:center;justify-content:center;gap:10px;
    background:rgba(255,235,235,0.97);padding:20px;text-align:center;border-radius:16px;
  `;
  div.innerHTML = `
    <div style="font-size:2.4rem">😵</div>
    <div style="font-size:0.82rem;font-weight:800;color:#c0392b;line-height:1.5">${msg}</div>
  `;
  wrap.appendChild(div);
}

function removeVideo(i) {
  const wrap  = document.getElementById(`wrap-${i}`);
  const file  = document.getElementById(`file-${i}`);
  const title = document.getElementById(`title-${i}`);
  const card  = document.getElementById(`card-${i}`);
  const empty = document.getElementById(`empty-${i}`);

  clearPlayer(wrap);
  file.value = '';
  title.textContent = 'Chưa có video...';
  title.classList.add('placeholder');
  empty.style.display = '';
  card.classList.remove('has-video');
}

/* ============================================================
   KHỞI TẠO CARDS
   ============================================================ */
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

    // Load video từ CARDS config
    if (cardData.src) loadVideoIntoCard(i, cardData.src, cardData.title);

    // Nút tải lên
    uploadBtn.addEventListener('click', () => fileInput.click());

    // Click vào vùng trống
    emptyState.addEventListener('click', () => fileInput.click());

    // Sau khi chọn file
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      loadVideoIntoCard(i, URL.createObjectURL(file), file.name.replace(/\.[^/.]+$/, ''));
    });

    // Nút xóa
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeVideo(i);
    });
  });
}

/* ============================================================
   MAIN
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initDecoDucks();
  initWalkingParade();
  initGrass();
  initVideoCards();
});
