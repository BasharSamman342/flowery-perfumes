import { useEffect, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import HeroText from "./text/HeroText";
import { Button } from "./ui/button";

gsap.registerPlugin(useGSAP);

function HeroSection() {
  const [animationClass, setAnimationClass] = useState("focus-in-contract-bck");
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50px 0px 0px 0px",
    triggerOnce: false,
  });

  //   Set animation class based on visibility
  useEffect(() => {
    if (inView) {
      // setAnimationClass("focus-in-contract-bck");
      setAnimationClass("tracking-in-contract-bck");
    } else {
      setAnimationClass("blur-out-expand-fwd");
    }
  }, [inView]);
  useGSAP(() => {
    gsap.from("#lavender-image", {
      x: -200,
      duration: 1,
      delay: 0.7,
      ease: "power2.out",
    });

    gsap.from("#rose-image", {
      x: 300,
      duration: 1,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from("#fragrance-img", {
      x: -300,
      y: 300,
      duration: 1,
      delay: 1.2,
      ease: "power2.out",
    });
  });
  return (
    <div className="min-h-screen">
      <div ref={ref} className="min-w-full min-h-full py-8">
        <img
          id="lavender-image"
          src="/lavender.png"
          style={inView ? {} : { filter: "blur(10px)" }}
          className="absolute -top-20 z-0 rotate-130 -left-70 w-[45%]"
          alt=""
        />
        <img
          id="fragrance-img"
          src="/perfume.png"
          className="absolute top-75 z-0 rotate-30 left-0 w-[30%]"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center justify-center gap-y-8">
        <HeroText
          styles={{ color: "rgb(117, 74, 153)" }}
          className={`dealyo text-[45px] ${animationClass}`}
        >
          Fragrances that attracts people
        </HeroText>
        <Button
          variant={"default"}
          style={{ background: "rgb(142, 34, 39)" }}
          size={"lg"}
        >
          view more
        </Button>
      </div>
      <img
        style={inView ? {} : { filter: "blur(10px)" }}
        id="rose-image"
        src="/rose.png"
        className="absolute top-40 z-0 -scale-x-100 -rotate-60 -right-60 w-[45%]"
        alt=""
      />
    </div>
  );
}

export default HeroSection;
