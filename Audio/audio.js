
const tracks = [
  {
    src:      'https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/Audio/Buoi-hoc-cuoi-cung.MP3',          // ← đổi thành tên file mp3 của bạn
    title:    'Buổi Học Cuối Cùng',
    tag:      'Audio Truyện Ngắn',
    emoji:    '🏫',
    gradient: 'linear-gradient(145deg, #fce3b5 0%, #f4a261 55%, #e07050 100%)',
  },
  {
    src:      'https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/Audio/dat-rung-phuong-nam.mp3',          // ← đổi thành tên file mp3 của bạn
    title:    'Đất Rừng Phương Nam',
    tag:      'Audio Truyện Ngắn',
    emoji:    '🌳',
    gradient: 'linear-gradient(145deg, #46ff35 0%, #00c70d 55%, #09bc06 100%)',
  },
  {
    src:      'https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/Audio/Xuan-ve.mp3',          // ← đổi thành tên file mp3 của bạn
    title:    'Xuân Về',
    tag:      'Audio Thơ',
    emoji:    '🌸',
    gradient: 'linear-gradient(145deg, #f8b4bc 0%, #e8637a 55%, #c04460 100%)',
  },
  {
    src:      'https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/Audio/Giang.m4a',          // ← đổi thành tên file mp3 của bạn
    title:    'Giang',
    tag:      'Audio Truyện Ngắn',
    emoji:    '✨',
    gradient: 'linear-gradient(145deg, #d4b5f0 0%, #c084e8 55%, #9553c5 100%)',
  },
];

// =============================================================================
//  INTERNAL — không cần chỉnh bên dưới
// =============================================================================

// Mỗi phần tử: { audio, waveData, rafId }
const players = [];

// ─── Build Cards ──────────────────────────────────────────────────────────────

function buildCards() {
  const grid = document.getElementById('grid');

  tracks.forEach((t, i) => {
    // Tạo thẻ HTML
    const card = document.createElement('div');
    card.className = 'audio-card';
    card.id = `card-${i}`;

    card.innerHTML = `
      <div class="card-top">
        <div class="thumb" id="thumb-${i}" onclick="togglePlay(${i})">
          <div class="thumb-inner" style="background:${t.gradient}">
            <span class="thumb-emoji">${t.emoji}</span>
          </div>
          <div class="thumb-spin"></div>
        </div>
        <div class="card-meta">
          <div class="card-title">${t.title}</div>
          
          <span class="card-tag">${t.tag}</span>
        </div>
      </div>

      <canvas class="wave" id="wave-${i}" height="80"></canvas>

      <div class="time-row">
        <span id="cur-${i}">0:00</span>
        <div class="mini-viz" id="viz-${i}"></div>
        <span id="dur-${i}">--:--</span>
      </div>

      <div class="controls">
        <button class="ctrl-btn" onclick="seek(${i}, -10)" title="Tua lùi 10s">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.86"/>
          </svg>
        </button>
        <button class="play-btn" onclick="togglePlay(${i})">
          <svg id="icon-${i}" width="22" height="22" viewBox="0 0 24 24" fill="white">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
        </button>
        <button class="ctrl-btn" onclick="seek(${i}, 10)" title="Tua tới 10s">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-3.86"/>
          </svg>
        </button>
        <div class="vol-wrap">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          <input class="vol" type="range" min="0" max="100" value="75"
                 oninput="setVol(this, ${i})">
        </div>
      </div>

      <div class="load-msg" id="msg-${i}">Đang tải…</div>
    `;

    grid.appendChild(card);

    // Khởi tạo waveData giả (sẽ được thay bằng dữ liệu thật nếu load được)
    const waveData = Array.from({ length: 60 }, () => 0.15 + Math.random() * 0.85);

    // Tạo đối tượng Audio
    const audio = new Audio();
    audio.src     = t.src;
    audio.preload = 'metadata';
    audio.volume  = 0.75;

    players.push({ audio, waveData, rafId: null });

    // Sự kiện khi metadata (thời lượng) đã tải xong
    audio.addEventListener('loadedmetadata', () => {
      document.getElementById(`dur-${i}`).textContent = formatTime(audio.duration);
      document.getElementById(`msg-${i}`).textContent = '';
      drawWave(i);
    });

    // Sự kiện cập nhật thời gian phát liên tục
    audio.addEventListener('timeupdate', () => {
      document.getElementById(`cur-${i}`).textContent = formatTime(audio.currentTime);
      drawWave(i);
    });

    // Khi bài kết thúc
    audio.addEventListener('ended', () => {
      setPlayState(i, false);
    });

    // Lỗi tải file
    audio.addEventListener('error', () => {
      const msg = document.getElementById(`msg-${i}`);
      msg.textContent = `⚠️ Không tìm thấy: ${t.src}`;
      msg.classList.add('error');
      document.getElementById(`dur-${i}`).textContent = '--:--';
    });

    // Nếu trình duyệt đã cache sẵn metadata
    if (audio.readyState >= 1) {
      document.getElementById(`dur-${i}`).textContent = formatTime(audio.duration);
      document.getElementById(`msg-${i}`).textContent = '';
    }

    // Build mini visualizer bars
    buildMiniViz(i);

    // Click vào waveform để seek
    const canvas = document.getElementById(`wave-${i}`);
    canvas.addEventListener('click', e => {
      if (!audio.duration) return;
      const pct = (e.clientX - canvas.getBoundingClientRect().left) / canvas.offsetWidth;
      audio.currentTime = pct * audio.duration;
      drawWave(i);
    });

    // Khởi tạo style volume
    card.querySelector('.vol').dispatchEvent(new Event('input'));

    drawWave(i);
  });
}

