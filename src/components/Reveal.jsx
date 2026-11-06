import { useRef } from "react";
import { useInView } from "../hooks/useInView";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...props }) {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
