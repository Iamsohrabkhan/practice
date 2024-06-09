/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Marquee from "react-fast-marquee";
import { AnimatePresence } from "framer-motion";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useTransform } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { animate } from "framer-motion";
import { useMotionValue } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import Lenis from "lenis";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // const [playMarque, setplayMarque] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={Math.random() * 100}
        className="bg-gray-200 overflow-clip"
      >
        {isLoading ? (
          <Loader setIsLoading={setIsLoading} />
        ) : (
          <>
            <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              hasBlendMode={true}
              innerStyle={{
                backgroundColor: "var(--cursor-color)",
              }}
              outerStyle={{
                border: "3px solid var(--cursor-color)",
              }}
            />
            <Header />
            <Hero />
            <Work />
            <div>More room to Scroll.......</div>
          </>
        )}
      </motion.main>
    </AnimatePresence>
  );
};

export default Main;

// eslint-disable-next-line react/prop-types

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className=""
    >
      <div className="container w-[80%] mx-auto flex justify-between items-center py-4">
        <div className=" text-2xl font-bold cursor-hover">Ollie</div>
        <nav className="font-normal [&>li]:list-none flex gap-6">
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/strategy">Strategy</a>
          </li>
          <li>
            <a href="/cases">Cases</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why work with us?</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Let&apos;s work together</a>
          <span className="w-full h-[1px] mt-1 block bg-black" />
        </div>
      </div>
    </motion.div>
  );
};
const Hero = () => {
  const imgRef = useRef();

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start center", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  useMotionValueEvent(scale, "change", (latest) => {
    console.log(latest);
  });
  return (
    <main className="h-svh w-svw py-6 relative">
      <h1 className="[]">
        <span className="text-9xl leading-none font-semibold  relative flex justify-around items-center">
          <span className="block overflow-hidden cursor-hover">
            {["b", "r", "a", "n", "d"].map((char, i) => (
              <motion.span
                initial="initial"
                animate="animate"
                variants={charVariants}
                transition={{
                  duration: 0.6,
                  delay: i * 0.075,
                  type: "tween",
                }}
                key={`char-${i}`}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <p className="text-sm font-semibold max-w-64 cursor-hover">
            {"We are specialised in setting up the foundation of your brand and setting you up for success."
              .split(" ")
              .map((letter, i) => (
                <span key={i} className="overflow-hidden inline-block ">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.6, delay: 0.075 * i }}
                  >
                    {letter}&nbsp;
                  </motion.span>
                </span>
              ))}
          </p>
        </span>

        <Marquee
          speed={100}
          delay={1}
          className="text-[15rem] leading-none tracking-wider overflow-clip"
        >
          <motion.span className=" cursor-hover">
            {["e", "x", "p", "e", "r", "i", "e", "n", "c", "e"].map(
              (char, i) => (
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: { y: "100%" },
                    animate: { y: "0%" },
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.075 * i,
                    type: "tween",
                  }}
                  key={`char-${i}`}
                  className="inline-block overflow-clip "
                >
                  {char}
                </motion.span>
              )
            )}
          </motion.span>
        </Marquee>

        <span className="text-[10rem] leading-none text-center font-semibold block relative z-10">
          <span className="block overflow-hidden">
            {["s", "t", "u", "d", "i", "o"].map((char, i) => (
              <motion.span
                initial="initial"
                animate="animate"
                variants={charVariants}
                transition={{
                  duration: 0.6,
                  delay: i * 0.075,
                  type: "tween",
                }}
                key={`char-${i}`}
                className="inline-block cursor-hover"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </span>
      </h1>
      <div className="container mx-auto -mt-12 relative">
        <motion.span
          className=" absolute top-0 left-12 z-20 flex justify-center items-center size-24 text-sm bg-white rounded-full"
          initial={{ scale: 0, y: "-50%" }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          style={{ opacity }}
        >
          Scroll down
        </motion.span>

        <motion.img
          ref={imgRef}
          src={Images[3]}
          className="h-[30rem] w-full object-center object-cover"
          alt=""
          layoutId="banner-image"
          transition={{ duration: 0.9, ease: "linear" }}
          style={{ scale, opacity: imgOpacity }}
        />
      </div>
    </main>
  );
};
const Loader = ({ setIsLoading }) => {
  return (
    <motion.div
      className="h-screen w-full !overflow-clip"
      initial="hidden"
      animate="show"
      exit="exit"
      variants={{
        show: {
          transition: {
            staggerChildren: 0.35,
          },
        },
      }}
      onAnimationComplete={() => {
        setIsLoading(false);
      }}
    >
      <Picture
        className="top-1/2 left-1/4 w-64 aspect-square -translate-x-1/4 translate-y-[10%]"
        src={Images[0]}
      />

      <motion.div className="absolute object-scale-down object-center top-1/2 left-1/2 w-[30rem] -translate-x-1/2 -translate-y-1/2 z-10">
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 100 },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.6,
              },
            },
          }}
          src={Images[3]}
          alt={""}
          className="w-full h-full"
          layoutId="banner-image"
        />
      </motion.div>
      <Picture
        className="top-1/2 left-1/2 w-64 aspect-square translate-x-1/2 translate-y-[10%]"
        src={Images[2]}
      />
      <Picture
        className="top-1/4 left-1/2 w-64 aspect-square translate-x-1/2 -translate-y-1/2"
        src={Images[1]}
      />
      <Picture
        className="top-1/4 left-1/4 w-64 aspect-square -translate-x-1/4 -translate-y-1/2"
        src={Images[4]}
      />
    </motion.div>
  );
};
const Picture = ({ src, alt, className = "" }) => (
  <motion.div
    className={twMerge("absolute object-scale-down object-center", className)}
  >
    <motion.img
      variants={{
        hidden: { opacity: 0, y: 100 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.6,
          },
        },
        exit: {
          opacity: 0,
          y: -200,
          transition: {
            ease: "easeInOut",
            duration: 0.8,
          },
        },
      }}
      src={src}
      alt={alt || ""}
      className="w-full h-full"
    />
  </motion.div>
);

const Work = () => {
  return (
    <div className="mt-64">
      <div className="container mx-auto ">
        <h2 className="text-7xl text-center font-bold cursor-hover">
          Our Work
        </h2>
        <div className="flex flex-col">
          <ParralaxPicture
            src={
              "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            yEnd={"150%"}
            className="self-end"
            left={"30%"}
          />
          <ParralaxPicture
            src={
              "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            yEnd={"-150%"}
            left={"30%"}
            className="self-start"
          />
          <ParralaxPicture
            src={
              "https://images.unsplash.com/photo-1576033897961-a9ee9479d78e?q=80&w=1523&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            yEnd={"-200%"}
            left={"30%"}
            className="self-center"
          />
        </div>
      </div>
    </div>
  );
};
const ParralaxPicture = ({ src, alt, yEnd, left, className = "" }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", yEnd]);
  const leftT = useTransform(scrollYProgress, [0, 1], ["0%", left]);
  return (
    <motion.img
      src={src}
      ref={ref}
      className={twMerge(
        "w-80 aspect-square  object-center object-cover mt-10 relative inline-block",
        className
      )}
      style={{ y, leftT }}
      alt={alt || ""}
    />
  );
};

const charVariants = {
  initial: { y: "100%" },
  animate: { y: "0%" },
};

const Images = [
  "image-3.webp",
  "image-1.webp",
  "image-4.webp",
  "image-2.webp",
  "image-5.webp",
];
