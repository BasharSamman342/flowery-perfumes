import React, { ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface Props {
  children: ReactNode;
  className: string;
  styles?: React.CSSProperties;
  ref?: any;
}

export default function HeroText({ children, className, styles, ref }: Props) {
  return (
    <div ref={ref} className={`${className}`} style={styles}>
      {children}
    </div>
  );
}
