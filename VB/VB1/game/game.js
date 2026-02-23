/* ════════════════════════════════════════
   game.js  –  7 Mảnh Ghép Kiến Thức
   ════════════════════════════════════════ */

/* ─── DỮ LIỆU NỘI DUNG CÁC MẢNH GHÉP ───
   Để chỉnh sửa nội dung: tìm đúng object
   theo chỉ số (0 = Mảnh 1, …, 6 = Mảnh 7)
   rồi sửa các trường: icon, color, title,
   sub, và body (HTML).
   ─────────────────────────────────────── */
const CARDS = [

  /* ── Mảnh 1 ── */
  {
    icon:  '🗺️',
    color: '#FFD6E0',
    num:   'Mảnh 1',
    title: 'Tóm tắt câu chuyện',
    sub:   'Hành trình đi lấy mật của An và Cò',
    body: `
      <div class="content-block">
        <p>Câu chuyện kể về chuyến đi lấy mật ong của <strong>An</strong> cùng
           <strong>Cò</strong> – người bạn miền Nam quen thuộc với rừng rậm
           và thiên nhiên hoang dã.</p>
        <p>Lần đầu tiên trải nghiệm thế giới hoang dã, An vừa ngạc nhiên,
           vừa hồi hộp đối diện với những nguy hiểm bất ngờ.</p>
      </div>
      <div class="highlight-box">
        <p>🌿 Nhưng chính chuyến đi đó đã giúp An cảm nhận được
           <strong>sự hào sảng</strong>, <strong>nghĩa tình</strong> đặc trưng
           của con người Nam Bộ – một vùng đất bao la, trù phú.</p>
      </div>
      <div class="content-block">
        <p>Chuyến đi trở thành <strong>dấu mốc trưởng thành</strong> của An –
           từ một cậu bé thành phố bỡ ngỡ đến người thực sự hiểu và yêu
           thiên nhiên hoang sơ Nam Bộ.</p>
      </div>
    `
  },

  /* ── Mảnh 2 ── */
  {
    icon:  '👁️',
    color: '#C9F0FF',
    num:   'Mảnh 2',
    title: 'Hệ thống điểm nhìn',
    sub:   '3 góc nhìn – 1 bức tranh Nam Bộ',
    body: `
      <div class="compare-grid">
        <div class="compare-col">
          <h4>🧒 An</h4>
          <ul>
            <li>Góc nhìn "người mới đến"</li>
            <li>Ngạc nhiên &amp; tò mò</li>
            <li>Thể hiện sự khám phá</li>
          </ul>
        </div>
        <div class="compare-col">
          <h4>🌾 Cò</h4>
          <ul>
            <li>Góc nhìn "dân bản địa"</li>
            <li>Tự tin, rành rọt mọi thứ</li>
            <li>Dẫn đường, giải thích</li>
          </ul>
        </div>
      </div>
      <div class="content-block">
        <p><strong>Người kể chuyện</strong> hòa trộn linh hoạt hai điểm nhìn,
           dẫn dắt mạch truyện một cách tự nhiên, giúp thiên nhiên và con
           người Nam Bộ hiện lên đầy màu sắc.</p>
      </div>
      <div class="arrow-note">
        <span class="arrow-icon">→</span>
        <span>Điểm nhìn <strong>quan trọng nhất: An</strong> – vì hành trình
              trưởng thành của cậu gắn liền với mọi sự việc trong câu chuyện.</span>
      </div>
    `
  },

  /* ── Mảnh 3 ── */
  {
    icon:  '💬',
    color: '#D4F7DC',
    num:   'Mảnh 3',
    title: 'Nghệ thuật đối thoại',
    sub:   'Lời nói làm nổi bật cá tính',
    body: `
      <div class="tag-row">
        <span class="tag">An</span>
        <span class="tag alt">Cò</span>
        <span class="tag">Tía nuôi</span>
        <span class="tag alt">Má nuôi</span>
      </div>
      <div class="content-block">
        <p>Đối thoại giữa các nhân vật giúp <strong>khắc họa tính cách</strong>
           từng người một cách rõ nét, không cần phải kể lể dài dòng.</p>
        <p>Lời thoại mang lại <strong>sự gần gũi, sinh động</strong> – tái
           hiện đời sống Nam Bộ chân thật như đang xem phim.</p>
      </div>
      <div class="highlight-box">
        <p>✨ Qua từng câu nói, người đọc cảm nhận rõ sự <strong>hào sảng,
           dí dỏm, thân tình</strong> – những nét đặc trưng của cư dân phương
           Nam không thể lẫn vào đâu được.</p>
      </div>
    `
  },

  /* ── Mảnh 4 ── */
  {
    icon:  '🎨',
    color: '#FFF3C4',
    num:   'Mảnh 4',
    title: 'Kết hợp kể và tả',
    sub:   'Cảnh – người hòa vào nhau',
    body: `
      <div class="content-block">
        <p>Nghệ thuật <strong>xen kẽ kể sự việc với miêu tả cảnh</strong>
           tạo nên nhịp điệu tự nhiên, không gây nhàm chán.</p>
      </div>
      <div class="highlight-box">
        <p>🌲 Thiên nhiên Nam Bộ được khắc họa qua những hình ảnh sống động:<br>
           rừng rậm · ong mật · sông nước · tiếng chim hót…</p>
      </div>
      <div class="content-block">
        <p>Nhờ đó, cuộc phiêu lưu của An mang <strong>phong vị rất riêng</strong>:</p>
        <p>🌏 Bao la – Hoang dã – Trù phú – Đầy sức sống</p>
      </div>
      <div class="arrow-note">
        <span class="arrow-icon">🎯</span>
        <span>Sự kết hợp này khiến câu chuyện không chỉ là phiêu lưu mà còn
              là một <strong>bức tranh phong cảnh Nam Bộ</strong> đẹp mê hồn.</span>
      </div>
    `
  },

  /* ── Mảnh 5 ── */
  {
    icon:  '⚖️',
    color: '#E8D5FF',
    num:   'Mảnh 5',
    title: 'So sánh Cò và An',
    sub:   'Hai tính cách – một hành trình',
    body: `
      <div class="content-block">
        <p><strong>Điểm giống nhau:</strong> Cả hai đều ham khám phá, gan dạ,
           trong sáng – tiêu biểu cho tuổi thơ hồn nhiên, dũng cảm.</p>
      </div>
      <div class="compare-grid">
        <div class="compare-col">
          <h4>🧒 An</h4>
          <ul>
            <li>Còn bỡ ngỡ</li>
            <li>Lạ lẫm với rừng</li>
            <li>Đang học hỏi</li>
            <li>Trưởng thành qua chuyến đi</li>
          </ul>
        </div>
        <div class="compare-col">
          <h4>🌾 Cò</h4>
          <ul>
            <li>Bản lĩnh vững chắc</li>
            <li>Giàu kinh nghiệm</li>
            <li>Hiểu thiên nhiên sâu sắc</li>
            <li>Tự tin, chủ động</li>
          </ul>
        </div>
      </div>
      <div class="arrow-note">
        <span class="arrow-icon">→</span>
        <span>Sự đối lập này làm nổi bật chủ đề:
              <strong>Thiên nhiên nuôi dưỡng con người</strong> và giúp trẻ nhỏ
              dần trưởng thành qua những trải nghiệm thực tế.</span>
      </div>
    `
  },

  /* ── Mảnh 6 ── */
  {
    icon:  '🌿',
    color: '#FFE5CC',
    num:   'Mảnh 6',
    title: 'Chủ đề văn bản',
    sub:   'Vẻ đẹp Nam Bộ & hành trình lớn lên',
    body: `
      <div class="tag-row">
        <span class="tag">Thiên nhiên Nam Bộ</span>
        <span class="tag alt">Con người</span>
        <span class="tag">Trưởng thành</span>
      </div>
      <div class="content-block">
        <p>🌴 <strong>Vẻ đẹp hoang sơ – trù phú</strong> của thiên nhiên
           phương Nam – nơi con người và tự nhiên sống hòa hợp.</p>
        <p>💪 <strong>Tính cách người Nam Bộ:</strong> gan góc, hào sảng,
           nghĩa tình – không hề tô vẽ mà rất thật.</p>
        <p>🌱 <strong>Hành trình trưởng thành</strong> tinh thần của An
           trong cuộc phiêu lưu đáng nhớ.</p>
      </div>
      <div class="highlight-box">
        <p>🏞️ Một bức tranh Nam Bộ sinh động – vừa giàu
           <strong>chất sử thi</strong> hùng tráng, vừa đậm
           <strong>chất đời thường</strong> gần gũi.</p>
      </div>
    `
  },

  /* ── Mảnh 7 ── */
  {
    icon:  '✨',
    color: '#D0ECFF',
    num:   'Mảnh 7',
    title: 'Ý nghĩa & thông điệp',
    sub:   'Bài học sau chuyến đi',
    body: `
      <div class="content-block">
        <p>📖 Câu chuyện mở ra hiểu biết về <strong>thiên nhiên Nam Bộ</strong>
           đa dạng, mênh mông, ẩn chứa bao điều kỳ thú.</p>
        <p>🤝 Con người nơi đây <strong>giàu nghĩa tình</strong>, mạnh mẽ
           nhưng hiền hòa, luôn đón nhận người khác bằng tấm lòng rộng mở.</p>
      </div>
      <div class="highlight-box">
        <p>🌱 Thiên nhiên không chỉ đẹp mà còn là
           <strong>môi trường rèn luyện</strong> để thế hệ trẻ trưởng thành
           về nhận thức, bản lĩnh và tâm hồn.</p>
      </div>
      <div class="arrow-note">
        <span class="arrow-icon">💡</span>
        <span>Tác phẩm nhắc nhở ta biết <strong>trân trọng thiên nhiên</strong>
              và những <strong>giá trị sống giản dị</strong> – điều đang dần
              bị lãng quên trong cuộc sống hiện đại.</span>
      </div>
    `
  }

];

