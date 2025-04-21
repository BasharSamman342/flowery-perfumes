import { useInView } from "react-intersection-observer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { AnimatedText } from "./AnimatedText";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50px 0px 0px 0px",
    triggerOnce: false,
  });
  return (
    <div className="h-[65vh] relative mt-24 border-t-2 border-gray-300 py-12">
      <div ref={ref} className=" absolute min-w-full min-h-full py-8">
        <img
          src="/footer-2.png"
          className="absolute -top-11 z-0  -left-20 w-[30%]"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-y-15">
        <a href="/" className="text-lg font-semibold">
          <img src="/logo.png" width={130} alt="" />
        </a>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-center space-x-4">
            <NavigationMenuItem>
              <a href="/#" className="font-medium">
                <AnimatedText delay={400}>Home</AnimatedText>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/#" className="font-medium">
                <AnimatedText delay={300}>Popular perfumes</AnimatedText>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/#" className="font-medium">
                <AnimatedText delay={200}>Shop</AnimatedText>
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/#" className="font-medium">
                <AnimatedText delay={100}>Testimonials</AnimatedText>
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-around gap-x-16">
          <p>©️ Terms 2025 all rights reserved</p>
          <div className="flex items-center justify-center gap-x-4">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="flex items-center justify-center gap-x-4">
            <p>Terms of use</p>
            <p>|</p>
            <p>Privacy policy</p>
          </div>
        </div>
      </div>
      <img
        src="/footer-1.png"
        className="absolute -top-15 z-0 -rotate-20 -right-15 w-[30%]"
        alt=""
      />
      <img
        src="/footer-3.png"
        className="absolute top-30 z-0 right-30 w-[25%]"
        alt=""
      />
    </div>
  );
}
