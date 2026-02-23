

const stories = [
  {
        title: "Buổi Học Cuối Cùng",
        author: "An-phông-xơ Đô-đê",
        desc: "Câu chuyện cảm động về tình yêu quê hương và nỗi đau mất mát qua đôi mắt của cậu bé Franz trong buổi học tiếng Pháp cuối cùng.",
        emoji: "📕",
        color: "pink",
        link: "http://127.0.0.1:5501/Truy%E1%BB%87n/collection-Bu%E1%BB%95i%20h%E1%BB%8Dc%20cu%E1%BB%91i%20c%C3%B9ng/story%20book-Bu%E1%BB%95i%20h%E1%BB%8Dc%20cu%E1%BB%91i%20c%C3%B9ng/buoi-hoc-cuoi-cung.html",
        date: "14/02/2026"
    },
    
   
    
];



let currentStories = [...stories];
let currentView = 'grid';

// Initialize
function init() {
    renderBooks();
    updateStats();
    setupEventListeners();
    
    console.log('%c📚 Kệ Sách Đã Sẵn Sàng!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log(`📖 Tổng số truyện: ${stories.length}`);
    console.log('%c💡 Nhấn nút ? để xem hướng dẫn thêm truyện', 'color: #764ba2; font-size: 14px;');
}

// Render books
function renderBooks() {
    const container = document.getElementById('booksContainer');
    const emptyState = document.getElementById('emptyState');
    
    if (currentStories.length === 0) {
        container.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }
    
    container.style.display = 'grid';
    emptyState.style.display = 'none';
    
    container.innerHTML = currentStories.map((story, index) => `
        <div class="book-card ${currentView === 'list' ? 'list-view-item' : ''}" 
             onclick="goToStory('${story.link}')"
             style="animation: fadeInUp 0.6s ease ${index * 0.1}s both">
            <div class="book-spine ${story.color}">
                <div class="book-emoji">${story.emoji}</div>
            </div>
            <div class="book-info">
                <h3 class="book-title">${story.title}</h3>
                <p class="book-author">${story.author}</p>
                <p class="book-desc">${story.desc}</p>
                <div class="book-meta">
                    <span class="book-date">📅 ${story.date}</span>
                    <div class="read-arrow">→</div>
                </div>
            </div>
        </div>
    `).join('');
}

// Navigate to story
function goToStory(link) {
    window.location.href = link;
}

// Update statistics
function updateStats() {
    document.getElementById('totalBooks').textContent = stories.length;
}

// Setup event listeners
function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    
    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.toLowerCase().trim();
        
        if (keyword === '') {
            currentStories = [...stories];
            clearBtn.style.display = 'none';
        } else {
            currentStories = stories.filter(story =>
                story.title.toLowerCase().includes(keyword) ||
                story.author.toLowerCase().includes(keyword) ||
                story.desc.toLowerCase().includes(keyword)
            );
            clearBtn.style.display = 'block';
        }
        
        renderBooks();
    });
    
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        currentStories = [...stories];
        clearBtn.style.display = 'none';
        renderBooks();
    });
    
    // View toggle
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const booksGrid = document.querySelector('.books-grid');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentView = btn.dataset.view;
            
            if (currentView === 'list') {
                booksGrid.classList.add('list-view');
            } else {
                booksGrid.classList.remove('list-view');
            }
            
            renderBooks();
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

