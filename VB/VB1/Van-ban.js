/* ══════════════════════════════════════════════════════
 *  Van-ban.js  –  Template Văn Bản
 *
 *  ✏️  ĐÂY LÀ FILE DUY NHẤT BẠN CẦN CHỈNH
 *  Mỗi trang mới = sao chép file này + đổi nội dung bên dưới
 * ══════════════════════════════════════════════════════ */

const PAGE_CONFIG = {

  /* ── TIÊU ĐỀ ── */
  pageTitle:  "Đất Rừng Phương Nam",


  titleLine1: "Đất Rừng",
  titleEm:    "Phương Nam",   

  /* ── MỤC 1 – ẢNH ── */
  tag1:       "Mục I",
  title1:     "Giới Thiệu",
  imgSrc:     "https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/VB/VB1/sc/anh-gth.avif",
  imgAlt:     "Đất Rừng Phương Nam",
  imgCaption: "Sơ đồ tư duy về đoạn trích Đi Lấy Mật",

  tag2:          "Mục II",
  title2:        "Ôn Tập Văn Học",
  text2:         "Truy cập trang tài liệu chi tiết để tìm hiểu thêm về nội dung, thông tin bổ sung và các nguồn tham khảo liên quan đến chủ đề này.",
  pageLinkLabel: "7 Mảnh Ghép Kiến Thức",
  pageLinkUrl:   "https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/VB/VB1/game/game.html", 

  tag3:       "Mục III",
  title3:     "Trò Chơi Củng Cố",

  canvaLabel: "Mở Tài Liệu Trên Canva",
  canvaUrl:   "https://nguvancohanhh.my.canva.site/",   

  /* ── FOOTER ── */
  footer: "Được biên soạn bởi tập thể 10A1 · © 2026",

  /* ── THEME ──
   * Chọn một trong: "forest" | "ocean" | "midnight" | "rose" | "sand"
   * Hoặc để "" và tự đặt màu bên dưới */
  theme: "forest",

  /* Màu tuỳ chỉnh (chỉ dùng khi theme = "") */
  primaryColor: "#2d6a4f",
  accentColor:  "#c9a84c",

  /* ── FONT ──
   * "playfair" | "merriweather" | "josefin" | "crimson" */
  font: "playfair",
};


/* ══════════════════════════════════════════════════════
 *  ENGINE  –  Không cần chỉnh phần bên dưới
 * ══════════════════════════════════════════════════════ */

const THEMES = {
  forest: {
    bg: "#f5f0e8", ink: "#1a1a2e", card: "#ffffff",
    primary: "#2d6a4f", accent: "#c9a84c",
    glow1: "rgba(45,106,79,0.08)",   glow2: "rgba(201,168,76,0.10)",
    shadow: "rgba(45,106,79,0.08)",  text: "#3a3a4a",
  },
  ocean: {
    bg: "#eef4fb", ink: "#0d2137", card: "#ffffff",
    primary: "#1a6fa8", accent: "#f0a500",
    glow1: "rgba(26,111,168,0.09)",  glow2: "rgba(240,165,0,0.09)",
    shadow: "rgba(26,111,168,0.09)", text: "#2a3d4e",
  },
  midnight: {
    bg: "#0f1117", ink: "#e8e8f0", card: "#1a1d2e",
    primary: "#7b8cde", accent: "#f7b731",
    glow1: "rgba(123,140,222,0.12)", glow2: "rgba(247,183,49,0.08)",
    shadow: "rgba(0,0,0,0.4)",       text: "#a0a8c0",
  },
  rose: {
    bg: "#fdf4f5", ink: "#2d1b20", card: "#ffffff",
    primary: "#c2435a", accent: "#e8956d",
    glow1: "rgba(194,67,90,0.08)",   glow2: "rgba(232,149,109,0.10)",
    shadow: "rgba(194,67,90,0.08)",  text: "#5a3040",
  },
  sand: {
    bg: "#f9f4ee", ink: "#2c2417", card: "#ffffff",
    primary: "#8b5e3c", accent: "#d4956a",
    glow1: "rgba(139,94,60,0.08)",   glow2: "rgba(212,149,106,0.09)",
    shadow: "rgba(139,94,60,0.08)",  text: "#5a4030",
  },
};

