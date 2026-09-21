import { gsap, EASE_LINEAR } from "./gsapConfig";

/**
 * Initializes continuous linear marquees:
 * - Logos marquee: 30s, left
 * - Highlights marquee: 30s, left
 * - Integrations left: 80s, left
 * - Integrations right: 80s, right
 */
export function initMarquees(container?: HTMLElement): () => void {
  const root = container || document;
  const tweens: gsap.core.Tween[] = [];

  // Logos marquee: 30s left
  const logosGroups = root.querySelectorAll<HTMLElement>(".logos_marquee-group");
  if (logosGroups.length) {
    const tw = gsap.to(logosGroups, {
      xPercent: -100,
      repeat: -1,
      duration: 35,
      ease: EASE_LINEAR,
    });
    tweens.push(tw);
  }

  // Highlights marquee: 30s left
  const highlightsGroups = root.querySelectorAll<HTMLElement>(".highlights_marquee-group");
  if (highlightsGroups.length) {
    const tw = gsap.to(highlightsGroups, {
      xPercent: -100,
      repeat: -1,
      duration: 30,
      ease: EASE_LINEAR,
    });
    tweens.push(tw);
  }

  // Integrations marquee: left (80s)
  const leftGroups = root.querySelectorAll<HTMLElement>(
    ".integrations_marquee.is-left .integrations_marquee-group, .integrations_marquee2-group"
  );
  if (leftGroups.length) {
    const tw = gsap.to(leftGroups, {
      xPercent: -100,
      repeat: -1,
      duration: 80,
      ease: EASE_LINEAR,
    });
    tweens.push(tw);
  }

  // Integrations marquee: right (80s)
  const rightGroups = root.querySelectorAll<HTMLElement>(
    ".integrations_marquee.is-right .integrations_marquee-group"
  );
  if (rightGroups.length) {
    const tw = gsap.to(rightGroups, {
      xPercent: 100,
      repeat: -1,
      duration: 80,
      ease: EASE_LINEAR,
    });
    tweens.push(tw);
  }

  return () => {
    tweens.forEach((t) => t.kill());
  };
}