// ─── Mini Visualizer ──────────────────────────────────────────────────────────

function buildMiniViz(i) {
  const viz = document.getElementById(`viz-${i}`);
  for (let b = 0; b < 10; b++) {
    const bar = document.createElement('div');
    bar.className = 'mvbar';
    bar.style.setProperty('--mh', (4 + Math.random() * 10).toFixed(1) + 'px');
    bar.style.setProperty('--d',  (0.45 + Math.random() * 0.6).toFixed(2) + 's');
    bar.style.animationDelay = (Math.random() * 0.4).toFixed(2) + 's';
    viz.appendChild(bar);
  }
}

// ─── Waveform Drawing ─────────────────────────────────────────────────────────

function drawWave(i) {
  const canvas = document.getElementById(`wave-${i}`);
  if (!canvas) return;

  const ctx     = canvas.getContext('2d');
  const audio   = players[i].audio;
  const waveData = players[i].waveData;

  canvas.width  = canvas.offsetWidth * 2;
  canvas.height = 80;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const progress = audio.duration ? audio.currentTime / audio.duration : 0;
  const n     = waveData.length;
  const barW  = (canvas.width / n) * 0.55;
  const gap   = (canvas.width / n) * 0.45;

  waveData.forEach((v, idx) => {
    const x = idx * (barW + gap);
    const h = v * canvas.height * 0.88;
    const y = (canvas.height - h) / 2;

    ctx.fillStyle = (idx / n) < progress
      ? 'rgba(232, 99, 122, 0.92)'
      : 'rgba(58, 31, 40, 0.15)';

    ctx.beginPath();
    ctx.roundRect(x, y, barW, h, 2);
    ctx.fill();
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(sec) {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = String(Math.floor(sec % 60)).padStart(2, '0');
  return `${m}:${s}`;
}

function setPlayState(i, playing) {
  const icon  = document.getElementById(`icon-${i}`);
  const thumb = document.getElementById(`thumb-${i}`);
  const bars  = document.querySelectorAll(`#viz-${i} .mvbar`);

  if (playing) {
    icon.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
    thumb.classList.add('playing');
    bars.forEach(b => b.classList.add('playing'));
  } else {
    icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    thumb.classList.remove('playing');
    bars.forEach(b => b.classList.remove('playing'));
  }
}

// ─── Play / Pause ─────────────────────────────────────────────────────────────

function togglePlay(i) {
  const audio = players[i].audio;

  if (audio.paused) {
    // Dừng tất cả bài khác trước
    players.forEach((p, idx) => {
      if (idx !== i && !p.audio.paused) {
        p.audio.pause();
        setPlayState(idx, false);
      }
    });

    audio.play().catch(() => {
      document.getElementById(`msg-${i}`).textContent = '⚠️ Không thể phát — kiểm tra đường dẫn file.';
      document.getElementById(`msg-${i}`).classList.add('error');
    });
    setPlayState(i, true);
  } else {
    audio.pause();
    setPlayState(i, false);
  }
}

// ─── Seek ─────────────────────────────────────────────────────────────────────

function seek(i, delta) {
  const audio = players[i].audio;
  if (!audio.duration) return;
  audio.currentTime = Math.max(0, Math.min(audio.duration, audio.currentTime + delta));
  drawWave(i);
}

// ─── Volume ───────────────────────────────────────────────────────────────────

function setVol(el, i) {
  const v = el.value / 100;
  players[i].audio.volume = v;
  const pct = el.value;
  el.style.background = `linear-gradient(to right, #e8637a ${pct}%, rgba(58,31,40,0.15) ${pct}%)`;
}

// ─── Init ─────────────────────────────────────────────────────────────────────

buildCards();
window.addEventListener('resize', () => tracks.forEach((_, i) => drawWave(i)));
