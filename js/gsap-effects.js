// GSAP Cinematic Effects
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // Cinematic section reveals
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach((section, index) => {
    const sectionId = section.getAttribute('id');
    
    // Special animation for about section
    if (sectionId === 'about') {
      gsap.fromTo(section,
        {
          opacity: 0,
          x: 200,
          rotationX: 25,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          x: 0,
          rotationX: 0,
          duration: 1.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Special animation for skills section
    if (sectionId === 'skills') {
      gsap.fromTo(section,
        {
          opacity: 0,
          x: 200,
          rotationX: 25,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          x: 0,
          rotationX: 0,
          duration: 1.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
    
    // Parallax background effect
    gsap.to(section, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Cinematic text reveal
    const title = section.querySelector('h2');
    if (title) {
      gsap.fromTo(title, 
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationX: 45
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Metallic cards cinematic entrance - enabled for better fade-in timing
    const cards = section.querySelectorAll('.metallic-card');
    cards.forEach((card, cardIndex) => {
      gsap.fromTo(card,
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
            start: "bottom 70%", // Trigger when card reaches first 30% from bottom (while scrolling down)
            end: "top 15%"
          }
        }
      );

      // Professional hover effect with title text enhancement
      card.addEventListener('mouseenter', () => {
        // Enhanced card hover animation
        gsap.to(card, {
          scale: 1.03,
          rotationX: 3,
          rotationY: -3,
          boxShadow: "0 80px 160px -40px rgba(255,122,34,0.5), 0 60px 120px -30px rgba(0,0,0,0.9), 0 0 60px rgba(255,255,255,0.1)",
          duration: 0.8,
          ease: "power3.out"
        });

        // Title text comes forward effect
        const titleText = card.querySelector('h2, h3, .text-3xl, .text-2xl, .text-xl');
        if (titleText) {
          gsap.to(titleText, {
            scale: 1.2,
            z: 20,
            y: -10,
            textShadow: "0 0 20px rgba(255,122,34,0.8), 0 0 40px rgba(255,255,255,0.4)",
            duration: 0.6,
            ease: "back.out(1.7)"
          });
        }

        // Enhanced light effect
        gsap.to(card, {
          '--light-intensity': '1.5',
          duration: 0.4
        });
      });

      card.addEventListener('mouseleave', () => {
        // Reset card animation
        gsap.to(card, {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 40px rgba(255, 122, 34, 0.1)",
          duration: 0.8,
          ease: "power3.out"
        });

        // Reset title text animation
        const titleText = card.querySelector('h2, h3, .text-3xl, .text-2xl, .text-xl');
        if (titleText) {
          gsap.to(titleText, {
            scale: 1,
            z: 0,
            y: 0,
            textShadow: "none",
            duration: 0.6,
            ease: "back.out(1.7)"
          });
        }

        // Reset light effect
        gsap.to(card, {
          '--light-intensity': '1',
          duration: 0.4
        });
      });
    });

    // Timeline cinematic effects
    const timelineItems = section.querySelectorAll('.relative.pl-12');
    timelineItems.forEach((item, itemIndex) => {
      const dot = item.querySelector('.absolute.left-\\[-11px\\]');
      const content = item.querySelector('.div > div');
      
      if (dot && content) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
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
            duration: 0.8,
            ease: "back.out(1.7)"
          }
        )
        .fromTo(content,
          {
            opacity: 0,
            x: -50
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out"
          },
          "-=0.4"
        );
      }
    });

    // Video cards cinematic reveal
    const videos = section.querySelectorAll('video');
    videos.forEach((video) => {
      gsap.fromTo(video.parentElement,
        {
          opacity: 0,
          scale: 0.8,
          rotation: 5
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: video.parentElement,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });

  // Navigation cinematic effects
  const nav = document.querySelector('nav');
  const navLinks = nav.querySelectorAll('a');
  
  gsap.fromTo(nav,
    {
      opacity: 0,
      y: -100
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5
    }
  );

  navLinks.forEach((link, index) => {
    gsap.fromTo(link,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.7 + index * 0.1,
        ease: "power2.out"
      }
    );
  });

  // Hero cinematic text animation
  const heroTitle = document.querySelector('#hero h1');
  if (heroTitle) {
    gsap.fromTo(heroTitle,
      {
        opacity: 0,
        y: 100,
        scale: 0.5,
        rotation: -5
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 2,
        ease: "power4.out",
        delay: 0.3
      }
    );
  }

  // Form inputs cinematic focus
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach((input) => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        scale: 1.02,
        boxShadow: "0 0 30px rgba(255,122,34,0.3)",
        duration: 0.3,
        ease: "power2.out"
      });
    });

    input.addEventListener('blur', () => {
      gsap.to(input, {
        scale: 1,
        boxShadow: "0 0 0 rgba(255,122,34,0)",
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Button cinematic effects
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        rotationX: -10,
        boxShadow: "0 20px 40px rgba(255,122,34,0.4)",
        duration: 0.4,
        ease: "back.out(1.7)"
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        rotationX: 0,
        boxShadow: "0 0 0 rgba(255,122,34,0)",
        duration: 0.4,
        ease: "power2.out"
      });
    });
  });

  // Scroll indicator cinematic animation
  const scrollIndicator = document.querySelector('.absolute.bottom-12');
  if (scrollIndicator) {
    gsap.to(scrollIndicator, {
      y: 20,
      opacity: 0.5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }
});
