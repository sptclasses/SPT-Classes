import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // wait for route content to render
    requestAnimationFrame(() => {
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          immediate: true, // no animation conflict
        });
        window.lenis.resize(); // 🔥 REQUIRED
      }
    });
  }, [pathname]);

  return null;
}
