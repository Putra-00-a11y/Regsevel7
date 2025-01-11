// Scroll Animation Activation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    
    function checkSectionVisibility() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight && sectionTop > 0) {
          section.classList.add('visible');
        }
      });
    }
    
    window.addEventListener('scroll', checkSectionVisibility);
    checkSectionVisibility();
  });
  