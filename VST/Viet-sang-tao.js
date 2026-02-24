// ==========================================
// DANH SÁCH TÁC PHẨM SÁNG TẠO
// ==========================================
// Copy đoạn này để thêm tác phẩm mới:
/*
{
    title: "Tên Tác Phẩm",
    author: "Tên Tác Giả",
    desc: "Mô tả ngắn về tác phẩm...",
    icon: "📝",
    color: "sunny",      // sunny, amber, mint, lavender, peach, coral
    genre: "tho",        // tho, truyen-ngan, tuy-but, van-xuat, kich
    genreLabel: "Thơ",   // Nhãn hiển thị
    link: "file.html",
    date: "15/02/2026"
}
*/

const works = [
    {
        title: "Xuân Về",
        author: "10A1",
        desc: "Cảm nhận về bài thơ \"Xuân về\" — bức tranh thủy mặc tuyệt đẹp về làng quê Việt Nam những ngày đầu năm qua ngòi bút tài hoa của Nguyễn Bính.",
        icon: "🌸",
        color: "coral",
        genre: "bieu-cam",
        genreLabel: "Cảm Thụ Văn Học",
        link: "https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/VST/Bai/xuan-ve/xuan-ve.html",
        date: "14/02/2026"
    },
    {
        title: "Giang",
        author: "10A1",
        desc: "Phân tích nội dung và những hình thức nghệ thuật đặc sắc của truyện ngắn Giang của nhà văn Bảo Ninh — câu chuyện về tình yêu tuổi trẻ trong sáng, chân thành giữa hoàn cảnh chiến tranh khốc liệt.",
        icon: "🕊️",
        color: "amber",
        genre: "nghi-luan",
        genreLabel: "Nghị Luận Văn Học",
        link: "https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/VST/Bai/giang/giang-vst.html",
        date: "15/02/2026"
    },
    {
        title: "Đất rừng phương Nam",
        author: "10A1",
        desc: "Phân tích nội dung và những hình thức nghệ thuật đặc sắc của đoạn trích \"Đi lấy mật\" trong tiểu thuyết Đất rừng phương Nam của nhà văn Đoàn Giỏi.",
        icon: "🌿",
        color: "green",
        genre: "nghi-luan",
        genreLabel: "Nghị Luận Văn Học",
        link: "https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/VST/Bai/dat-rung-phuong-nam/dat-rung-phuong-nam.html",
        date: "16/02/2026"
    },
     {
        title: "Buổi Học Cuối Cùng",
        author: "10A1",
        desc: "Cảm nhận sâu sắc về văn bản mang đậm sắc thương nhớ. Từng con chữ sau đây đều là những tiếng nói trái tim quý giá đúc kết được sau khi đọc những dòng cảm xúc mà tác phảm \"Buổi Học Cuối Cùng\".",
        icon: "📖",
        color: "blue",
        genre: "bieu-cam",
        genreLabel: "Cảm Thụ Văn Học",
        link: "https://nhatnguyenle2010-wq.github.io/Tu-Sach-10A1.github.io/VST/Bai/tieng-noi-dan-toc/tieng-noi-dan-toc.html",
        date: "16/02/2026"
    }
    
    // THÊM TÁC PHẨM MỚI VÀO ĐÂY
    // Nhớ thêm dấu phẩy (,) ở cuối tác phẩm phía trên!
    
];

// ==========================================
// CODE XỬ LÝ - KHÔNG CẦN SỬA
// ==========================================

let currentWorks = [...works];
let currentView = 'grid';
let currentGenre = 'all';

// Initialize
function init() {
    renderWorks();
    updateStats();
    setupEventListeners();
    
    console.log('%c🎨 Góc Viết Sáng Tạo Đã Sẵn Sàng!', 'color: #f6d365; font-size: 20px; font-weight: bold;');
    console.log(`📝 Tổng số tác phẩm: ${works.length}`);
    console.log('%c💡 Mở file creative-writing.js để thêm tác phẩm mới', 'color: #fda085; font-size: 14px;');
}

// Render works
function renderWorks() {
    const container = document.getElementById('worksContainer');
    const emptyState = document.getElementById('emptyState');
    
    if (currentWorks.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    container.style.display = 'grid';
    emptyState.style.display = 'none';
    
    container.innerHTML = currentWorks.map((work, index) => `
        <div class="work-card ${currentView === 'list' ? 'list-view-item' : ''}" 
             data-genre="${work.color}"
             onclick="goToWork('${work.link}')"
             style="animation: fadeInUp 0.6s ease ${index * 0.1}s both">
            <div class="work-header ${work.color}">
                <div class="work-icon">${work.icon}</div>
                <div class="genre-badge">${work.genreLabel}</div>
            </div>
            <div class="work-content">
                <h3 class="work-title">${work.title}</h3>
                <p class="work-author">${work.author}</p>
                <p class="work-desc">${work.desc}</p>
                <div class="work-meta">
                    <span class="work-date">📅 ${work.date}</span>
                    <div class="read-arrow">→</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Navigate to work
function goToWork(link) {
    window.location.href = link;
}

// Update statistics
function updateStats() {
    document.getElementById('totalWorks').textContent = works.length;
}

// Filter and search
function filterWorks() {
    const searchKeyword = document.getElementById('searchInput').value.toLowerCase().trim();
    
    currentWorks = works.filter(work => {
        // Filter by genre
        const genreMatch = currentGenre === 'all' || work.genre === currentGenre;
        
        // Filter by search keyword
        const searchMatch = searchKeyword === '' || 
            work.title.toLowerCase().includes(searchKeyword) ||
            work.author.toLowerCase().includes(searchKeyword) ||
            work.desc.toLowerCase().includes(searchKeyword) ||
            work.genreLabel.toLowerCase().includes(searchKeyword);
        
        return genreMatch && searchMatch;
    });
    
    renderWorks();
}

// Setup event listeners
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    
    searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim() !== '') {
            clearBtn.style.display = 'block';
        } else {
            clearBtn.style.display = 'none';
        }
        filterWorks();
    });
    
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        filterWorks();
    });
    

    // View toggle
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const worksGrid = document.querySelector('.works-grid');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentView = btn.dataset.view;
            
            if (currentView === 'list') {
                worksGrid.classList.add('list-view');
            } else {
                worksGrid.classList.remove('list-view');
            }
            
            renderWorks();
        });
    });
}

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

