import "./App.css";
import { Navbar } from "./components/Navbar";
import HeroText from "./components/text/HeroText";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <Navbar />
      <div className="min-w-full min-h-full py-8">
        <img
          src="/lavender.png"
          className="absolute -top-20 z-0 rotate-130 -left-70 w-[45%]"
          alt=""
        />
        <img
          src="/perfume.png"
          className="absolute top-75 z-0 rotate-30 left-0 w-[30%]"
          alt=""
        />
      </div>
      <div className=" flex flex-col items-center justify-center gap-y-8">
        <HeroText
          styles={{ color: "rgb(117, 74, 153)" }}
          className="dealyo text-[45px]"
        >
          Fragrances that attracts people
        </HeroText>
        {/* <Button style={{ background: "rgb(87, 26, 29)" }}>view more</Button> */}
        <Button style={{ background: "rgb(142, 34, 39)" }} size={"lg"}>
          view more
        </Button>
      </div>
      <img
        src="/rose.png"
        className="absolute top-40 z-0 -scale-x-100 -rotate-60 -right-60 w-[45%]"
        alt=""
      />
    </div>
  );
}

export default App;
