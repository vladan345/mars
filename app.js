let controller;
let cardScene;
let contactScene;

function animateSections() {
  //init controller
  controller = new ScrollMagic.Controller();
  //Selecting
  const headingCards = document.querySelector(".categories h3");
  const cards = document.querySelectorAll(".card");
  //Loop over each slide
  cards.forEach((card, index) => {
    const wholeCard = card;
    //GSAP
    const cardTl = gsap.timeline({
      defaults: { duration: 0.7 },
    });
    cardTl.fromTo(
      wholeCard,
      { opacity: 0, y: "-30px" },
      { opacity: 1, y: "0" },
      "-=0.5"
    );
    //Create scene
    cardScene = new ScrollMagic.Scene({
      triggerElement: headingCards,
      triggerHook: 0.25,
      reverse: false,
      offset: -200,
    })
      .setTween(cardTl)
      .addTo(controller);

    //New animation

    //init controller
    controller = new ScrollMagic.Controller();
    //Selecting
    const headingContact = document.querySelector(".contact h3");
    const paragraph = document.querySelector(".contact p");
    const button = document.querySelector(".contact a");
    //Loop over each slide
    //GSAP
    const contTl = gsap.timeline({
      defaults: { duration: 0.7, rease: "power1.out" },
    });
    contTl.fromTo(
      headingContact,
      { opacity: 0, y: "-30px" },
      { opacity: 1, y: "0" }
    );
    contTl.fromTo(
      paragraph,
      { opacity: 0, y: "-30px" },
      { opacity: 1, y: "0" }
    );
    contTl.fromTo(
      button,
      { opacity: 0, y: "-30px" },
      { opacity: 1, y: "0" },
      "-=0.7"
    );
    //Create scene
    contactScene = new ScrollMagic.Scene({
      triggerElement: headingContact,
      triggerHook: 0.25,
      reverse: false,
      offset: -200,
    })
      .setTween(contTl)
      .addTo(controller);
  });
}
animateSections();
