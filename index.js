// Smooth Scroll to Anchors
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Hero Button Bounce on Hover
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.animation = 'bounce 0.4s';
    btn.addEventListener('animationend', () => btn.style.animation = '');
  });
});

// Optional: Mobile Menu Toggle Logic (if needed)
