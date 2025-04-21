import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { AnimatedText } from "./AnimatedText";
import { Facebook } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="w-full border-b">
      <nav className="w-[90%] mx-auto px-4 py-4 flex items-center justify-between">
        {/* <NavigationMenuItem> */}
        <a href="/" className="text-lg font-semibold">
          <img src="/logo.png" width={70} alt="" />
        </a>
        {/* </NavigationMenuItem> */}

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
      </nav>
    </div>
  );
};
