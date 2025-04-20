// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";

// interface AnimatedTextProps {
//   children: React.ReactNode;
//   className?: string;
//   delay?: number;
// }

// export const AnimatedText = ({
//   children,
//   className,
//   delay = 0,
// }: AnimatedTextProps) => {
//   const [visibleLetters, setVisibleLetters] = useState(0);
//   const text = children?.toString() || "";

//   useEffect(() => {
//     const letters = text.length;
//     const intervalDelay = 50; // Time between each letter appearing

//     const timer = setTimeout(() => {
//       const interval = setInterval(() => {
//         setVisibleLetters((prev) => {
//           if (prev >= letters) {
//             clearInterval(interval);
//             return prev;
//           }
//           return prev + 1;
//         });
//       }, intervalDelay);

//       return () => clearInterval(interval);
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [text, delay]);

//   return (
//     <div className={cn("", className)}>
//       {text.split("").map((letter, index) => (
//         <span
//           key={index}
//           className={cn(
//             "inline-block transition-all duration-300 transform",
//             visibleLetters > index
//               ? "translate-y-0 opacity-100"
//               : "translate-y-4 opacity-0"
//           )}
//         >
//           {letter === " " ? "\u00A0" : letter}
//         </span>
//       ))}
//     </div>
//   );
// };

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({
  children,
  className,
  delay = 0,
}: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "transition-all duration-700 transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};
