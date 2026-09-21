import { gsap, EASE_3 } from "./gsapConfig";

/**
 * Checks if the current viewport is desktop (> 991px).
 * Webflow interactions disable card hover and button hover on tablet & mobile.
 */
function isDesktop(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 992px)").matches;
}

/**
 * Initializes button hover interaction:
 * Target: [button-text] inside button
 * Animation: Y 0 -> -100% on mouseenter, reverse on mouseleave
 * Duration: 0.3s
 * Desktop only (> 991px)
 */
export function initButtonAnimations(container?: HTMLElement): () => void {
  const root = container || document;
  const buttons = root.querySelectorAll<HTMLElement>(
    '[button], [data-button], .button, .button-customize, .button-templates, .button-plan'
  );

  const cleanups: (() => void)[] = [];

  buttons.forEach((btn) => {
    const textEls = btn.querySelectorAll<HTMLElement>('[button-text], [data-button-text], .button-text, .button-text-hover');
    if (!textEls.length) return;

    const onEnter = () => {
      if (!isDesktop()) return;
      gsap.to(textEls, {
        y: "-100%",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      if (!isDesktop()) return;
      gsap.to(textEls, {
        y: "0%",
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    cleanups.push(() => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    });
  });

  return () => {
    cleanups.forEach((c) => c());
  };
}

/**
 * Initializes card hover interaction:
 * Target: [card-image] inside [animate="card-hover"]
 * Animation: scale 1 -> 1.05 on mouseenter, reverse on mouseleave
 * Duration: 0.3s
 * Ease: power1.inOut (Ease 3)
 * Desktop only (> 991px)
 */
export function initCardHoverAnimations(container?: HTMLElement): () => void {
  const root = container || document;
  const cards = root.querySelectorAll<HTMLElement>(
    '[animate="card-hover"], [data-animate="card-hover"]'
  );

  const cleanups: (() => void)[] = [];

  cards.forEach((card) => {
    const cardImg = card.querySelector<HTMLElement>('[card-image], [data-card-image], img');
    if (!cardImg) return;

    const onEnter = () => {
      if (!isDesktop()) return;
      gsap.to(cardImg, {
        scale: 1.05,
        duration: 0.3,
        ease: EASE_3,
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      if (!isDesktop()) return;
      gsap.to(cardImg, {
        scale: 1,
        duration: 0.3,
        ease: EASE_3,
        overwrite: "auto",
      });
    };

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);

    cleanups.push(() => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    });
  });

  return () => {
    cleanups.forEach((c) => c());
  };
}
