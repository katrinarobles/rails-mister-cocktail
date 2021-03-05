import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["...", "<h1>A lot can happen</h1>" ,"<h1>with just <strong>one</strong> Cocktail </h1>"],
    typeSpeed: 100,
    loop: false,
    showCursor: false,
    // cursorChar: '|',
    autoInsertCss: true
  });
}

export { loadDynamicBannerText };