const FONTS = {
  playfair:     { display: "'Playfair Display'", body: "'Lora'",        url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;600&display=swap" },
  merriweather: { display: "'Merriweather'",     body: "'Merriweather'", url: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" },
  josefin:      { display: "'Josefin Sans'",     body: "'Josefin Sans'", url: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" },
  crimson:      { display: "'Crimson Pro'",      body: "'Crimson Pro'",  url: "https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,900;1,400&display=swap" },
};

/* ── Apply CSS variables from a theme object ── */
function applyTheme(name, customPrimary, customAccent) {
  let t = THEMES[name] || THEMES.forest;
  if (!name && customPrimary) {
    t = { ...THEMES.forest, primary: customPrimary, accent: customAccent || t.accent };
  }
  const r = document.documentElement;
  r.style.setProperty('--bg',      t.bg);
  r.style.setProperty('--ink',     t.ink);
  r.style.setProperty('--card-bg', t.card);
  r.style.setProperty('--primary', t.primary);
  r.style.setProperty('--accent',  t.accent);
  r.style.setProperty('--glow-1',  t.glow1);
  r.style.setProperty('--glow-2',  t.glow2);
  r.style.setProperty('--shadow',  t.shadow);
  r.style.setProperty('--text',    t.text);
  document.getElementById('colorPrimary').value = t.primary;
  document.getElementById('colorAccent').value  = t.accent;
}

/* ── Load Google Font and apply font variables ── */
function applyFont(name) {
  const f = FONTS[name] || FONTS.playfair;
  document.getElementById('google-fonts').href = f.url;
  document.documentElement.style.setProperty('--font-display', f.display);
  document.documentElement.style.setProperty('--font-body',    f.body);
}

/* ── Preset dropdown ── */
function applyPreset(name) { applyTheme(name); }

/* ── Color pickers ── */
function customColor(type, val) {
  document.documentElement.style.setProperty(
    type === 'primary' ? '--primary' : '--accent', val
  );
}

/* ── Toggle theme panel ── */
function togglePanel() {
  document.getElementById('themePanel').classList.toggle('open');
}

/* ── Copy config to clipboard ── */
function exportConfig() {
  const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  const accent  = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  const preset  = document.getElementById('presetSelect').value;
  const font    = document.getElementById('fontSelect').value;
  const snippet =
`  theme:        "${preset}",
  primaryColor: "${primary}",
  accentColor:  "${accent}",
  font:         "${font}",`;

}

/* ── Navigate back ── */
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/';
  }
}

/* ── Lightbox ── */
function openLightbox(src, alt) {
  if (!src) return;
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = src;
  img.alt = alt || '';
  cap.textContent = alt || '';
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

/* Đóng lightbox bằng phím Escape */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

/* ── Populate DOM from PAGE_CONFIG ── */
function applyContent() {
  const c = PAGE_CONFIG;

  /* Tiêu đề trang */
  document.title = c.pageTitle || 'Tài Liệu';
  const labelEl = document.getElementById('doc-label');
  if (labelEl) labelEl.textContent = c.label || '';

  document.getElementById('doc-title').innerHTML =
    `${c.titleLine1} <em>${c.titleEm}</em>`;

  /* Mục 1 – Ảnh */
  document.getElementById('tag1').textContent   = c.tag1   || '';
  document.getElementById('title1').textContent = c.title1 || '';
  const img = document.getElementById('section-img');
  img.src = c.imgSrc || '';
  img.alt = c.imgAlt || '';
  document.getElementById('img-caption').textContent = c.imgCaption || '';

  /* Mục 2 – Liên kết */
  document.getElementById('tag2').textContent              = c.tag2          || '';
  document.getElementById('title2').textContent            = c.title2        || '';
  document.getElementById('content2').textContent          = c.text2         || '';
  document.getElementById('page-link').href                = c.pageLinkUrl   || '#';
  document.getElementById('page-link-label').textContent   = c.pageLinkLabel || '';

  /* Mục 3 – Canva */
  document.getElementById('tag3').textContent    = c.tag3       || '';
  document.getElementById('title3').textContent  = c.title3     || '';
  document.getElementById('content3').textContent = c.text3     || '';
  document.getElementById('canva-link').href      = c.canvaUrl  || '#';
  document.getElementById('canva-label').textContent = c.canvaLabel || '';

  /* Footer */
  document.getElementById('footer-text').textContent = c.footer || '';
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  applyContent();
  applyTheme(PAGE_CONFIG.theme || '', PAGE_CONFIG.primaryColor, PAGE_CONFIG.accentColor);
  applyFont(PAGE_CONFIG.font || 'playfair');
  document.getElementById('presetSelect').value = PAGE_CONFIG.theme || 'forest';
  document.getElementById('fontSelect').value   = PAGE_CONFIG.font  || 'playfair';
});
