// ── Contact Form Alert (JS Interactivity) ──
function sendGreeting() {
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();

  if (!name && !email) {
    alert("Hey! Please enter your name and email first 😊");
    return;
  }
  if (!name) {
    alert("What's your name? Don't be shy! 😄");
    return;
  }
  if (!email || !email.includes('@')) {
    alert("Please enter a valid email address 📧");
    return;
  }

  alert(`🎉 Hey ${name}!\n\nThanks for reaching out!\nI'll get back to you at ${email} soon.\n\n— Bajrang`);
}

// ── Scroll Reveal Animation ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.about-card, .skill-pill, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});