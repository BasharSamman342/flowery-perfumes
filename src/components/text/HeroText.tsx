import React, { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface Props {
  children: ReactNode;
  className: string;
  styles?: React.CSSProperties;
}

export default function HeroText({ children, className, styles }: Props) {
  //   useGSAP(() => {
  //     gsap.from(".letter", {
  //       fontSize: 0,
  //       duration: 0.4,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //     });
  //   });

  // Convert children to string and split into letters
  //   const text = typeof children === "string" ? children : "";
  //   const letters = text.split("").map((letter, index) => (
  //     <span key={index} className="letter inline-block">
  //       {letter}
  //     </span>
  //   ));

  return (
    <div
      className={`${className} tracking-in-contract-bck`}
      //   style={{ color: "rgb(117, 74, 153)" }}
      style={styles}
    >
      {children}
    </div>
  );
}
