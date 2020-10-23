import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["<h1>A lot can happen</h1>", "<h1>with just </h1>", " <h1><strong>one</strong></h1>", "<h1>Cocktail </h1>"],
    typeSpeed: 200,
    loop: false
  });
}

export { loadDynamicBannerText };
