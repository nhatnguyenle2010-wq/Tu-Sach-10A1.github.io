// Intersection Observer — kích hoạt animation khi cuộn đến từng section
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // chỉ chạy một lần
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.section').forEach((el) => observer.observe(el));
