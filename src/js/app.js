function switchLang(lang) {
    fetch(`./src/translation/translation-${lang}.json`)
      .then((response) => response.json())
      .then((translations) => {
        for (let key in translations) {
          if (translations.hasOwnProperty(key)) {
            let element = document.getElementById(key);
            if (element) {
              element.innerHTML = translations[key];
            }
          }
        }
      })
      .catch((error) => console.error('Error loading translations:', error));
  }
  
  switchLang('sl');


/* NAVIGATION */

  // Smooth scrolling to the target section
  function scrollToSection(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  }

  // Update the active dot based on the current scroll position
  function updateActiveDot() {
    const sections = document.querySelectorAll("section");
    const dots = document.querySelectorAll(".dot");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
      }
    });
  }

  // Add event listeners to dots and scroll event
  document.querySelectorAll(".dot").forEach(dot =>
    dot.addEventListener("click", scrollToSection)
  );
  window.addEventListener("scroll", updateActiveDot);