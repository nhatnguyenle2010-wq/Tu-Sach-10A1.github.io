/* ===================================
   PARTICLES BACKGROUND
=================================== */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  const particles = [];
  const COUNT = 38;

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: rand(0, W),
      y: rand(0, H),
      r: rand(0.6, 2.2),
      dx: rand(-0.18, 0.18),
      dy: rand(-0.22, -0.06),
      alpha: rand(0.15, 0.55),
      color: Math.random() > 0.5 ? '184,134,11' : '200,160,80',
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.y < -4) {
        p.y = H + 4;
        p.x = rand(0, W);
      }
      if (p.x < -4) p.x = W + 4;
      if (p.x > W + 4) p.x = -4;
    }
    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });
})();

/* ===================================
   READING PROGRESS BAR
=================================== */
(function initProgress() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

/* ===================================
   SCROLL TO TOP BUTTON
=================================== */
(function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ===================================
   BACK BUTTON
=================================== */
function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    // Fallback: scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ===================================
   SCROLL REVEAL
=================================== */
(function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(el => observer.observe(el));
})();

/* ===================================
   ACTIVE NAV PILL (highlight on scroll)
=================================== */
(function initNavHighlight() {
  const pills = document.querySelectorAll('.nav-pill');
  const sections = ['khai-niem', 'cau-1', 'cau-2', 'cau-3'].map(id => document.getElementById(id));

  function updateActive() {
    const scrollY = window.scrollY + 120;
    let activeIdx = 0;

    sections.forEach((sec, i) => {
      if (sec && sec.offsetTop <= scrollY) {
        activeIdx = i;
      }
    });

    pills.forEach((p, i) => {
      p.classList.toggle('active', i === activeIdx);
    });
  }

  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();
})();

/* ===================================
   SMOOTH ANCHOR SCROLLING
=================================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ===================================
   ANSWER CARD HOVER GLOW
=================================== */
document.querySelectorAll('.answer-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = 'rgba(184,134,11,0.4)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '';
  });
});

/* ===================================
   CONCEPT CARD TILT ON HOVER
=================================== */
document.querySelectorAll('.concept-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const tiltX = ((y - cy) / cy) * 3;
    const tiltY = -((x - cx) / cx) * 3;
    card.style.transform = `translateY(-4px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.35s cubic-bezier(0.4,0,0.2,1)';
  });
});
