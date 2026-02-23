/* ═══════════════════════════════════════════
   NÓI VÀ NGHE – JavaScript
   ═══════════════════════════════════════════
   Chức năng:
   1. Scroll-reveal animation cho outline-col cards
   2. Checkbox mutual-exclusion (Đạt / Chưa đạt)
   3. Progress bar cập nhật theo số ô đã tích
   4. Lưu / khôi phục trạng thái checkbox qua localStorage
   5. Nút reset bảng kiểm
   ═══════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────
     1. SCROLL-REVEAL cho .outline-col
  ───────────────────────────────────────── */
  function initScrollReveal() {
    const targets = document.querySelectorAll('.outline-col');
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => observer.observe(el));
  }

  /* ─────────────────────────────────────────
     2. STORAGE KEY
  ───────────────────────────────────────── */
  const STORAGE_KEY = 'noi_va_nghe_checklist';

  /* ─────────────────────────────────────────
     3. LẤY TẤT CẢ CÁC CẶP CHECKBOX
        Mỗi hàng data-row có 2 checkbox:
        index 0 = "Đạt", index 1 = "Chưa đạt"
  ───────────────────────────────────────── */
  function getRows() {
    return Array.from(document.querySelectorAll('tbody tr.data-row'));
  }

  /* ─────────────────────────────────────────
     4. TÍNH TIẾN ĐỘ
  ───────────────────────────────────────── */
  function calcProgress() {
    const rows = getRows();
    let checked = 0;
    rows.forEach((row) => {
      const boxes = row.querySelectorAll('input[type="checkbox"]');
      // Row tính là "hoàn thành" khi ô Đạt hoặc Chưa đạt được tích
      if (Array.from(boxes).some((b) => b.checked)) checked++;
    });
    return { checked, total: rows.length };
  }

  /* ─────────────────────────────────────────
     5. CẬP NHẬT PROGRESS BAR
  ───────────────────────────────────────── */
  function updateProgress() {
    const bar   = document.getElementById('progressFill');
    const label = document.getElementById('progressText');
    if (!bar || !label) return;

    const { checked, total } = calcProgress();
    const pct = total ? Math.round((checked / total) * 100) : 0;

    bar.style.width = pct + '%';
    label.textContent = checked + ' / ' + total + ' tiêu chí đã đánh giá (' + pct + '%)';
  }

  /* ─────────────────────────────────────────
     6. LƯU TRẠNG THÁI VÀO localStorage
  ───────────────────────────────────────── */
  function saveState() {
    const state = [];
    getRows().forEach((row, rowIdx) => {
      const boxes = row.querySelectorAll('input[type="checkbox"]');
      state[rowIdx] = Array.from(boxes).map((b) => b.checked);
    });
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  /* ─────────────────────────────────────────
     7. KHÔI PHỤC TRẠNG THÁI TỪ localStorage
  ───────────────────────────────────────── */
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const state = JSON.parse(raw);
      getRows().forEach((row, rowIdx) => {
        if (!state[rowIdx]) return;
        const boxes = row.querySelectorAll('input[type="checkbox"]');
        boxes.forEach((box, colIdx) => {
          box.checked = !!state[rowIdx][colIdx];
        });
        highlightRow(row);
      });
    } catch (_) {}
  }

  /* ─────────────────────────────────────────
     8. HIGHLIGHT HÀNG ĐÃ ĐÁNH GIÁ
  ───────────────────────────────────────── */
  function highlightRow(row) {
    const boxes = row.querySelectorAll('input[type="checkbox"]');
    const anyChecked = Array.from(boxes).some((b) => b.checked);
    row.classList.toggle('row-done', anyChecked);
  }

  /* ─────────────────────────────────────────
     9. MUTUAL EXCLUSION: Đạt ↔ Chưa đạt
        Khi tích "Đạt" → bỏ "Chưa đạt" và ngược lại
  ───────────────────────────────────────── */
  function handleCheckboxChange(event) {
    const changedBox = event.target;
    const row = changedBox.closest('tr.data-row');
    if (!row) return;

    const boxes = Array.from(row.querySelectorAll('input[type="checkbox"]'));
    const changedIdx = boxes.indexOf(changedBox);

    if (changedBox.checked) {
      // Bỏ tích ô còn lại trong cùng hàng
      boxes.forEach((box, idx) => {
        if (idx !== changedIdx) box.checked = false;
      });
    }

    highlightRow(row);
    updateProgress();
    saveState();
  }

  /* ─────────────────────────────────────────
     10. RESET TOÀN BỘ BẢNG
  ───────────────────────────────────────── */
  function resetAll() {
    if (!confirm('Bạn có chắc muốn xóa toàn bộ đánh giá không?')) return;

    getRows().forEach((row) => {
      row.querySelectorAll('input[type="checkbox"]').forEach((b) => {
        b.checked = false;
      });
      row.classList.remove('row-done');
    });

    updateProgress();
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
  }

  /* ─────────────────────────────────────────
     11. KHỞI TẠO SỰ KIỆN CHECKBOX
  ───────────────────────────────────────── */
  function initCheckboxes() {
    document.querySelectorAll('tbody tr.data-row input[type="checkbox"]').forEach((box) => {
      box.addEventListener('change', handleCheckboxChange);
    });
  }

  /* ─────────────────────────────────────────
     12. NÚT RESET
  ───────────────────────────────────────── */
  function initResetButton() {
    const btn = document.getElementById('btnReset');
    if (btn) btn.addEventListener('click', resetAll);
  }

  /* ─────────────────────────────────────────
     13. KHỞI ĐỘNG
  ───────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initCheckboxes();
    initResetButton();
    loadState();
    updateProgress();
  });
})();
