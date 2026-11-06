import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useInView(ref, { once = true, rootMargin = "0px 0px -12% 0px" } = {}) {
  const reduce = useReducedMotion();
  const [inView, setInView] = useState(reduce);

  useEffect(() => {
    if (reduce) {
      setInView(true);
      return undefined;
    }

    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold: 0.14 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once, rootMargin, reduce]);

  return inView;
}
