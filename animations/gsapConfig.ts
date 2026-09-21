import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const EASE_8 = "power3.out"; // Webflow ix3 ease identifier 8
export const EASE_3 = "power1.inOut"; // Webflow ix3 ease identifier 3
export const EASE_LINEAR = "none";

export { gsap, ScrollTrigger };
