import { gsap, ScrollTrigger, EASE_8 } from "./gsapConfig";

/**
 * Splits text inside a DOM element into masked words and creates a GSAP ScrollTrigger
 * animation matching Webflow ix3:
 * type: words, mask: words
 * Y: 100% -> 0%
 * Duration: 0.8s
 * Stagger: 0.05s
 * Ease: power3.out (Ease 8)
 * Trigger: start: "top 95%", toggleActions: "play none none none"
 */
export function initSplitTextTitles(container?: HTMLElement): () => void {
  const root = container || document;
  const elements = root.querySelectorAll<HTMLElement>(
    '[animate="title"], [data-animate="title"]'
  );

  const triggers: ScrollTrigger[] = [];

  elements.forEach((el) => {
    // Avoid double initialization
    if (el.dataset.splitInitialized === "true") return;
    el.dataset.splitInitialized = "true";

    // Extract text nodes and words while preserving whitespace
    const originalText = el.innerText.trim();
    if (!originalText) return;

    // Split words
    const words = originalText.split(/\s+/);
    el.innerHTML = "";

    const wordSpans: HTMLSpanElement[] = [];

    words.forEach((word, index) => {
      const maskWrap = document.createElement("span");
      maskWrap.className = "split-mask-wrap";
      maskWrap.style.display = "inline-block";
      maskWrap.style.overflow = "hidden";
      maskWrap.style.verticalAlign = "bottom";
      maskWrap.style.lineHeight = "inherit";

      const wordSpan = document.createElement("span");
      wordSpan.className = "split-mask-word";
      wordSpan.style.display = "inline-block";
      wordSpan.innerText = word;

      maskWrap.appendChild(wordSpan);
      el.appendChild(maskWrap);
      wordSpans.push(wordSpan);

      // Add a space after each word except the last
      if (index < words.length - 1) {
        el.appendChild(document.createTextNode(" "));
      }
    });

    const anim = gsap.fromTo(
      wordSpans,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: EASE_8,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    if (anim.scrollTrigger) {
      triggers.push(anim.scrollTrigger);
    }
  });

  return () => {
    triggers.forEach((t) => t.kill());
  };
}
