"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const PhotonScrollEffect = dynamic(() => import("@/components/PhotonScrollEffect"), { ssr: false });
const FeaturedInfluencersWidget = dynamic(() => import("@/components/FeaturedInfluencersWidget"), { ssr: false });
const CircularVideoSpinner = dynamic(() => import("@/components/CircularVideoSpinner"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const AboutSection = dynamic(() => import("@/components/AboutSection"), { ssr: false });
import "./landing.css";

const animationImages = [
  '/landing/ANIMATION/6.jpg',
  '/landing/ANIMATION/_MG_0085 3.jpg',
  '/landing/ANIMATION/_MG_0125.jpg',
  '/landing/ANIMATION/_MG_0246.jpg',
  '/landing/ANIMATION/_MG_0574.jpg',
  '/landing/ANIMATION/_MG_0735.jpg',
  '/landing/ANIMATION/hdfxfzddzb.gif',
  '/landing/ANIMATION/orgnlfake__1574136420_2180336779075770680_4183375751.jpg',
  '/landing/ANIMATION/orgnlfake__1628225906_2634072276989489657_4183375751.jpg',
  '/landing/ANIMATION/gfdngdfhgdfjtyy.jpg',
  '/landing/ANIMATION/orgnlfake__1756828805_3712408242753148550_4183375751.webp',
  '/landing/ANIMATION/yfytf_v2.jpg'
];


function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="landing-cursor"
      style={{ left: cursorPos.x, top: cursorPos.y }}
    ></div>
  );
}

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Force scroll to top on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Intersection Observer for Reveal Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const currentRefs = revealRefs.current;
    currentRefs.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <Script 
        id="unicorn-studio"
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.1/dist/unicornStudio.umd.js" 
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).UnicornStudio) {
            (window as any).UnicornStudio.init();
          }
        }}
      />
      <div className="landing-body" style={{ cursor: 'none' }}>
        <CustomCursor />

        <div id="section-home">
          <section id="home" className="banner">
            <div className="absolute w-full h-[120vh] left-0 -top-[10vh]" style={{ transform: 'translateZ(0px)', mixBlendMode: 'screen' }} data-us-project="aH0ZsntZ1TcKHIyweEA8"></div>
            <div className="slider" style={{ "--quantity": animationImages.length } as any}>
            {animationImages.map((img, index) => (
              <div key={index} className="item" style={{ "--position": index + 1 } as any}>
                <Image 
                  src={img} 
                  alt="Orgnlfake Model" 
                  fill 
                  sizes="(max-width: 768px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  priority={index < 4} 
                />
              </div>
            ))}
          </div>
          </section>
        </div>

        <div id="section-hero">
          <div className="hero-content reveal" ref={addToRefs}>
            <div className="hero-subtitle">High Fashion & Creative Arts</div>
            <h1 className="hero-title">Unfiltered<br />Reality</h1>
            
            <Link href="/join" className="join-btn inline-flex transition overflow-hidden group text-sm font-medium text-white rounded-full pt-3 pr-5 pb-3 pl-5 relative gap-x-2 gap-y-2 items-center mx-auto mt-4">
              <div className="loader" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', zIndex: 1, backgroundColor: 'transparent', mask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)', WebkitMask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 50% 50%, #f43f5e 0%, transparent 50%), radial-gradient(circle at 45% 45%, #ef4444 0%, transparent 45%), radial-gradient(circle at 55% 55%, #fb7185 0%, transparent 45%), radial-gradient(circle at 45% 55%, #f87171 0%, transparent 45%), radial-gradient(circle at 55% 45%, #dc2626 0%, transparent 45%)', mask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', WebkitMask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', animation: 'transform-animation 0.833s infinite alternate, opacity-animation 1.666s infinite', animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)', filter: 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))' }}></div>
              </div>
              
              <span style={{ position: 'relative', zIndex: 2, fontFamily: "'Inter', sans-serif", fontSize: '1em', fontWeight: 600, userSelect: 'none', color: '#fff', display: 'flex', gap: '0.5rem' }}>
                <span className="loader-letter" style={{ display: 'inline-block', opacity: 0, animation: 'loader-letter-anim 1.666s infinite linear', animationDelay: '0.04s' }}>J</span>
                <span className="loader-letter" style={{ display: 'inline-block', opacity: 0, animation: 'loader-letter-anim 1.666s infinite linear', animationDelay: '0.08s' }}>o</span>
                <span className="loader-letter" style={{ display: 'inline-block', opacity: 0, animation: 'loader-letter-anim 1.666s infinite linear', animationDelay: '0.13s' }}>i</span>
                <span className="loader-letter" style={{ display: 'inline-block', opacity: 0, animation: 'loader-letter-anim 1.666s infinite linear', animationDelay: '0.17s' }}>n</span>
                <span style={{ display: 'inline-block', width: '0.3rem' }}></span>
                <span className="loader-letter" style={{ display: 'inline-block', opacity: 0, animation: 'loader-letter-anim 1.666s infinite linear', animationDelay: '0.26s' }}>U</span>
                <span className="loader-letter" style={{ display: 'inline-block', opacity: 0, animation: 'loader-letter-anim 1.666s infinite linear', animationDelay: '0.3s' }}>s</span>
              </span>
            </Link>
          </div>
        </div>
      
        <div id="section-banner-para">
          <section className="banner-paragraph reveal no-reveal" ref={addToRefs}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              In an industry often defined by rigid expectations and artificial standards, <strong>Orgnlfake</strong> was born to serve as a sanctuary for the authentic. Based in the vibrant creative landscape of South Africa, we are more than an agency; we are a <strong>Pro-Choice Collective</strong>. We believe that every individual has the right to navigate their career without surrendering their autonomy. To us, &apos;Original&apos; isn&apos;t just a name—it&apos;s a commitment to the unfiltered, culturally diverse, and beautifully complex reality of Mzansi.
            </motion.p>
          </section>
        </div>

        {/* --- INFLUENCER WIDGET OVERLAY --- */}
        <div id="island-influencers">
          <FeaturedInfluencersWidget />
        </div>

        {/* Photon Scroll Animation Section */}
        <div id="island-photon">
          <PhotonScrollEffect />
        </div>

        <div id="section-manifesto">
          <section className="manifesto-paragraph reveal no-reveal" ref={addToRefs}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              We stand firmly against the &apos;fake&apos; hierarchies of the past. Here, there are no bosses and no subordinates. We operate as a horizontal partnership, where the vision of the brand and the soul of the creator meet as equals. We are a house built on the belief that your personal life, your choices, and your private journey are yours alone; they do not define your talent, but they do fuel your unique creative fire.
            </motion.p>
          </section>
        </div>

        {/* --- CIRCULAR VIDEO SPINNER --- */}
        <div id="island-spinner">
          <CircularVideoSpinner />
        </div>

        <div id="island-about">
          <AboutSection />
        </div>



        {/* Testimonials */}
        <div id="island-testimonials">
          <Testimonials />
        </div>
      </div>
    </>
  );
}
