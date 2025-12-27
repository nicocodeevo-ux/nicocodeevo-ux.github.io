// GSAP Effects for Scrollfolio
// Handles all scroll-based animations and effects

document.addEventListener('DOMContentLoaded', () => {
  if (!window.gsap || !window.gsap.ScrollTrigger) {
    console.error('GSAP or ScrollTrigger not loaded');
    return;
  }

  // Register ScrollTrigger plugin
  window.gsap.registerPlugin(window.gsap.ScrollTrigger);

  // Initialize all section animations
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach((section) => {
    const sectionId = section.id;
    
    // Metallic cards cinematic entrance
    const cards = section.querySelectorAll('.metallic-card');
    cards.forEach((card, cardIndex) => {
      window.gsap.fromTo(card,
        {
          opacity: 0,
          y: -40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: cardIndex * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 70%", // Trigger when card reaches first 30% from bottom (while scrolling down)
            end: "top 15%"
          }
        }
      );

      // Professional hover effect with subtle enhancement
      card.addEventListener('mouseenter', () => {
        // Enhanced card hover animation
        window.gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });

        // Animate inner text elements
        const titleElements = card.querySelectorAll('h2, h3');
        window.gsap.to(titleElements, {
          y: -2,
          duration: 0.2,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        // Reverse card hover animation
        window.gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });

        // Reverse text animation
        const titleElements = card.querySelectorAll('h2, h3');
        window.gsap.to(titleElements, {
          y: 0,
          duration: 0.2,
          ease: "power2.out"
        });
      });
    });

    // Timeline cinematic effects for experience section
    const timelineItems = section.querySelectorAll('.relative.pl-12');
    timelineItems.forEach((item, itemIndex) => {
      const dot = item.querySelector('.absolute.left-\\[-11px\\]');
      const content = item.querySelector('.pl-12 > div');
      
      if (dot && content) {
        const tl = window.gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 70%", // Trigger when card reaches first 30% from bottom (while scrolling down)
            end: "top 15%"
          }
        });

        tl.fromTo(dot,
          {
            scale: 0,
            rotation: 180
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
          }
        )
        .fromTo(content,
          {
            opacity: 0,
            x: -30
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.3"
        );
      }
    });
  });

  // Apply parallax effects to background elements with blur classes
  const parallaxElements = document.querySelectorAll('.absolute');
  parallaxElements.forEach((element) => {
    if (element.classList.contains('blur-[150px]') || element.classList.contains('blur-[120px]')) {
      window.gsap.to(element, {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  });

  // Initialize smooth scroll behavior
  window.gsap.config({
    nullTargetWarn: false
  });

  console.log('GSAP Effects initialized successfully');
});
