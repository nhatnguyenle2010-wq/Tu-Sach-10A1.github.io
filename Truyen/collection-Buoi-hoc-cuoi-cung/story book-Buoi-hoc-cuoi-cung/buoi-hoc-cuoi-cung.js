const PAGES = [
  {
    type: "cover",
    emoji: "📚",
    title: "Buổi Học Cuối Cùng",
    sub: "Câu chuyện về tình yêu ngôn ngữ và đất nước",
    author: "An-phông-xơ Đô-đê",
  },
  {
    type: "story",
    imageId: "chapter-1", // ID để bạn thêm hình riêng cho từng chương
    label: "Chương 1",
    head: "Buổi Sáng Hôm Ấy",
    pg: 1,
    text: `Buổi sáng hôm ấy, trời ấm áp và trong trẻo đến lạ kỳ. Cậu bé Phrăng thức dậy muộn và cảm thấy một nỗi sợ hãi len lỏi khi nghĩ đến việc bố thầy Ha-men kiểm tra về các quy tắc phân từ mà cậu chẳng thuộc lấy một chữ.\n\nCậu đã định trốn học để chơi nhảy trên những cánh đồng xanh ngát, nơi tiếng chim hót líu lo và những người lính Phổ đang tập trận. Nhưng cuối cùng, một sức mạnh vô hình đã thúc giục cậu rảo bước thật nhanh đến trường.`,
  },
  {
    type: "story",
    imageId: "chapter-2",
    label: "Chương 2",
    head: "Bảng Cáo Thị",
    pg: 2,
    text: `Khi đi ngang qua trụ sở xã, Phrăng thấy một đám đông đang đứng trước bảng cáo thị. Từ hai năm nay, mọi tin buồn, những trận thua trận hay những mạnh lệnh khắt khe đều từ nơi đó mà ra.\n\nBác thợ rèn Oát-stơ, người cũng đang đứng đó, nhìn thấy cậu và gọi to: "Đừng vội thế cháu nhé, cháu đến trường vẫn còn sớm chán!". Phrăng ngỡ bác đang nhạo báng mình nên càng ra sức chạy đến ngôi trường nhỏ của thầy Ha-men.`,
  },
  {
    type: "story",
    imageId: "chapter-3",
    label: "Chương 3",
    head: "Lớp Học Im Lặng",
    pg: 3,
    text: `Thông thường, lúc bắt đầu buổi học, tiếng ồn ào từ lớp học có thể nghe thấy tận ngoài phố. Nhưng hôm nay, mọi thứ im lặng đến đáng sợ, cả như một buổi sáng Chủ nhật.\n\nPhrăng ngượng nghịu bước vào lớp giữa sự tĩnh lặng đó. Thay vì một lời quở trách nghiêm khắc như mọi khi, thầy Ha-men lại nhìn cậu với ánh mắt dịu dàng và nói khẽ: "Phrăng, vào chỗ nhanh lên con, lớp học sắp bắt đầu mà không có con."`,
  },
  {
    type: "story",
    imageId: "chapter-4",
    label: "Chương 4",
    head: "Tin Chấn Động",
    pg: 4,
    text: `Khi đã ngồi vào chỗ, Phrăng mới nhận ra thầy Ha-men đang mặc bộ lễ phục đẹp nhất của mình: chiếc áo rơ-đanh-gốt màu xanh lục, điểm lá sen và chiếc mũ lụa đen thêu.\n\nĐây là bộ đồ thầy chỉ mặc vào những dịp trang trọng. Thầy bước lên bục, giọng thầy run run thông báo một tin chấn động: "Các con ơi, đây là lần cuối cùng thầy dạy các con. Lệnh từ Béc-lin đã đến, từ nay chỉ được dạy tiếng Đức ở các trường vùng An-dát và Lo-ren."`,
  },
  {
    type: "story",
    imageId: "chapter-5",
    label: "Chương 5",
    head: "Người Dân Làng",
    pg: 5,
    text: `Phrăng bàng hoàng nhìn xuống cuối lớp. Cậu ngạc nhiên thấy những người dân làng cũng có mặt, ngồi lặng lẽ trên những hàng ghế vốn thường để trống. Có cụ Hao-dơ đã ngoài bảy mươi, bác đầu thợ và nhiều người khác nữa.\n\nCụ Hao-dơ đang nâng niu một cuốn sách tập đọc vốn cũ kỹ đã sờn mép trên đầu gối, đôi mắt cụ buồn rầu nhìn vào những dòng chữ mà cụ đã học từ thuở thiếu thời.`,
  },
  {
    type: "story",
    imageId: "chapter-6",
    label: "Chương 6",
    head: "Sự Hối Hận",
    pg: 6,
    text: `Những lời của thầy như một tiếng sét đánh ngang tai Phrăng. Cậu hối hận vì đã lãng phí quá nhiều thời gian để chơi bời thay vì học tập. Những cuốn ngữ pháp, những bài học lịch sử mà trước đây cậu thấy nặng nề như những kẻ thù, giờ đây bỗng trở nên thân thiết như những người bạn cũ sắp phải chia xa.\n\nCậu nhận ra mình yêu tiếng mẹ đẻ biết bao, cái ngôn ngữ mà cậu chưa kịp học cho thành thục.`,
  },
  {
    type: "story",
    imageId: "chapter-7",
    label: "Chương 7",
    head: "Bài Giảng Cuối Cùng",
    pg: 7,
    text: `Thầy Ha-men bắt đầu giảng giải về tiếng Pháp. Thầy nói rằng đó là ngôn ngữ hay nhất thế giới, trong sáng nhất và vững vàng nhất.\n\nThầy bảo rằng khi một dân tộc rơi vào vòng nô lệ, chừng nào họ vẫn giữ vững tiếng nói của mình thì chẳng khác gì nắm được chìa khóa của chốn lao tù. Cả lớp lặng nghe say mê, nuốt từng lời giảng của thầy như thể đó là những di sản quý báu nhất.`,
  },
  {
    type: "story",
    imageId: "chapter-8",
    label: "Chương 8",
    head: "Bài Tập Viết",
    pg: 8,
    text: `Đến giờ viết bài, thầy Ha-men đã chuẩn bị cho mỗi học sinh một tờ mẫu mới tinh, trên đó viết bằng chữ viết tay tuyệt đẹp: "Pháp, An-dát, Pháp, An-dát".\n\nCả lớp im phăng phắc, chỉ nghe thấy tiếng ngòi bút sột soạt trên giấy. Phrăng và người bạn ngồi cạnh là Lu-xi-êng đều cúi đầu chăm chú, nắn nót từng nét chữ như thể đang khắc ghi linh hồn của quê hương lên một giấy trắng.`,
  },
  {
    type: "story",
    imageId: "chapter-9",
    label: "Chương 9",
    head: "Tiếng Chuông Điểm Giờ",
    pg: 9,
    text: `Bỗng nhiên, tiếng chuông nhà thờ điểm mười hai giờ vang lên, rồi tiếng kèn của quân lính Phổ đi tập trận vọng chói tai dưới cửa sổ.\n\nThầy Ha-men đứng dậy trên bục giảng, mặt thầy tái nhất vì xúc động. Thầy định nói điều gì đó, "Các bạn, tôi... tôi...", nhưng nỗi nghẹn ngào khiến thầy không thốt nên lời. Thầy quay lại phía bảng, cầm một viên phấn và dồn hết sức lực cuối cùng của mình.`,
  },
  {
    type: "story",
    imageId: "chapter-10",
    label: "Kết Thúc",
    head: "Niềm Tự Hào",
    pg: 10,
    text: `Thầy viết thật to những chữ có thể chiếm hết cả bảng, từng nét chữ mạnh mẽ và dứt khoát: "NƯỚC PHÁP MUÔN NĂM!".\n\nViết xong, thầy đứng đó, đầu tựa vào tường, không nói thêm một lời nào mà chỉ giơ tay ra hiệu cho cả lớp: "Kết thúc rồi... đi đi thôi!".\n\nPhrăng nhìn theo bóng lưng của thầy, hiểu rằng dù trường học có thay đổi, nhưng ngọn lửa yêu nước và tiếng mẹ đẻ sẽ mãi cháy trong tim mỗi người. `,
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
  const s = document.getElementById("spread");
  const p = PAGES[idx];

  if (p.type === "cover") {
    s.innerHTML = `
      <div class="cover-page" style="width:100%">
        <div class="bg-circle" style="width:300px;height:300px;top:-80px;right:-80px"></div>
        <div class="bg-circle" style="width:200px;height:200px;bottom:-50px;left:-50px"></div>
        <div class="bg-circle" style="width:90px;height:90px;top:42%;left:12%"></div>
         
        <div class="cover-emoji">${p.emoji}</div>
        <h2>${p.title}</h2>
        <p class="cover-subtitle">${p.sub}</p>
        <p class="cover-author">${p.author}</p>
        <button class="cover-btn" onclick="turn(1)">Bắt đầu đọc &rarr;</button>
      </div>`;
  } else {
    const textHtml = p.text.replace(/\n\n/g, "<br><br>");
    s.innerHTML = `
      <div class="spine-line"></div>
      <div class="image-page">
        <div class="page-num-badge">Trang ${p.pg} / ${PAGES.length - 1}</div>
        

        <div class="image-container ${p.imageId}"></div>       
      </div>
      <div class="text-page">
        <div>
          
          <p class="dropcap">${textHtml}</p>
        </div>
        <div class="text-footer">
          <span class="page-num-txt">— ${p.pg} —</span>
          <div class="spine-dots"><span></span><span></span><span></span></div>
          <span class="page-num-txt">Văn Học Thế Giới ✦</span>
        </div>
      </div>`;
  }

  document.getElementById("navInfo").textContent =
    cur === 0 ? "Bìa sách" : `${cur} / ${PAGES.length - 1}`;
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
  const s = document.getElementById("spread");
  s.classList.add("turning");
  setTimeout(() => {
    cur = idx;
    render(cur);
    s.classList.remove("turning");
  }, 340);
}

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") turn(1);
  if (e.key === "ArrowLeft" || e.key === "ArrowUp") turn(-1);
});

// Touch/swipe support
let tx = 0;
document.addEventListener("touchstart", (e) => {
  tx = e.touches[0].clientX;
});
document.addEventListener("touchend", (e) => {
  const dx = tx - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 50) turn(dx > 0 ? 1 : -1);
});

// Initialize
render(0);

console.log("📚 Storybook loaded successfully!");
console.log("💡 Để thêm hình ảnh, xem hướng dẫn trong file CSS và JS");
