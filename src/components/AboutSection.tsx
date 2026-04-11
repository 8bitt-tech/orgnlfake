"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function SpotlightButton({ href, children }: { href: string; children: React.ReactNode }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link 
      href={href}
      className="btn-spotlight"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      <div 
        className="spotlight-beam" 
        style={{
           opacity,
           background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,100,60,0.3) 0%, rgba(255,69,0,0.15) 20%, rgba(0,0,0,0.0) 55%)`
        }} 
      />
      <span style={{ position: 'relative', pointerEvents: 'none', zIndex: 2 }}>{children}</span>
    </Link>
  );
}

export default function AboutSection() {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className={`reveal no-reveal ${isActive ? "active" : ""}`} ref={sectionRef}>
      {isActive && (
        <>
          <video 
            className="about-bg-video"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/media/videos/Motion Pictures/Landing/0410(6).mp4" />
          </video>

          <div className="about-img" style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '600px', borderRadius: '24px', boxShadow: '0 0 60px 10px rgba(255, 69, 0, 0.5), 0 0 20px 2px rgba(255, 80, 0, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.35)', zIndex: 0 }}
            >
              <source src="/media/videos/Motion Pictures/Landing/0410(5).mp4" />
            </video>
            <SpotlightButton href="/portfolio">View Portfolio</SpotlightButton>
          </div>
        </>
      )}
      <motion.div
        className="about-text"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          The Orgnlfake Manifesto
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          We are a home for the pioneers and the pupils alike. Orgnlfake serves as a creative incubator where the next generation of South African icons comes to find their footing. Many of the women on our board started right here—learning how to command a room, how to pose with intention, how to navigate social interactions, and how to build a professional brand from the ground up.
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          style={{ marginBottom: "30px" }}
        >
          We aren't just looking for 'finished products'; we are looking for people ready to learn, evolve, and create. By fostering a safe space where cultural differences are celebrated and empowerment is the baseline, we are rewriting the script. While our current focus is on the radical empowerment of women, we are an ever-evolving house, soon expanding our partnership model to men who believe in a world where creativity is a shared currency and respect is non-negotiable.
        </motion.p>
        <motion.div
          style={{ display: "flex", gap: "30px" }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
        >
          <div>
            <h4 style={{ color: "var(--accent)" }}>Loc</h4>
            <span>JHB / Klerksdorp / Pretoria</span>
          </div>
          <div>
            <h4 style={{ color: "var(--accent)" }}>Exp</h4>
            <span>8 Years</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
