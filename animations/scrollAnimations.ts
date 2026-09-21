import { gsap, ScrollTrigger, EASE_8 } from "./gsapConfig";

/**
 * Initializes scroll-triggered animations:
 * - [animate="fade-up-1"]: y 2rem -> 0, opacity 0 -> 1, duration 0.8s
 * - [animate="fade-up-2"]: y 2rem -> 0, opacity 0 -> 1, duration 0.8s, delay 0.2s
 * - [animate="fade-up-3"]: y 2rem -> 0, opacity 0 -> 1, duration 0.8s, delay 0.4s
 * - [animate="card-stagger"]: direct children y 2rem -> 0, opacity 0 -> 1, stagger 0.15s
 * - [animate="scroll-section-color"]: transitions to pastel blue shade when viewed/scrolled
 */
export function initScrollAnimations(container?: HTMLElement): () => void {
  const root = container || document;
  const triggers: ScrollTrigger[] = [];

  // fade-up-1
  const fadeUp1Els = root.querySelectorAll<HTMLElement>(
    '[animate="fade-up-1"], [data-animate="fade-up-1"]'
  );
  fadeUp1Els.forEach((el) => {
    const anim = gsap.fromTo(
      el,
      { y: "2rem", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: EASE_8,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
  });

  // fade-up-2
  const fadeUp2Els = root.querySelectorAll<HTMLElement>(
    '[animate="fade-up-2"], [data-animate="fade-up-2"]'
  );
  fadeUp2Els.forEach((el) => {
    const anim = gsap.fromTo(
      el,
      { y: "2rem", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: EASE_8,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
  });

  // fade-up-3
  const fadeUp3Els = root.querySelectorAll<HTMLElement>(
    '[animate="fade-up-3"], [data-animate="fade-up-3"]'
  );
  fadeUp3Els.forEach((el) => {
    const anim = gsap.fromTo(
      el,
      { y: "2rem", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: EASE_8,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
  });

  // card-stagger (targets DIRECT CHILDREN of container)
  const staggerContainers = root.querySelectorAll<HTMLElement>(
    '[animate="card-stagger"], [data-animate="card-stagger"]'
  );
  staggerContainers.forEach((el) => {
    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;

    const anim = gsap.fromTo(
      children,
      { y: "2rem", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: EASE_8,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger);
  });

  // scroll-section-color: transitions to pastel blue shade when viewed
  const colorSections = root.querySelectorAll<HTMLElement>(
    '[animate="scroll-section-color"], [data-animate="scroll-section-color"]'
  );
  colorSections.forEach((el) => {
    const tr = ScrollTrigger.create({
      trigger: el,
      start: "top 65%",
      end: "top 25%",
      scrub: 0.8,
      animation: gsap.to(el, {
        backgroundColor: "#e8f1fc",
        color: "#0A1E3F",
        duration: 1,
        ease: "power2.inOut",
      }),
    });
    triggers.push(tr);
  });

  return () => {
    triggers.forEach((t) => t.kill());
  };
}
