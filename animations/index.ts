import { gsap, ScrollTrigger } from "./gsapConfig";
import { initSplitTextTitles } from "./splitText";
import { initScrollAnimations } from "./scrollAnimations";
import { initButtonAnimations, initCardHoverAnimations } from "./hoverAnimations";
import { initHeroAnimations } from "./heroAnimations";
import { initHeroBlobAnimations } from "./blobAnimations";
import { initMarquees } from "./marqueeAnimations";
import { initFAQAnimations } from "./faqAnimations";

export * from "./gsapConfig";
export * from "./splitText";
export * from "./scrollAnimations";
export * from "./hoverAnimations";
export * from "./heroAnimations";
export * from "./blobAnimations";
export * from "./marqueeAnimations";
export * from "./faqAnimations";

/**
 * Master initializer for all animations within a scoped container.
 * Returns a cleanup function that reverts GSAP context and destroys ScrollTriggers.
 */
export function initAllAnimations(container: HTMLElement): () => void {
  const cleanups: (() => void)[] = [];

  const ctx = gsap.context(() => {
    // 1. Hero Load sequence
    cleanups.push(initHeroAnimations(container));

    // 2. Looping hero blobs
    cleanups.push(initHeroBlobAnimations(container));

    // 3. Continuous marquees
    cleanups.push(initMarquees(container));

    // 4. SplitText title reveals
    cleanups.push(initSplitTextTitles(container));

    // 5. Scroll entrance fade-ups, card-stagger, color shifts
    cleanups.push(initScrollAnimations(container));

    // 6. Interactive button & card hovers
    cleanups.push(initButtonAnimations(container));
    cleanups.push(initCardHoverAnimations(container));

    // 7. FAQ accordion
    cleanups.push(initFAQAnimations(container));

    // Refresh ScrollTrigger so positions are immediately accurate
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, container);

  return () => {
    cleanups.forEach((c) => c());
    ctx.revert();
  };
}
