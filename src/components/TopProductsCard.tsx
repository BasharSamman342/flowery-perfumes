import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(useGSAP);

interface Props {
  inView: boolean;
  title: string;
  price: string;
  image: string;
  //   bgWidth: string;
  bgImage: string;
  description: string;
  direction: "rtl" | "ltr";
  marginTop?: string;
}

export default function TopProductsCard({
  //   inView,
  title,
  price,
  image,
  description,
  direction,
  bgImage,
  marginTop = "-200px",
}: //   bgWidth,
Props) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: `${marginTop} 0px 0px 0px`,
    // rootMargin: `-200px 0px 0px 0px`,
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      gsap.from("#flowers-log", {
        rotate: -90,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [inView]);
  return (
    <Card ref={ref}>
      <CardContent>
        <div
          className="flex items-center justify-between "
          style={{ direction: direction }}
        >
          <div className="flex flex-col gap-y-5 w-2/5">
            <h1 className="text-4xl font-semibold kugile">{title}</h1>
            <p>{description}</p>
            <h2 className="text-2xl font-semibold bemirs">{price}</h2>
          </div>
          <div className="relative w-72 h-72 flex items-center justify-center">
            <img
              id="flowers-log"
              className="absolute z-10"
              src={bgImage}
              style={{
                // width: bgWidth,
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <img src={image} className="absolute z-20" width={200} alt="" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
