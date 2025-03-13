// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dark/Light Mode Toggle
const themeToggle = document.createElement('button');
themeToggle.classList.add('theme-toggle');
themeToggle.textContent = '🌙';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
  themeToggle.textContent = document.body.dataset.theme === 'dark' ? '☀️' : '🌙';
});

// Form Submission Alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message, Aakash will get back to you soon!');
  this.reset();
});

// Animate Sections on Scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

 // 3D Card Rotation on Mouse Move
const profileCard = document.getElementById('3d-profile-card');
const cardInner = document.getElementById('card-inner');

let isFlipped = false;

// Mouse Move Interaction
profileCard.addEventListener('mousemove', (e) => {
  if (!isFlipped) {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    cardInner.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
});

// Mouse Leave Interaction
profileCard.addEventListener('mouseleave', () => {
  if (!isFlipped) {
    cardInner.style.transform = 'rotateY(0deg) rotateX(0deg)';
  }
});

// Click to Flip Interaction
profileCard.addEventListener('click', () => {
  isFlipped = !isFlipped;
  if (isFlipped) {
    cardInner.style.transform = 'rotateY(180deg)';
  } else {
    cardInner.style.transform = 'rotateY(0deg)';
  }
});

// Touch Interaction for Mobile Devices
let touchStartX = 0;
let touchEndX = 0;

profileCard.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

profileCard.addEventListener('touchmove', (e) => {
  if (!isFlipped) {
    touchEndX = e.touches[0].clientX;
    const xAxis = (touchStartX - touchEndX) / 10;
    cardInner.style.transform = `rotateY(${xAxis}deg) rotateX(0deg)`;
  }
});

profileCard.addEventListener('touchend', () => {
  if (!isFlipped) {
    cardInner.style.transform = 'rotateY(0deg) rotateX(0deg)';
  }
});