import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Cursor } from "../src/components/cursor";
import TextAnimation from "../src/components/textanimation";
import { useRef } from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import { useSpring } from "framer-motion";

const Roof = () => {
  const heroRef = useRef();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    // smooth: 4,
  });
  const scrollYProgressSmooth = useSpring(scrollYProgress, {
    mass: 0.2,
  });
  const transfromValue = [0, 0.45, 0.9];
  const width = useTransform(scrollYProgressSmooth, transfromValue, [
    "50svw",
    "90svw",
    "100svw",
  ]);
  const height = useTransform(scrollYProgressSmooth, transfromValue, [
    "50svh",
    "90svh",
    "100svh",
  ]);
  const y = useTransform(scrollYProgressSmooth, [0, 0.4], ["-20%", "0%"]);

  // useMotionValueEvent(scrollYProgress, "change", (l) => {
  //   console.log("🚀 ~ useMotionValueEvent ~ scrollYProgress:", l);
  //   console.log(`width: ${width.get()}, height: ${height.get()}`);
  // });
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <main
      style={{
        background: "#d4d1cd",
      }}
    >
      <Cursor />
      <header className="fixed inset-0  h-[var(--header-row-height)] bg-[#363633] z-50">
        <div className=" container py-6">
          <div className=" flex items-center justify-between text-2xl ">
            <div className="logo text-[#2d2d2b]  ">Klindworth</div>
            <button className="bg-slate-200  w-40 h-40 rounded-xl inline-block">
              <div className="space-y-2">
                <div className="w-24 h-2 bg-black" />
                <div className="w-24 h-2 bg-black" />
                <div className="w-24 h-2 bg-black" />
              </div>
            </button>
            <button className="cta cursor-chat">Lets talk</button>
          </div>
        </div>
      </header>

      {/* hero  */}

      <section
        ref={heroRef}
        className=" h-[500svh] overflow-x-clip "
        style={{ height: "250svh" }}
      >
        <div className="hero-content h-svh flex  justify-center items-center flex-col sticky top-0">
          <h1 className="uppercase text-7xl text-center font-black ">
            <TextAnimation className="">roofing</TextAnimation>
            <TextAnimation startDelay={0.02}>& repairs</TextAnimation>
          </h1>
        </div>
        <motion.div
          className="img-wrapper sticky top-0 left-0 right-0 bottom-0 mx-auto "
          style={{ width, height, y }}
          // style={{ width: "100svw", height: "100svh",y:"-20%" }}
        >
          <img
            src="image-2.webp"
            className="absolute w-full h-full object-cover"
            alt=""
          />
        </motion.div>
      </section>
      <section
        className=" h-svh relative z-50 bg-slate-200 container"
        // style={{ backgroundColor: "#f7f7" }}
      >
        <h2 className="text-5xl">Cards</h2>
        <div className="grid grid-cols-2 gap-12 mt-12">
          <div className="card p-2 cursor-view cursor-none space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-1.webp"
              alt=""
            />
            <h2 className="uppercase">HOLISTOKEN</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5 cursor-none">
              branding
            </button>
          </div>
          <div className="card p-2 cursor-view cursor-none space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-2.webp"
              alt=""
            />
            <h2 className="uppercase">munkin</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5 cursor-none">
              branding
            </button>
          </div>
          <div className="card p-2 cursor-view cursor-none space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-3.webp"
              alt=""
            />
            <h2 className="uppercase">volkswegen</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5 cursor-none">
              branding
            </button>
          </div>
          <div className="card p-2 cursor-chat cursor-none space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-5.webp"
              alt=""
            />
            <h2 className="uppercase">bod</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5 cursor-none">
              branding
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roof;
