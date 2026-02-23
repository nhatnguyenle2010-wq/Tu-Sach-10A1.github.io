
const PAGES = [
  // ===== BÌA TRƯỚC =====
  {
    type: "cover",
    imageId: "cover-front",  
    position: "front"
  },
  
  // ===== CÁC TRANG HÌNH ẢNH =====
  { type: "image", imageId: "chapter-0", pg: 2 },
  { type: "image", imageId: "chapter-1", pg: 3 },
  { type: "image", imageId: "chapter-2", pg: 4 },
  { type: "image", imageId: "chapter-3", pg: 5 },
  { type: "image", imageId: "chapter-4", pg: 6 },
  { type: "image", imageId: "chapter-5", pg: 7 },
  { type: "image", imageId: "chapter-6", pg: 8 },
  { type: "image", imageId: "chapter-7", pg: 9 },
  { type: "image", imageId: "chapter-8", pg: 10 },
  { type: "image", imageId: "chapter-9", pg: 11 },
  { type: "image", imageId: "chapter-10", pg: 12 },
  { type: "image", imageId: "chapter-11", pg: 13 },
  { type: "image", imageId: "chapter-12", pg: 14 },
  { type: "image", imageId: "chapter-13", pg: 15 },
  { type: "image", imageId: "chapter-14", pg: 16 },
  { type: "image", imageId: "chapter-15", pg: 17 },
  { type: "image", imageId: "chapter-16", pg: 18 },
  { type: "image", imageId: "chapter-17", pg: 19 },
  { type: "image", imageId: "chapter-18", pg: 20 },
  { type: "image", imageId: "chapter-19", pg: 21 },
  { type: "image", imageId: "chapter-20", pg: 22 },
  { type: "image", imageId: "chapter-21", pg: 23 },
  { type: "image", imageId: "chapter-22", pg: 24 },
  { type: "image", imageId: "chapter-23", pg: 25 },



  // ===== BÌA SAU =====
  {
    type: "cover",
    imageId: "cover-back",  
    position: "back"
  },
];

let cur = 0;

function buildDots() {
  const c = document.getElementById("dots");
  c.innerHTML = PAGES.map(
    (_, i) =>
      `<div class="dot${i === cur ? " active" : ""}" onclick="goTo(${i})"></div>`,
  ).join("");
}

function render(idx) {
  const container = document.getElementById("bookPage");
  const p = PAGES[idx];

  if (p.type === "cover") {
    const isBack = p.position === "back";
    const btnText = isBack ? "Về đầu &larr;" : "Bắt đầu đọc &rarr;";
    const btnAction = isBack ? "goTo(0)" : "turn(1)";
    
    container.innerHTML = `
      <div class="cover-page ${p.imageId}">
        <div class="cover-overlay"></div>
        <div class="cover-content">
          <button class="cover-btn" onclick="${btnAction}">${btnText}</button>
        </div>
      </div>`;
  } else {
    // Trang hình ảnh toàn màn hình
    container.innerHTML = `
      <div class="image-page">
        <div class="page-num-badge">Trang ${p.pg} / ${PAGES.length - 1}</div>
        <div class="image-container ${p.imageId}"></div>
      </div>`;
  }

  // Cập nhật navigation info
  let navText;
  if (cur === 0) {
    navText = "Bìa trước";
  } else if (cur === PAGES.length - 1) {
    navText = "Bìa sau";
  } else {
    navText = `${cur + 1} / ${PAGES.length - 1}`;
  }
  document.getElementById("navInfo").textContent = navText;
  
  // Cập nhật nút điều hướng
  document.getElementById("prevBtn").disabled = cur === 0;
  document.getElementById("nextBtn").disabled = cur === PAGES.length - 1;
  
  buildDots();
}

function turn(d) {
  const n = cur + d;
  if (n < 0 || n >= PAGES.length) return;
  goTo(n);
}

function goTo(idx) {
  const container = document.getElementById("bookPage");
  container.classList.add("turning");
  setTimeout(() => {
    cur = idx;
    render(cur);
    container.classList.remove("turning");
  }, 340);
}

// Keyboard navigation (Arrow keys)
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") turn(1);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") turn(-1);
});

// Touch/swipe support for mobile
let tx = 0;
document.addEventListener("touchstart", (e) => {
  tx = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
  const dx = tx - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 50) turn(dx > 0 ? 1 : -1);
});

// Khởi tạo trang đầu tiên
render(0);
