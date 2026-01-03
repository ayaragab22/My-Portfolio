
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const sectionId = this.getAttribute('data-target');
      const section = document.getElementById(sectionId);

      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
