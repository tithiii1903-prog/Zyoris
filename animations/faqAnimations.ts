import { gsap, EASE_3 } from "./gsapConfig";

/**
 * Initializes FAQ accordion click toggles:
 * - [faq_accordion] click trigger
 * - [faq_answer] height 0 -> auto (0.3s, power1.inOut)
 * - [faq_action-line.is-last] rotation -90deg -> 0deg (0.3s, power1.inOut)
 * - Accessible aria-expanded attributes
 */
export function initFAQAnimations(container?: HTMLElement): () => void {
  const root = container || document;
  const accordions = root.querySelectorAll<HTMLElement>(
    '[faq_accordion], [data-faq-accordion], .faq_accordion'
  );

  const cleanups: (() => void)[] = [];

  accordions.forEach((item) => {
    const answer = item.querySelector<HTMLElement>(
      '[faq_answer], [data-faq-answer], .faq_answer'
    );
    const lineLast = item.querySelector<HTMLElement>(
      '.faq_action-line.is-last, [faq_action-line="last"]'
    );

    if (!answer) return;

    // Set initial closed state
    gsap.set(answer, { height: 0, overflow: "hidden", display: "none" });
    if (lineLast) gsap.set(lineLast, { rotation: -90 });

    let isOpen = false;

    const onClick = () => {
      isOpen = !isOpen;
      item.setAttribute("aria-expanded", String(isOpen));

      if (isOpen) {
        gsap.set(answer, { display: "block" });
        gsap.fromTo(
          answer,
          { height: 0 },
          {
            height: "auto",
            duration: 0.3,
            ease: EASE_3,
          }
        );
        if (lineLast) {
          gsap.to(lineLast, {
            rotation: 0,
            duration: 0.3,
            ease: EASE_3,
          });
        }
      } else {
        gsap.to(answer, {
          height: 0,
          duration: 0.3,
          ease: EASE_3,
          onComplete: () => {
            gsap.set(answer, { display: "none" });
          },
        });
        if (lineLast) {
          gsap.to(lineLast, {
            rotation: -90,
            duration: 0.3,
            ease: EASE_3,
          });
        }
      }
    };

    item.addEventListener("click", onClick);
    cleanups.push(() => item.removeEventListener("click", onClick));
  });

  return () => {
    cleanups.forEach((c) => c());
  };
}
