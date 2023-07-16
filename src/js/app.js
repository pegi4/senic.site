/* LANGUAGE SWITCH */

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

      // Update language buttons visibility
      const langSelect = document.querySelector('.lang-select');
      const slButton = langSelect.querySelector('button[data-lang="sl"]');
      const enButton = langSelect.querySelector('button[data-lang="en"]');

      if (lang === 'sl') {
        slButton.style.display = 'none';
        enButton.style.display = 'inline-block';
      } else if (lang === 'en') {
        slButton.style.display = 'inline-block';
        enButton.style.display = 'none';
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


/* ANIMATION */

document.addEventListener('DOMContentLoaded', () => {
  const typewriterText = document.getElementById('typewriter-text');
  const heading = document.getElementById('heading');
  const socialLinks = document.getElementById('social-links');
  const emailButton = document.getElementById('email-button');
  const scrollHint = document.getElementById('scroll-hint');
  const navigation = document.getElementById('navigation');
  const langSet = document.getElementById('lang-set');

  const typewriterTextContent = "Hey, I'm";
  const headingContent = "Vito Senic";
  const socialLinksDelay = 200;
  const emailButtonDelay = 500;
  const scrollHintDelay = 700;

  function typeWriterEffect(element, text) {
    return new Promise((resolve) => {
      let currentIndex = 0;

      const intervalId = setInterval(() => {
        element.textContent += text[currentIndex];
        currentIndex++;

        if (currentIndex === text.length) {
          clearInterval(intervalId);
          setTimeout(resolve);
        }
      }, 50);
    });
  }

  async function animateHeader() {
    await typeWriterEffect(typewriterText, typewriterTextContent);
    await typeWriterEffect(heading, headingContent);
    setTimeout(() => {
      socialLinks.classList.add('show');
      navigation.classList.add('show');
      langSet.classList.add('show');
      setTimeout(() => {
        emailButton.classList.add('show');
        setTimeout(() => {
          scrollHint.classList.add('show');
        }, scrollHintDelay - emailButtonDelay);
      }, emailButtonDelay - socialLinksDelay);
    }, socialLinksDelay);
  }

  animateHeader();
});