/* ─── TRẠNG THÁI ─── */
const opened = new Set(); // các index đã mở
let current  = 0;         // index modal đang hiện

/* ─── MỞ MODAL ─── */
function openModal(idx) {
  current = idx;
  const d = CARDS[idx];

  // Đánh dấu card đã mở
  if (!opened.has(idx)) {
    opened.add(idx);
    document.querySelector(`.card[data-id="${idx}"]`).classList.add('opened');
    updateProgress();
  }

  // Điền nội dung vào modal
  document.getElementById('modalIcon').textContent        = d.icon;
  document.getElementById('modalIconWrap').style.background = d.color;
  document.getElementById('modalNum').textContent         = d.num;
  document.getElementById('modalTitle').textContent       = d.title;
  document.getElementById('modalSub').textContent         = d.sub;
  document.getElementById('modalBody').innerHTML          = d.body;

  // Bật / tắt nút điều hướng
  document.getElementById('btnPrev').disabled = (idx === 0);
  document.getElementById('btnNext').disabled = (idx === CARDS.length - 1);

  // Hiện overlay
  document.getElementById('overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ─── ĐÓNG MODAL ─── */
function closeModal() {
  document.getElementById('overlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* Đóng khi click ngoài modal */
function closeOnOverlay(e) {
  if (e.target === document.getElementById('overlay')) closeModal();
}

/* ─── ĐIỀU HƯỚNG GIỮA CÁC MẢNH ─── */
function navigate(dir) {
  const next = current + dir;
  if (next >= 0 && next < CARDS.length) openModal(next);
}

/* ─── CẬP NHẬT THANH TIẾN ĐỘ ─── */
function updateProgress() {
  const count = opened.size;
  const pct   = (count / CARDS.length) * 100;

  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent =
    `${count} / ${CARDS.length} mảnh ghép đã mở`;

  // Hiện banner chúc mừng khi mở đủ tất cả
  if (count === CARDS.length) {
    setTimeout(() => {
      const banner = document.getElementById('completionBanner');
      banner.classList.add('show');
      banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 400);
  }
}

/* ─── PHÍM TẮT ─── */
document.addEventListener('keydown', e => {
  const isOpen = document.getElementById('overlay').classList.contains('active');
  if (!isOpen) return;

  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowLeft')  navigate(-1);
  if (e.key === 'ArrowRight') navigate(1);
});
