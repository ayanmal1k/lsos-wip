"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GSAPScrollController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // 1. Staggered reveal for cards across sections
    const cards = gsap.utils.toArray<HTMLElement>(".gsap-reveal-card");
    if (cards.length > 0) {
      ScrollTrigger.batch(cards, {
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 50, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
              overwrite: "auto",
            }
          );
        },
        once: true,
      });
    }

    // 2. Section Headings Smooth Kinetic Reveal
    const headings = gsap.utils.toArray<HTMLElement>(".gsap-reveal-title");
    headings.forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    // 3. Floating Hero Brand Logo Ambient Animation
    const floatingEmblem = document.querySelector(".gsap-floating-logo");
    if (floatingEmblem) {
      gsap.to(floatingEmblem, {
        y: -12,
        rotation: 4,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
