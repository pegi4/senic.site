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