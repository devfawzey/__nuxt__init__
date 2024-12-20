import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { DELAY_TIME } from "~/utils/constants";
gsap.registerPlugin(ScrollToPlugin)

export const useGsap = () => {

 const duration = .55;
 const ease = "expo.inOut";
 const defaults = { duration, ease }

 const scrollToTopBtn = {
  target: "#scroll-to-top-btn",
  offsetY: 130,
  ____SHOW____() {
   gsap.to(this.target, {
    ...defaults,
    scale: 1,
    yPercent: 0,
    xPercent: 0,
   })
  },
  ____HIDE____() {
   gsap.to(this.target, {
    ...defaults,
    scale: 0,
    xPercent: 150,
    yPercent: 150,
   })
  },
  ___TOGGLE___: useDebounceFn(() => {
   if (!window || !document) return;
   window.scrollY > scrollToTopBtn.offsetY ? scrollToTopBtn.____SHOW____() : scrollToTopBtn.____HIDE____()
  }, DELAY_TIME),
 }

 const scrollTo = () => {
  if (!window) return;
  gsap.to(window, { duration: 1, ease, scrollTo: { y: 0 } })
 }

 return { scrollToTopBtn, scrollTo }
}
