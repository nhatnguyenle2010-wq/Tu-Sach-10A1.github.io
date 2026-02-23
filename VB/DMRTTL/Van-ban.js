
const PAGE_CONFIG = {


  pageTitle:  "Buổi Học Cuối Cùng",

 
  titleEm:    "Cuối Cùng", 



tag1:    "Mục I",
title1:  "Tác giả",
text1a:  "- Sinh ra ở một làng quê miền nam nước Pháp.\n- Là tác giả của nhiều truyện ngắn nổi tiếng.\n- Cuộc đời ông gắn liền với nổi vất vả, khó nhọc.\n- Ông là nhà văn hiện thực xuất sắc của nước Pháp cuối thế kỉ XIX.\n- Phong cách sáng tác của ông:\n+ Trữ tình và lãng mạn: Các câu chuyện thường giàu mỹ cảm, nhẹ nhàng nhưng sâu lắng.\n+ Chân thực và tự nhiên: Dù lãng mạn, truyện của Daudet luôn gắn liền với hiện thực, phản ánh cuộc sống một cách tự nhiên.",

  tag2:    "Mục II",
  title2:  "Tác phẩm",
  text2a:  "Truyện “Buổi học cuối cùng” lấy bối cảnh từ một biến cố lịch sử: Sau cuộc chiến tranh Pháp – Phổ năm 1870-1871, nước Pháp thua trận, hai vùng An-dát và Lo-ren giáp biên giới với Phổ bị nhập vào nước Phổ. Cho nên các trường học ở hai vùng này bị buộc học tiếng Đức. Truyện viết về buổi học cuối cùng bằng tiếng Pháp ở một trường làng thuộc vùng An-dát",
  
  tag3:       "Mục III ",
  title3:     "Trò chơi Củng cố Kiến thức",

  canvaLabel: "Mở Tài Liệu Trên Canva",
  canvaUrl:   "https://www.canva.com/design/DAHA7m7U_4g/0bN3XUUGD1mmOH2e62v9GA/edit?utm_content=DAHA7m7U_4g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",   


  footer: "Được biên soạn bởi tập thể 10A1 · © 2026",


  theme: "midnight",

  /* Màu tuỳ chỉnh (chỉ dùng khi theme = "") */
  primaryColor: "#2d6a4f",
  accentColor:  "#c9a84c",


  font: "playfair",
};


/* ══════════════════════════════════════════════════════
 *  ENGINE  –  Không cần chỉnh phần bên dưới
 * ══════════════════════════════════════════════════════ */

const THEMES = {
  forest: {
    bg: "#f4f7f4", ink: "#1e2d22", card: "rgba(255,255,255,0.85)",
    primary: "#3a7d5a", accent: "#c9a84c",
    glow1: "rgba(58,125,90,0.12)",  glow2: "rgba(201,168,76,0.12)",  glow3: "rgba(58,125,90,0.05)",
    shadowSm: "rgba(58,125,90,0.06)", shadowMd: "rgba(58,125,90,0.10)",
    cardBorder: "rgba(58,125,90,0.12)", pillBg: "rgba(58,125,90,0.08)", pillBorder: "rgba(58,125,90,0.2)",
    text: "#3a4a3e",
  },
  ocean: {
    bg: "#f0f5fb", ink: "#0e2340", card: "rgba(255,255,255,0.88)",
    primary: "#2278bb", accent: "#f0a500",
    glow1: "rgba(34,120,187,0.12)",  glow2: "rgba(240,165,0,0.12)",  glow3: "rgba(34,120,187,0.05)",
    shadowSm: "rgba(34,120,187,0.06)", shadowMd: "rgba(34,120,187,0.12)",
    cardBorder: "rgba(34,120,187,0.13)", pillBg: "rgba(34,120,187,0.07)", pillBorder: "rgba(34,120,187,0.2)",
    text: "#2a3d54",
  },
  midnight: {
    bg: "#111320", ink: "#e4e8f4", card: "rgba(30,33,55,0.90)",
    primary: "#8a9de8", accent: "#f7b731",
    glow1: "rgba(138,157,232,0.14)", glow2: "rgba(247,183,49,0.10)",  glow3: "rgba(138,157,232,0.06)",
    shadowSm: "rgba(0,0,0,0.25)",    shadowMd: "rgba(0,0,0,0.40)",
    cardBorder: "rgba(138,157,232,0.15)", pillBg: "rgba(138,157,232,0.10)", pillBorder: "rgba(138,157,232,0.25)",
    text: "#a8b0cc",
  },
  rose: {
    bg: "#fdf4f6", ink: "#2d1b22", card: "rgba(255,255,255,0.88)",
    primary: "#c24360", accent: "#e8906a",
    glow1: "rgba(194,67,96,0.11)",   glow2: "rgba(232,144,106,0.12)", glow3: "rgba(194,67,96,0.05)",
    shadowSm: "rgba(194,67,96,0.07)", shadowMd: "rgba(194,67,96,0.12)",
    cardBorder: "rgba(194,67,96,0.13)", pillBg: "rgba(194,67,96,0.07)", pillBorder: "rgba(194,67,96,0.2)",
    text: "#5a3040",
  },
  sand: {
    bg: "#faf6f0", ink: "#2c2217", card: "rgba(255,255,255,0.88)",
    primary: "#9a6840", accent: "#d49a72",
    glow1: "rgba(154,104,64,0.10)",  glow2: "rgba(212,154,114,0.12)", glow3: "rgba(154,104,64,0.05)",
    shadowSm: "rgba(154,104,64,0.07)", shadowMd: "rgba(154,104,64,0.12)",
    cardBorder: "rgba(154,104,64,0.14)", pillBg: "rgba(154,104,64,0.08)", pillBorder: "rgba(154,104,64,0.2)",
    text: "#5a4030",
  },
};

