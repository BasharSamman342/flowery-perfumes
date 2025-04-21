import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import TopProductsCard from "./TopProductsCard";

export default function TopProductsSection() {
  const [_, setAnimationClass] = useState("tracking-in-contract-bck");
  const { inView } = useInView({
    threshold: 0,
    rootMargin: "-50px 0px 0px 0px",
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      setAnimationClass("tracking-in-contract-bck");
    } else {
      setAnimationClass("blur-out-expand-fwd");
    }
  }, [inView]);

  const topProducts = [
    {
      title: "Rose Goldea",
      price: "$150",
      image: "/perfume-bottle-1.png",
      direction: "ltr" as "ltr" | "rtl",
      bgImage: "/log-flower.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, reiciendis facere doloremque alias soluta, animi optio fugit molestiae similique necessitatibus modi, dignissimos eos! Ipsa dolorem eligendi maxime omnis aperiam explicabo.",
    },
    {
      title: "Monique Lhuillier",
      price: "$250",
      image: "/perfume-bottle-3.png",
      direction: "rtl" as "ltr" | "rtl",
      bgImage: "/log-flower-2.png",
      marginTop: "-300px",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, reiciendis facere doloremque alias soluta, animi optio fugit molestiae similique necessitatibus modi, dignissimos eos! Ipsa dolorem eligendi maxime omnis aperiam explicabo.",
    },
    {
      title: "Valentino",
      price: "$350",
      image: "/perfume-bottle-2.png",
      direction: "ltr" as "ltr" | "rtl",
      bgImage: "/log-flower-3.png",
      marginTop: "-400px",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, reiciendis facere doloremque alias soluta, animi optio fugit molestiae similique necessitatibus modi, dignissimos eos! Ipsa dolorem eligendi maxime omnis aperiam explicabo.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="w-[85%] mx-auto">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-4xl text-center kugile border-b-2 border-black tracking-in-expand">
            Top fragrances of this week
          </h1>
          <div className="flex flex-col gap-y-5">
            {topProducts.map((item) => {
              return <TopProductsCard {...item} inView={inView} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
