 const backToTopBtn = document.getElementById("backToTop");

    // Show button after scrolling down 200px
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    };

    // Scroll smoothly to top when clicked
    backToTopBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    document.getElementById('year').textContent = new Date().getFullYear();



    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