const FONTS = {
  playfair:     { display: "'Playfair Display'", body: "'Lora'",        url: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lora:wght@400;600&display=swap" },
  merriweather: { display: "'Merriweather'",     body: "'Merriweather'", url: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap" },
  josefin:      { display: "'Josefin Sans'",     body: "'Josefin Sans'", url: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap" },
  crimson:      { display: "'Crimson Pro'",      body: "'Crimson Pro'",  url: "https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,900;1,400&display=swap" },
};

/* ─── Apply CSS variables from a theme object ─── */
function applyTheme(name, customPrimary, customAccent) {
  let t = THEMES[name] || THEMES.forest;
  if (!name && customPrimary) {
    t = { ...THEMES.forest, primary: customPrimary, accent: customAccent || t.accent };
  }
  const r = document.documentElement;
  r.style.setProperty('--bg',          t.bg);
  r.style.setProperty('--ink',         t.ink);
  r.style.setProperty('--card-bg',     t.card);
  r.style.setProperty('--card-border', t.cardBorder);
  r.style.setProperty('--pill-bg',     t.pillBg);
  r.style.setProperty('--pill-border', t.pillBorder);
  r.style.setProperty('--primary',     t.primary);
  r.style.setProperty('--accent',      t.accent);
  r.style.setProperty('--glow-1',      t.glow1);
  r.style.setProperty('--glow-2',      t.glow2);
  r.style.setProperty('--glow-3',      t.glow3);
  r.style.setProperty('--shadow-sm',   t.shadowSm);
  r.style.setProperty('--shadow-md',   t.shadowMd);
  r.style.setProperty('--text',        t.text);
  document.getElementById('colorPrimary').value = t.primary;
  document.getElementById('colorAccent').value  = t.accent;
}

/* ─── Load Google Font and apply font variables ─── */
function applyFont(name) {
  const f = FONTS[name] || FONTS.playfair;
  document.getElementById('google-fonts').href = f.url;
  document.documentElement.style.setProperty('--font-display', f.display);
  document.documentElement.style.setProperty('--font-body',    f.body);
}

/* ─── Called by preset dropdown ─── */
function applyPreset(name) { applyTheme(name); }

/* ─── Called by color pickers ─── */
function customColor(type, val) {
  document.documentElement.style.setProperty(
    type === 'primary' ? '--primary' : '--accent', val
  );
}

/* ─── Toggle panel visibility ─── */
function togglePanel() {
  document.getElementById('themePanel').classList.toggle('open');
}

/* ─── Copy current config to clipboard ─── */
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
  navigator.clipboard.writeText(snippet)
    .then(() => alert('✅ Đã sao chép config!\nDán vào PAGE_CONFIG trong config.js để dùng lại.'));
}

/* ─── Populate DOM from PAGE_CONFIG ─── */
function applyContent() {
  const c = PAGE_CONFIG;

  document.getElementById('doc-title').innerHTML     = ` <em>${c.titleEm}</em>`;
  document.getElementById('tag1').textContent        = c.tag1;
  document.getElementById('title1').textContent      = c.title1;
  document.getElementById('content1a').textContent   = c.text1a;
  document.getElementById('content1b').textContent   = c.text1b;
  document.getElementById('tag2').textContent        = c.tag2;
  document.getElementById('title2').textContent      = c.title2;
  document.getElementById('content2a').textContent   = c.text2a;
  document.getElementById('content2b').textContent   = c.text2b;
  document.getElementById('tag3').textContent        = c.tag3;
  document.getElementById('title3').textContent      = c.title3;
  document.getElementById('content3').textContent    = c.text3;
  document.getElementById('canva-link').href         = c.canvaUrl;
  document.getElementById('canva-link').querySelector('span').textContent = c.canvaLabel;
  document.getElementById('footer-text').textContent = c.footer;
}

/* ─── Navigate back ─── */
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = '/';
  }
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  applyContent();
  applyTheme(PAGE_CONFIG.theme || '', PAGE_CONFIG.primaryColor, PAGE_CONFIG.accentColor);
  applyFont(PAGE_CONFIG.font || 'playfair');
  document.getElementById('presetSelect').value = PAGE_CONFIG.theme || 'forest';
  document.getElementById('fontSelect').value   = PAGE_CONFIG.font  || 'playfair';
});
