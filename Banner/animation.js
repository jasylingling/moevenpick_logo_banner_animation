// LOGO FADING IN
const tlLogo = gsap.timeline();

tlLogo.fromTo("#o-logo", { opacity: 0 }, { opacity: 1, duration: 5 }).fromTo(
  "#without-o-logo",
  { opacity: 0 },
  {
    opacity: 1,
    duration: 3,
    delay: -2,
    onComplete: function () {
      tlCone.play();
      tlConeCutout.play();
      tlScoopChocolate.play();
      tlScoopCaramel.play();
      tlScoopSakura.play();
      tlScoopMatcha.play();
      tlFall.play();
    },
  }
);

// CONE FADING IN AND MOVING RIGHT TO LEFT
const tlCone = gsap.timeline().pause();

tlCone
  .fromTo("#cone", { opacity: 0 }, { opacity: 1, duration: 3 })
  .to("#cone", { x: 300, duration: 3 })
  .to("#cone", { x: -300, duration: 2 })
  .to("#cone", { x: 100, duration: 2 })
  .to("#cone", { x: -100, duration: 2 })
  .to("#cone", { x: 0, duration: 1 });

const tlConeCutout = gsap.timeline().pause();

tlConeCutout
  .fromTo("#cone-cutout", { opacity: 0 }, { opacity: 1, duration: 3 })
  .to("#cone-cutout", { x: 300, duration: 3 })
  .to("#cone-cutout", { x: -300, duration: 2 })
  .to("#cone-cutout", { x: 100, duration: 2 })
  .to("#cone-cutout", { x: -100, duration: 2 })
  .to("#cone-cutout", { x: 0, duration: 1 });

// ICE CREAM SCOOPS FALLING DOWN
const tlScoopChocolate = gsap.timeline().pause();

tlScoopChocolate
  .fromTo("#chocolate", { y: -2000 }, { y: -225, duration: 2, delay: 3.5 })
  .to("#chocolate", { x: -300, duration: 2, delay: 0.5 })
  .to("#chocolate", { x: 100, duration: 2 })
  .to("#chocolate", { x: -100, duration: 2 })
  .to("#chocolate", { x: 0, duration: 1 });

const tlScoopCaramel = gsap.timeline().pause();

tlScoopCaramel
  .fromTo("#caramel", { y: -2000 }, { y: -155, duration: 2, delay: 6 })
  .to("#caramel", { x: 100, duration: 2 })
  .to("#caramel", { x: -100, duration: 2 })
  .to("#caramel", { x: 0, duration: 1 });

const tlScoopSakura = gsap.timeline().pause();

tlScoopSakura
  .fromTo("#sakura", { y: -2000 }, { y: -75, duration: 2, delay: 8 })
  .to("#sakura", { x: -120, duration: 2 })
  .to("#sakura", { x: -20, duration: 1 });

const tlScoopMatcha = gsap.timeline().pause();

tlScoopMatcha
  .fromTo("#matcha", { y: -2000 }, { y: -20, duration: 2, delay: 10 })
  .to("#matcha", { x: 30, duration: 1 });

// CHERRY BLOSSOM AND MATCHA POWDER FALL (ANIMATED BACKGROUND)
const tlFall = gsap.timeline().pause();

tlFall
  .to("body", {
    backgroundImage: "url(img/cherry_blossom.png)",
    backgroundPosition: "0px 100px",
    duration: 5,
    delay: 8,
  })
  .to("body", {
    backgroundImage: "url(img/matcha-powder.png)",
    backgroundPosition: "0px 200px",
    duration: 4.5,
    delay: -3,
  })
  .to("body", {
    backgroundImage: "none",
    backgroundColor: "#fff",
    duration: 2,
    delay: -2,
    onComplete: function () {
      tlSlogans.play();
    },
  });

// SLOGANS
const tlSlogans = gsap.timeline().pause();

tlSlogans
  .to("#slogan1", { autoAlpha: 1, duration: 2 })
  .to("#slogan1", { autoAlpha: 0, duration: 1.5 })
  .to("#slogan2", { autoAlpha: 1, duration: 2 })
  .to("#newflavours", { autoAlpha: 1, duration: 2 })
  .to(".moevenpick_logo", { autoAlpha: 0.1, duration: 1, delay: -2.5 })
  .to("#slogan2", { autoAlpha: 0, duration: 1.5, delay: -1 })
  .to("#slogan3", { autoAlpha: 1, duration: 2 })
  .to("#slogan3", {
    autoAlpha: 0,
    duration: 1.5,
    onComplete: function () {
      tlMatchaSwitch.play();
    },
  });

// MATCHA CONE-SWITCH
const tlMatchaSwitch = gsap.timeline().pause();

tlMatchaSwitch
  .fromTo(
    "#matcha-cone-cutout",
    { opacity: 0, right: "-2000px" },
    { opacity: 1, right: "0", duration: 0.8 }
  )
  .to(".brown", {
    left: "-2000px",
    duration: 1.5,
    delay: -0.5,
    onComplete: function () {
      tlCTA.play();
    },
  });

// CTA BUTTON
const tlCTA = gsap.timeline().pause();

tlCTA
  .to(".cta-button a", {
    autoAlpha: 1,
    duration: 1,
  })
  .to(".cta-button a", {
    scale: 1.1,
    duration: 1,
    yoyo: true,
    repeat: 11,
    delay: 5,
  });

document.querySelector(".cta-button a").addEventListener("click", () => {
  tlCTA.to(".cta-button a", {
    scale: 1.2,
    duration: 1,
    backgroundColor: "#ff4647",
    color: "#ffffff",
    border: "solid 2px #ff4647",
  });
});
