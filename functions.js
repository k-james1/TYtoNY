gsap.registerPlugin(ScrollTrigger);

const imageContainer = document.querySelector('.image-container');
const layers = document.querySelectorAll('.image > *');

gsap.set('#layer2, #layer3, #layer4', { opacity: 0});
gsap.set('#layer1', {opacity: 1});

ScrollTrigger.create({
    trigger: imageContainer,
    start:'top 3%',
    end:'+=2000',
    pin: true,
    scrub: true,

    onUpdate: (self) => {
        if (self.progress < 0.25) {
            gsap.to('#layer1', {opacity: 1});
            gsap.to('#layer2,#layer3,#layer4',{opacity: 0});
        } else if (self.progress >= 0.25 && self.progress <　0.5) {
            gsap.to('#layer1, #layer2', {opacity: 1 });
            gsap.to('#layer3, #layer4', {opacity: 0});
        } else if (self.progress >= 0.5 && self.prodress < 0.75) {
            gsap.to('#layer1, #layer2, #layer3', {opacity: 1});
            gsap.to('#layer4', {opacity: 0});
        } else {
            gsap.to('#layer1, #layer2, #layer3, #layer4', {opacity: 1 });
        }
    },
});

gsap.from("body",{
    scrollTrigger:{
      trigger:"body",
      start:"center center",
      end:"bottom bottom",
      scrub: true,
    },
    duration:0.1,
    backgroundColor:"#1F456E",
    ease:"none",
  });

  gsap.fromTo(".title", {autoAlpha: 0, y: 20}, 
    {duration: .6,
    autoAlpha: 1,
    y: 0,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: ".title",
      start: 'top 60%',
    }
  });

  gsap.fromTo(".box", {autoAlpha: 0, y: 20}, 
    {duration: .6,
    autoAlpha: 1,
    y: 0,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: ".box",
      start: 'top 60%',
    }
  });

  gsap.fromTo(".box bye", {autoAlpha: 0, y: 20}, 
    {duration: .6,
    autoAlpha: 1,
    y: 0,
    ease: 'power4.inOut',
    scrollTrigger: {
      trigger: ".box bye",
      start: 'top 90%',
    }
  });

