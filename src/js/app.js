let languageContent = {
    "en": {
        "section-content": `
          <p>I am deeply interested in how the <span style="color: #1BE6B0;">world</span> works and why every thing has its <span style="color: #FFBA08;">purpose</span> in life. So I created this website with a certain intention...</p>
          <p>I am a <span style="color: #E14242;">dreamer</span> who strives to make <span style="color: #E14242;">dreams</span> come true. I realize that it's necessary to stay <span style="color: #E14242;">realistic</span>, confront, and eliminate <span style="color: #FFBA08;">all the errors</span> that hinder me from reaching my goals, expressing <span style="color: #68B5FC;">open-mindedness and self-criticism</span> in the process. Through this, I've learned to <span style="color: #1BE6B0;">accept</span> and <span style="color: #1BE6B0;">understand</span> myself and others, gaining a sense of <span style="color: #FFBA08;">purpose in life</span> (at least the feeling of purpose).</p>
          <p>I believe in the following formula, while also making an effort to <span style="color: #1BE6B0;">understand</span> the functioning of <span style="color: #68B5FC;">the left and right sides of the brain</span>.</p>
          <p><span style="color: #E14242;">Pain</span> + <span style="color: #1BE6B0;">Reflection</span> = <span style="color: #68B5FC;">Progress</span>.</p>
        `
    },
    "sl": {
        "section-content": `
          <p>Globoko me zanima, kako <span style="color: #1BE6B0;">deluje svet</span> in zakaj ima vsaka stvar svoj <span style="color: #FFBA08;">namen</span> v življenju. Zato sem ustvaril to spletno stran z določeno namero...</p>
          <p>Sem <span style="color: #E14242;">sanjač</span>, ki si prizadeva, da bi uresničil <span style="color: #E14242;">sanje</span>. Zavedam se, da je pomembno ostati <span style="color: #E14242;">realističen</span>, soočiti se in odpraviti <span style="color: #FFBA08;">vse napake</span>, ki me ovirajo pri doseganju ciljev, izražati <span style="color: #68B5FC;">odprtost uma in samokritiko</span> v procesu. S tem sem se naučil <span style="color: #1BE6B0;">sprejemati</span> in <span style="color: #1BE6B0;">razumeti</span> sebe in druge, pridobiti občutek <span style="color: #FFBA08;">namena v življenju</span> (vsaj občutek namena).</p>
          <p>Verjamem v naslednjo formulo, obenem pa se trudim razumeti delovanje <span style="color: #68B5FC;">levih in desnih možganov</span>.</p>
          <p><span style="color: #E14242;">Bolečina</span> + <span style="color: #1BE6B0;">Refleksija</span> = <span style="color: #68B5FC;">Napredek</span>.</p>
        `
    }
};

function switchLang(lang) {
    let translations = languageContent[lang];
    for (let key in translations) {
        if (translations.hasOwnProperty(key)) {
            let element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[key];
            }
        }
    }
}

// Set the initial language
switchLang('en');