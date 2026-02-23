
const PAGES = [
  // ===== BÌA TRƯỚC =====
  {
    type: "cover",
    imageId: "cover-front",  
    position: "front"
  },
  
  // ===== CHƯƠNG 1 =====
  {
    type: "story",
    imageId: "chapter-1",
    label: "Chương 1",
    
    pg: 1,
    text: `Buổi sáng ở rừng U Minh thật kỳ diệu. Không khí trong vắt như thủy tinh, mang theo hơi lạnh của sương đêm còn đọng lại. An đứng giữa rừng tràm, hít hà mùi hương ngan ngát. Những giọt sương sớm long lanh như những hạt ngọc đậu trên lá tràm, phản chiếu ánh bình minh lấp lánh. Cả khu rừng như vừa thức giấc sau một giấc ngủ dài, tràn đầy sức sống và vẻ đẹp nguyên sơ.

`,
  },
  
  // ===== CHƯƠNG 2 =====
  {
    type: "story",
    imageId: "chapter-2",
    label: "Chương 2",
   
    pg: 2,
    text: `Hôm nay là một ngày đặc biệt, An được theo tía nuôi và Cò đi "ăn ong". Tía nuôi đi trước, vai quẩy chiếc túi da beo, tay cầm cây chà gạc bén ngót. Theo sau là Cò, cậu bé nhanh nhẹn đội chiếc thúng đựng đồ ăn trên đầu, bước đi thoăn thoắt. An cùng con chó Luốc háo hức tiến sâu vào giữa rừng xanh, bắt đầu một cuộc phiêu lưu đầy thú vị giữa thiên nhiên hoang dã.`,
  },
  
  // ===== CHƯƠNG 3 =====
  {
    type: "story",
    imageId: "chapter-3",
    label: "Chương 3",
    head: "Tiêu đề Chương 3",
    pg: 3,
    text: `Đây là lần đầu tiên An được đi lấy mật ong thực tế. Trong lòng cậu tràn ngập sự háo hức và tò mò. An thầm so sánh những gì mình đã đọc trong sách vở với vẻ hùng vĩ của rừng già trước mắt. Những hàng cây cao vút, tiếng lá xào xạc và hơi thở của đất rừng khiến mọi kiến thức cũ kỹ trở nên sống động và mới mẻ lạ thường. Luốc thì cứ chạy nhảy quanh quẩn, cái đuôi ngoáy tít vì vui sướng.`,
  },
  
  // ===== CHƯƠNG 4 =====
  {
    type: "story",
    imageId: "chapter-4",
    label: "Chương 4",
    head: "Tiêu đề Chương 4",
    pg: 4,
    text: `Sau một quãng đường dài, An bắt đầu thấy thấm mệt. Đôi chân cậu trùng xuống dưới cái nắng bắt đầu gắt hơn. Cả đoàn dừng chân nghỉ dưới gốc một cây ngải đại thụ tỏa bóng mát rượi. Trong khi An mệt nhoài ngồi bệt xuống rễ cây, Cò vẫn trông rất khỏe khoắn và tràn đầy năng lượng. Tía nuôi lấy ống tẩu ra hút thuốc, nheo mắt nhìn những tán lá rồi bảo: "Thôi, dừng lại nghỉ một lát. Bao giờ thằng An đỡ mệt, ăn cơm xong hãng đi!" ` ,
  },
  
  // ===== CHƯƠNG 5 =====
  {
    type: "story",
    imageId: "chapter-5",
    label: "Chương 5",
    head: "Tiêu đề Chương 5",
    pg: 5,
    text: `Cò lém lỉnh nhìn An rồi đố: "Đố mày thấy con ong mật nằm đâu đấy?". An ngước mắt nhìn lên, nhưng ban đầu cậu chỉ thấy những con ruồi xanh và chuồn chuồn bay vương vãi. Phải đến khi nghe tía nuôi hướng dẫn cách quan sát, An mới nhận ra những "sứ giả bình minh" – những con ong mật bay thành từng xâu chuỗi dài như những sợi dây chuyền vàng lấp lánh dưới nắng, dẫn lối đến nơi có mật ngọt.`,
  },
  
  {
    type: "story",
    imageId: "chapter-6",
    label: "Chương 6",
    head: "Tiêu đề Chương 6",
    pg: 6,
    text: `Nắng lên cao, rừng tràm bừng sáng rực rỡ. Tiếng chim hót râm ran khắp nơi hòa cùng hương tràm thơm ngây ngất. An dừng lại trước một bụi cây, mắt chữ O miệng chữ Ô khi thấy một con kỳ nhông đang đổi màu. Nó từ màu xanh lá cây bỗng chốc biến sang vàng, rồi đỏ tím, trông như một viên ngọc quý giữa thiên nhiên xanh ngắt. Thế giới tự nhiên ở đây sống động và kỳ ảo vượt xa trí tưởng tượng của cậu.`,
  },

  {
    type: "story",
    imageId: "chapter-7",
    label: "Chương 7",
    head: "Tiêu đề Chương 7",
    pg: 7,
    text: `Cả đoàn đi tới một trảng chim lớn. Hàng nghìn con chim đủ màu sắc bay lượn rợp cả bầu trời, tiếng cánh vỗ xào xạc như gió thổi. An thốt lên khen ngợi vẻ đẹp thần tiên này. Cò nghe vậy liền cười, tự hào kể cho An nghe về những "sân chim" khổng lồ hơn nữa nằm sâu trong rừng, nơi có hàng triệu con chim làm tổ, biến cả một vùng thành một thế giới lông vũ đa sắc.`,
  },

    {
    type: "story",
    imageId: "chapter-8",
    label: "Chương 8",
    head: "Tiêu đề Chương 8",
    pg: 8,
    text: `Trong lúc đi, An nhớ lại những lời má nuôi đã dạy về nghề gác kèo ong. Để ong về đóng tổ, người thợ phải biết cách chọn nhánh tràm đúng chuẩn, quan sát hướng gió và đặc biệt là cách "rửa" sạch mùi sắt của dao trên kèo. Đó là một nghệ thuật lâu đời, đòi hỏi sự kiên nhẫn và hiểu biết sâu sắc về tập tính của loài ong cũng như sự chuyển mình của rừng tràm.`,
  },

    {
    type: "story",
    imageId: "chapter-9",
    label: "Chương 9",
    head: "Tiêu đề Chương 9",
    pg: 9,
    text: `Cuối cùng cũng đến lúc thu hoạch mật. Tía nuôi đốt một bó lá để tạo khói "a nguỳ" xua ong đi. Khi thấy Cò định xua đuổi những con ong một cách thô bạo, tía liền nhắc nhở: "Đừng! Không nên giết ong, con à!". Cò không may bị một con ong đốt vào tai, đau đến mức nhăn mặt nhưng vẫn cười hì hì. An lo lắng nhìn theo trong khi tía nuôi khéo léo lấy ra những mảng sáp trắng tinh, chứa đầy mật ong vàng óng ánh như mật mía.`,
  },

    {
    type: "story",
    imageId: "chapter-10",
    label: "Chương 10",
    head: "Tiêu đề Chương 10",
    pg: 10,
    text: `Chuyến đi kết thúc với niềm vui bội thu: năm mươi kèo ong đầy ắp mật. Trên đường về, An cảm thấy lòng mình tràn ngập niềm tự hào. Cậu suy ngẫm về nghề gác kèo độc đáo của vùng U Minh. Từ thời La Mã, Ai Cập hay Mễ Tây Cơ, người ta đã biết nuôi ong, nhưng cách gác kèo nương tựa hoàn toàn vào thiên nhiên mà không làm hại đến rừng xanh như ở đây thật là duy nhất. An tự hứa sẽ luôn trân trọng và bảo vệ vẻ đẹp hoang sơ của đất rừng phương Nam này.`,
  },

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
  const s = document.getElementById("spread");
  const p = PAGES[idx];

  if (p.type === "cover") {
    const isBack = p.position === "back";
    const btnText = isBack ? "Về đầu &larr;" : "Bắt đầu đọc &rarr;";
    const btnAction = isBack ? "goTo(0)" : "turn(1)";
    
    s.innerHTML = `
      <div class="cover-page ${p.imageId}" style="width:100%">
        <div class="bg-circle" style="width:300px;height:300px;top:-80px;right:-80px"></div>
        <div class="bg-circle" style="width:200px;height:200px;bottom:-50px;left:-50px"></div>
        <div class="bg-circle" style="width:90px;height:90px;top:42%;left:12%"></div>
        <div class="cover-overlay"></div>
        <div class="cover-content">
          
         
          <button class="cover-btn" onclick="${btnAction}">${btnText}</button>
        </div>
      </div>`;
  } else {
    const textHtml = p.text.replace(/\n\n/g, "<br><br>");
    s.innerHTML = `
      <div class="spine-line"></div>
      <div class="image-page">
        <div class="page-num-badge">Trang ${p.pg} / ${PAGES.length - 2}</div>
        
        
        <div class="image-container ${p.imageId}">
          
        </div>
        
      </div>
      <div class="text-page">
        <div>
          
          <p class="dropcap">${textHtml}</p>
        </div>
        <div class="text-footer">
          <span class="page-num-txt">— ${p.pg} —</span>
          <div class="spine-dots"><span></span><span></span><span></span></div>
          <span class="page-num-txt">Tủ Sách 10A1 ✦</span>
        </div>
      </div>`;
  }


  let navText;
  if (cur === 0) {
    navText = "Bìa trước";
  } else if (cur === PAGES.length - 1) {
    navText = "Bìa sau";
  } else {
    navText = `${cur} / ${PAGES.length - 2}`;
  }
  document.getElementById("navInfo").textContent = navText;
  
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


render(0);


