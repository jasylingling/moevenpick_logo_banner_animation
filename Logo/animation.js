// LOGO FADING IN AND BIRD IS "FLYING" UP AND DOWN
const tlLogo = gsap.timeline();

tlLogo
  .fromTo("#o-logo", { opacity: 0 }, { opacity: 1, duration: 5 })
  .fromTo(
    "#without-o-logo",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 3,
      delay: -2,
    }
  )
  .set("#o-logo", { opacity: 0 })
  .set("#o-logo-without-bird", { opacity: 1 })
  .set("#bird", { opacity: 1 })
  .to("#bird", { y: -16, duration: 3, delay: 2 })
  .to("#bird", { y: -8, duration: 3, delay: -1 })
  .to("#bird", { y: -16, duration: 3, delay: -1 })
  .to("#bird", { y: -8, duration: 3, delay: -1 })
  .to("#bird", { y: -16, duration: 3, delay: -1 })
  .to("#bird", { y: -8, duration: 3, delay: -1 })
  .to("#bird", { y: -16, duration: 3, delay: -1 })
  .to("#bird", { y: -8, duration: 3, delay: -1 })
  .to("#bird", { y: -16, duration: 3, delay: -1 })
  .to("#bird", { y: 0, duration: 3, delay: -1 });
