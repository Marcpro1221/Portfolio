    const glow = document.querySelector('.cursor-glow');

    window.addEventListener('mousemove', (e) => {
      if (!glow) return;
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          entry.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.width;
          });
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.reveal').forEach(section => observer.observe(section));

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('#site-menu');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
      });

      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          if (window.innerWidth <= 760) {
            navLinks.classList.remove('is-open');
            menuToggle.setAttribute('aria-expanded', 'false');
          }
        });
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 760) {
          navLinks.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
function copyEmail() {
  navigator.clipboard.writeText("marcrolandmarc@gmail.com");
  alert("Email copied!");
}