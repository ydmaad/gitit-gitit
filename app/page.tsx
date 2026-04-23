'use client';

import { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNav(!entry.isIntersecting);
      },
      {
        root: rootRef.current,
        threshold: 0.5,
      }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <main
      ref={rootRef}
      className="scrollbar-hide h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      <nav
        className={`${
          showNav
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }
        fixed top-0 w-full transition-all duration-500 z-50
        `}
      >
        <Navbar></Navbar>
      </nav>
      <section ref={heroRef} className="snap-start h-screen">
        <HeroSection></HeroSection>
      </section>
      <section className="snap-start">
        <MainSection></MainSection>
      </section>
    </main>
  );
}
