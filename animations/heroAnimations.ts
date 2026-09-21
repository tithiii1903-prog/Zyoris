import { gsap, EASE_8 } from "./gsapConfig";

/**
 * Initializes the exact staged hero entrance timeline on page load:
 * 0.0s: [animate="load-hero-1"]
 * 0.6s: [animate="load-hero-title"] (SplitText masked words)
 * 0.7s: [animate="load-hero-2"]
 * 0.8s: [animate="load-hero-stagger"] (direct children)
 * 1.0s: [animate="load-hero-3"]
 * 1.5s: [animate="load-hero-4"]
 */
export function initHeroAnimations(container?: HTMLElement): () => void {
  const root = container || document;

  const hero1 = root.querySelectorAll<HTMLElement>(
    '[animate="load-hero-1"], [data-animate="load-hero-1"]'
  );
  const heroTitle = root.querySelector<HTMLElement>(
    '[animate="load-hero-title"], [data-animate="load-hero-title"]'
  );
  const hero2 = root.querySelectorAll<HTMLElement>(
    '[animate="load-hero-2"], [data-animate="load-hero-2"]'
  );
  const heroStagger = root.querySelector<HTMLElement>(
    '[animate="load-hero-stagger"], [data-animate="load-hero-stagger"]'
  );
  const hero3 = root.querySelectorAll<HTMLElement>(
    '[animate="load-hero-3"], [data-animate="load-hero-3"]'
  );
  const hero4 = root.querySelectorAll<HTMLElement>(
    '[animate="load-hero-4"], [data-animate="load-hero-4"]'
  );

  // Set initial states
  if (hero1.length) gsap.set(hero1, { y: "3rem", opacity: 0 });
  if (hero2.length) gsap.set(hero2, { y: "3rem", opacity: 0 });
  if (hero3.length) gsap.set(hero3, { y: "3rem", opacity: 0 });
  if (hero4.length) gsap.set(hero4, { y: "3rem", opacity: 0 });

  let wordSpans: HTMLSpanElement[] = [];
  if (heroTitle) {
    gsap.set(heroTitle, { opacity: 1, visibility: "visible", y: 0 });

    if (!heroTitle.dataset.originalText) {
      heroTitle.dataset.originalText = heroTitle.innerText.trim();
    }
    const text = heroTitle.dataset.originalText;
    if (text) {
      const words = text.split(/\s+/);
      heroTitle.innerHTML = "";
      words.forEach((word, index) => {
        const maskWrap = document.createElement("span");
        maskWrap.className = "split-mask-wrap";
        maskWrap.style.display = "inline-block";
        maskWrap.style.overflow = "hidden";
        maskWrap.style.verticalAlign = "top";
        maskWrap.style.lineHeight = "inherit";
        maskWrap.style.color = "inherit";

        const wordSpan = document.createElement("span");
        wordSpan.className = "split-mask-word";
        wordSpan.style.display = "inline-block";
        wordSpan.style.transform = "translateY(100%)";
        wordSpan.style.willChange = "transform";
        wordSpan.style.color = "inherit";
        wordSpan.innerText = word;

        maskWrap.appendChild(wordSpan);
        heroTitle.appendChild(maskWrap);
        wordSpans.push(wordSpan);

        if (index < words.length - 1) {
          heroTitle.appendChild(document.createTextNode(" "));
        }
      });
    }
  }

  const staggerChildren: HTMLElement[] = heroStagger
    ? (Array.from(heroStagger.children).filter((child) => {
        const el = child as HTMLElement;
        const anim =
          el.getAttribute("animate") || el.getAttribute("data-animate") || "";
        const isSpacer =
          el.className &&
          typeof el.className === "string" &&
          el.className.includes("spacer");
        return !anim.startsWith("load-hero-") && !isSpacer;
      }) as HTMLElement[])
    : [];
  if (staggerChildren.length) {
    gsap.set(staggerChildren, { y: "3rem", opacity: 0 });
  }

  const tl = gsap.timeline({ delay: 0.1 });

  // 0s: load-hero-1
  if (hero1.length) {
    tl.to(
      hero1,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: EASE_8,
      },
      0
    );
  }

  // 0.6s: hero title words
  if (wordSpans.length) {
    tl.to(
      wordSpans,
      {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: EASE_8,
      },
      0.6
    );
  }

  // 0.7s: load-hero-2
  if (hero2.length) {
    tl.to(
      hero2,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: EASE_8,
      },
      0.7
    );
  }

  // 0.8s: hero stagger direct children
  if (staggerChildren.length) {
    tl.to(
      staggerChildren,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: EASE_8,
      },
      0.8
    );
  }

  // 1.0s: load-hero-3
  if (hero3.length) {
    tl.to(
      hero3,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: EASE_8,
      },
      1.0
    );
  }

  // 1.5s: load-hero-4
  if (hero4.length) {
    tl.to(
      hero4,
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: EASE_8,
      },
      1.5
    );
  }

  return () => {
    tl.kill();
  };
}
