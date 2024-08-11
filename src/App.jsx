// import Cursor from "./cursor";
import { useEffect } from "react";
import Lenis from "lenis";
import Vingea from "./components/vingea";
import MaskCursor from "./components/maskCursor";
import Menu from "./components/awwwardswiningmenu";
import DragableSlider from "./components/dragableSlider";
import Gallery from "./components/Gallery";
// import TextAnimation from "./components/textanimation";
// import ToggleButton from "./components/toggleButton";
// import Marque from "./components/marque";
// import Marque2 from "./components/marque2";
// import { ImageTrail } from "./components/imagetrail";
// import Framer from "./components/framer";
// import Preloader from "./components/preloader";
// import Step from "./components/wizard";
// import AnimatedTabs from "./components/tabs";
// import Apple from "./components/apple";
// import Roof from "../ui/roof";
// import Velocity from "./components/velocity";
// import {Pagetransition} from "./components/pagetransition";
// import Sidebar from "./components/sidebar";
// import AnimatePresenceComponent from "./components/animatePresence";
// import HorizentalLine from "./components/horizentalline";

// import Svganimations from "./components/svganimations";

// import Work from "./components/work";

// import AnimatedNavbar from "./components/AnimatedNavbar";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* <Marque /> */}
      {/* <Marque2 /> */}
      {/* <Cursor/> */}
      {/* <Apple/> */}
      {/* <AnimatedTabs/> */}
      {/* <Step /> */}
      {/* <Preloader/> */}
      {/* <Framer/> */}
      {/* <ImageTrail/> */}
      {/* <ToggleButton/> */}
      {/* <TextAnimation/> */}
      {/* <Cursor/> */}
      {/* <Roof /> */}
      {/* <Velocity/> */}
      {/* <AnimatePresenceComponent/> */}
      {/* <HorizentalLine/> */}
      {/* <AnimatedNavbar /> */}
      {/* <Sidebar/> */}
      {/* <Pagetransition /> */}
      {/* <Work/> */}
      {/* <TorqueEdition/> */}
      {/* <LayoutAnimation/> */}
      {/* <Event/> */}
      {/* <Vingea /> */}
      {/* <MaskCursor /> */}
      {/* <Menu/> */}
      <DragableSlider />
      {/* <Gallery/> */}
      {/* <Svganimations/> */}
      {/* <Marque3/> */}
      {/* <div className="h-screen w-screen bg-red-400"></div> */}
    </>
  );
};

export default App;
