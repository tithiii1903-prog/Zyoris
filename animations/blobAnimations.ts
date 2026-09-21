import { gsap, EASE_LINEAR } from "./gsapConfig";

/**
 * Initializes the 32-second, 4-stage infinite hero background blob animation
 * matching the exact Webflow ix3 parameters.
 */
export function initHeroBlobAnimations(container?: HTMLElement): () => void {
  const root = container || document;

  const wrapA = root.querySelector<HTMLElement>(".hero_blob_wrap-a");
  const wrapB = root.querySelector<HTMLElement>(".hero_blob_wrap-b");
  const wrapC = root.querySelector<HTMLElement>(".hero_blob_wrap-c");
  const wrapD = root.querySelector<HTMLElement>(".hero_blob_wrap-d");

  const blobA2 = root.querySelector<HTMLElement>(".blob.is-a2");
  const blobB2 = root.querySelector<HTMLElement>(".blob.is-b2");

  if (!wrapA && !wrapB && !wrapC && !wrapD) return () => {};

  // Set initial starting coordinates
  if (wrapA) gsap.set(wrapA, { opacity: 0.2, xPercent: 50, yPercent: 0, scale: 1 });
  if (wrapB) gsap.set(wrapB, { opacity: 0.4, xPercent: -100, yPercent: -25, scale: 1.5 });
  if (wrapC) gsap.set(wrapC, { opacity: 0.35, xPercent: -100, yPercent: 90 });
  if (wrapD) gsap.set(wrapD, { opacity: 0.2, xPercent: 0, yPercent: 50, skewX: 10 });
  if (blobA2) gsap.set(blobA2, { opacity: 0 });
  if (blobB2) gsap.set(blobB2, { opacity: 0.7 });

  const tl = gsap.timeline({
    repeat: -1,
    yoyo: false,
    defaults: { ease: EASE_LINEAR },
  });

  // ==================== STAGE 1 (0s -> 8s) ====================
  if (wrapA) {
    tl.to(wrapA, { opacity: 0.4, xPercent: -100, yPercent: -50, scale: 1.5, duration: 8 }, 0);
  }
  if (wrapB) {
    tl.to(wrapB, { opacity: 0.1, xPercent: -100, yPercent: 75, scale: 2, duration: 8 }, 0);
  }
  if (wrapC) {
    tl.to(wrapC, { opacity: 0.2, xPercent: 75, yPercent: -50, duration: 8 }, 0);
  }
  if (wrapD) {
    tl.to(wrapD, { opacity: 0.1, xPercent: -15, yPercent: -50, skewX: 40, duration: 8 }, 0);
  }
  if (blobA2) {
    tl.to(blobA2, { opacity: 0.7, duration: 8 }, 0);
  }

  // ==================== STAGE 2 (8s -> 16s) ====================
  if (wrapA) {
    tl.to(wrapA, { opacity: 0.5, xPercent: -130, yPercent: 100, scale: 1.7, duration: 8 }, 8);
  }
  if (wrapB) {
    tl.to(wrapB, { opacity: 0.2, xPercent: 50, yPercent: 0, scale: 1.5, duration: 8 }, 8);
  }
  if (wrapC) {
    tl.to(wrapC, { opacity: 0.15, xPercent: 0, yPercent: -70, duration: 8 }, 8);
  }
  if (wrapD) {
    tl.to(wrapD, { opacity: 0.25, xPercent: -100, yPercent: -30, skewX: -30, duration: 8 }, 8);
  }
  if (blobB2) {
    tl.to(blobB2, { opacity: 0, duration: 8 }, 8);
  }

  // ==================== STAGE 3 (16s -> 24s) ====================
  if (wrapA) {
    tl.to(wrapA, { opacity: 0.15, xPercent: 30, yPercent: 70, scale: 2, duration: 8 }, 16);
  }
  if (wrapB) {
    tl.to(wrapB, { opacity: 0.2, xPercent: 0, yPercent: 50, scale: 1, duration: 8 }, 16);
  }
  if (wrapC) {
    tl.to(wrapC, { opacity: 0.35, xPercent: -100, yPercent: -50, duration: 8 }, 16);
  }
  if (wrapD) {
    tl.to(wrapD, { opacity: 0.3, xPercent: -100, yPercent: 75, skewX: 40, duration: 8 }, 16);
  }
  if (blobA2) {
    tl.to(blobA2, { opacity: 0, duration: 8 }, 16);
  }

  // ==================== STAGE 4 (24s -> 32s) ====================
  if (wrapA) {
    tl.to(wrapA, { opacity: 0.25, xPercent: 50, yPercent: 0, scale: 1, duration: 8 }, 24);
  }
  if (wrapB) {
    tl.to(wrapB, { opacity: 0.4, xPercent: -100, yPercent: -25, scale: 1.5, duration: 8 }, 24);
  }
  if (wrapC) {
    tl.to(wrapC, { opacity: 0.35, xPercent: -100, yPercent: 90, duration: 8 }, 24);
  }
  if (wrapD) {
    tl.to(wrapD, { opacity: 0.2, xPercent: 0, yPercent: 150, skewX: 10, duration: 8 }, 24);
  }
  if (blobB2) {
    tl.to(blobB2, { opacity: 0.7, duration: 8 }, 24);
  }

  return () => {
    tl.kill();
  };
}
