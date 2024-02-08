
document.addEventListener("DOMContentLoaded", function() {

  window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
  // SplitType initialization
  const myText = new SplitType('#my_text');

  // Disable scrolling
  document.body.style.overflow = 'hidden';

  // GSAP timeline
  var tl = gsap.timeline({
    onComplete: () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.display = 'none'; // Hide the preloader element
        // Enable scrolling after the animation is complete
        document.body.style.overflow = 'visible';
      }
    }
  });

  // GSAP animations
  gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 3.5,
    duration: 0.1,
  });

  tl.to('#preloader', {
    duration: 2,
  });

  tl.to('#preloader', {
    duration: 2.5,
    y: 800,
    ease: "power2.out",
  });

  // ScrollTrigger with markers for the '.scrollTrigger' element
  gsap.to('body', {
    backgroundColor: '#EAE7DE',
  });
  gsap.to('body', {
    scrollTrigger: {
      trigger: '.scrollTrigger',
      markers: true, // Add markers to visualize the trigger
      start: 'top center',
      end: 'bottom bottom',
      toggleActions: "restart none none reverse",
    },
    backgroundColor: '#B56135',
  });

  // ScrollTrigger with markers for the '.footer' element
  gsap.to('body', {
    scrollTrigger: {
      trigger: '.footer',
      markers: true, // Add markers to visualize the trigger
      start: 'top center',
      end: 'bottom bottom',
      toggleActions: "restart none none reverse",
    },
    backgroundColor: '#B0B280',
  });

});

// Additional custom JavaScript code
console.log("Hello from myCustomCode.js!");
