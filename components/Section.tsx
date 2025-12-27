
import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !window.gsap) return;

    const ctx = window.gsap.context(() => {
      // Animate section entrance
      const sectionContent = sectionRef.current?.querySelector('.relative.apple-glass');
      if (sectionContent) {
        window.gsap.fromTo(sectionContent,
          {
            opacity: 0,
            y: 60
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "easeOut",
            scrollTrigger: {
              trigger: sectionContent,
              start: "top 80%",
              end: "top 15%"
            }
          }
        );
      }

      // Special animations for contact section ONLY
      if (id === 'contact') {
        // Contact form slides in from left
        const contactForm = sectionRef.current?.querySelector('.metallic-card:first-child');
        if (contactForm) {
          window.gsap.fromTo(contactForm,
            {
              opacity: 0,
              x: -100
            },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              delay: 0.3,
              ease: "power3.out",
              scrollTrigger: {
                trigger: contactForm,
                start: "bottom 85%",
                end: "top 15%"
              }
            }
          );
        }

        // Video card slides in from right
        const videoCard = sectionRef.current?.querySelector('.metallic-card:last-child');
        if (videoCard) {
          window.gsap.fromTo(videoCard,
            {
              opacity: 0,
              x: 100
            },
            {
              opacity: 1,
              x: 0,
              duration: 1.2,
              delay: 0.5,
              ease: "power3.out",
              scrollTrigger: {
                trigger: videoCard,
                start: "top 85%",
                end: "top 15%"
              }
            }
          );
        }
      }

      // Animate title
      const titleElement = sectionRef.current?.querySelector('h2');
      if (titleElement) {
        window.gsap.fromTo(titleElement,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
            scrollTrigger: {
              trigger: titleElement,
              start: "top 70%",
              end: "top 15%"
            }
          }
        );
      }
    }, sectionRef);

    // Only revert context on component unmount, not on every re-render
    return () => {
      // Don't revert context immediately - let animations complete naturally
      // ctx.revert();
    };
  }, [id]);

  return (
    <section id={id} ref={sectionRef} className="min-h-[60vh] flex items-center justify-center p-4 md:p-8 overflow-hidden relative">
      <div className="max-w-6xl w-full">
        <div className="relative apple-glass brushed-metal rounded-[3rem] p-6 md:p-12 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-50"></div>
          
          <div className="absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-[#ff7a22]/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-[20rem] h-[20rem] bg-[#fbbf24]/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <header className="mb-8 relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-6 text-white/95 drop-shadow-xl" style={{ fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{title}</h2>
            <div className="w-24 h-[4px] bg-gradient-to-r from-[#ff7a22] via-[#fbbf24] to-transparent rounded-full shadow-[0_0_15px_rgba(255,122,34,0.5)]"></div>
          </header>

          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
