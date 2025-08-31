// Init AOS (animate on scroll)
if (window.AOS) AOS.init({ once: true, duration: 700, easing: 'ease-out-cubic' });

// Basic client-side form validation + UX feedback (no backend submission)
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Bootstrap validation styles
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    // Simulate "sent" state for demo
    const status = document.getElementById('formStatus');
    status.textContent = 'Thanks! Your message has been recorded (demo).';
    status.className = 'mt-3 small success';

    // Reset after a moment
    setTimeout(() => {
      form.reset();
      form.classList.remove('was-validated');
      status.textContent = '';
      status.className = 'mt-3 small';
    }, 2500);
  }, false);
})();
