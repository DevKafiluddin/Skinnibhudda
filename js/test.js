// Main interactions: nav toggle, simple hero image fallback, contact form basic validation
document.addEventListener('DOMContentLoaded', function () {
  // nav toggle for mobile
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', function () {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    if (mainNav.style.display === 'block') {
      mainNav.style.display = '';
    } else {
      mainNav.style.display = 'block';
    }
  });

  // sticky header shadow on scroll
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  });

  // simple hero fallback for small screens - rotate image if needed
  // (replace with a proper carousel if needed)
  var heroImg = document.querySelector('.hero-media img');
  if (window.innerWidth < 420 && heroImg) {
    heroImg.src = 'assets/hero-1-mobile.jpg';
  }

  // contact form basic validation
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('[name=name]');
      var email = form.querySelector('[name=email]');
      var message = form.querySelector('[name=message]');
      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert('Please complete all fields.');
        return;
      }
      // For demo: show success and clear
      alert('Message sent — thank you! (Demo)');
      form.reset();
    });
  }

  // copyright year
  var year = document.getElementById('copyright-year');
  if (year) year.textContent = new Date().getFullYear();
});