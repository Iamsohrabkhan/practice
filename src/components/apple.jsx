import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
  useAnimationControls,
} from "framer-motion";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
const Apple = () => {
  const [first, setFirst] = useState("inactive");
  return (
    <>
      <Header />
      <Hero />

      {/* Crousel and marque  */}
      <motion.section
        animate={first}
        className="relative -z-10  bg-black  overflow-clip"
      >
        <Crousel setFirst={setFirst} />
        <Marque setFirst={setFirst} />
      </motion.section>

      {/* <div className="h-screen bg-red-100"></div> */}
    </>
  );
};

export default Apple;

const Crousel = ({ setFirst }) => {
  const crouselRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: crouselRef,
    offset: ["start start", "end end"],
  });
  const centerImageScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.67],
    [3, 3, 2.5, 1]
  );

  useMotionValueEvent(scrollYProgress, "change", (progess) => {
    console.log("progress", progess);
    if (progess >= 0.67) {
      setFirst("active");
    } else {
      setFirst("inactive");
    }
  });
  return (
    <div ref={crouselRef} className="relative h-[300vh] -mt-[100vh]">
      <div className=" h-screen sticky top-0  flex items-center">
        <div className="flex gap-2 -translate-x-[20%] md:-translate-x-1/4">
          <motion.div
            className="shrink-0 flex-none md:w-[60vw] w-64 aspect-[9/16]  md:aspect-video relative"
            variants={{
              inactive: { opacity: 0, x: -20 },
              active: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              className="absolute w-full h-full object-cover object-center rounded-lg "
              src={images[0]}
              alt=""
            />
          </motion.div>
          <motion.div
            className="shrink-0 flex-none w-64 md:w-[60vw] aspect-[16/9]  md:aspect-video relative z-10"
            style={{ scale: centerImageScale }}

          >
            <img
              className="absolute w-full h-full object-cover object-center rounded-lg "
              src={images[2]}
              alt=""
            />
            <motion.div className="absolute text-white  font-bold bottom-6 left-6 right-6 z-50 flex max-w-[90%] mx-auto justify-between"
            variants={{inactive:{opacity:0}, active:{opacity:1}}}
            transition={{duration:0.4}}
            >
              <h3 className="text-4xl capitalize">Best video title ever</h3>
              <Button>Stream Now</Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="shrink-0 flex-none w-64 md:w-[60vw] aspect-video relative"
            variants={{
              inactive: { opacity: 0, x: 20 },
              active: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              className="absolute w-full h-full object-cover object-center rounded-lg "
              src={images[1]}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
const Marque = () => {
  // const containerRef = useRef(null);
  // const scrollerRef = useRef(null);
  // function addAnimation() {
  //   if (containerRef.current && scrollerRef.current) {
  //     const scrollerContent = Array.from(scrollerRef.current.children);

  //     scrollerContent.forEach((item) => {
  //       const duplicatedItem = item.cloneNode(true);
  //       if (scrollerRef.current) {
  //         scrollerRef.current.appendChild(duplicatedItem);
  //       }
  //     });
  //   }
  // }

  // useEffect(() => {
  //   addAnimation();
  // }, []);

  return (
    <motion.div
      className="  space-y-3 py-3 md:py-6 -mt-[calc(100vh-(16rem*16/9))/2] md:-mt-[calc(100vh-(60vw*9/16))/2]"
      variants={{
        inactive: { opacity: 0, y: 20 },
        active: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
      // ref={containerRef}
    >
      <div className="overflow-clip">
        <div className=" flex  gap-3  animate-crousel-move">
          {generateOrderImages(images).map((src, index) => (
            <div className="shrink-0" key={index}>
              <img
                className="w-[300px] lg:w-[20vw] aspect-video rounded-lg object-cover object-center"
                src={src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-clip [--duration:40s]">
        <div className=" flex  gap-3  animate-crousel-move">
          {generateOrderImages(images).map((src, index) => (
            <div className="shrink-0" key={index}>
              <img
                className="w-[300px] lg:w-[20vw] aspect-video rounded-lg object-cover object-center"
                src={src}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Button = ({ children, className = "" }) => {
  return (
    <button
      className={twMerge(
        "bg-white cursor-pointer hover:opacity-90 text-black py-0.5 px-3 font-medium rounded-3xl text-lg w-fit",
        className
      )}
    >
      {children}
    </button>
  );
};
const FadeIn = ({ children }) => {
  return (
    <motion.p
      className="max-w-4xl mx-auto"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ margin: "100% 0px -300px 0px" }} //top left bottom right
    >
      {children}
    </motion.p>
  );
};

const Header = () => {
  return (
    <>
      <header className=" bg-black h-[var(--header-row-height)] text-white relative z-50 flex  items-center">
        <div className="container mx-auto px-4">
          <img src="/logo.svg" className="size-12 invert" alt="" />{" "}
        </div>
      </header>
      <nav className="bg-black h-[var(--header-row-height)] text-white sticky top-0 left-0 z-50 flex  items-center">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span className="block font-bold">Apple TV +</span>
          <Button className="relative z-[60]">Stream Now</Button>
        </div>
      </nav>
    </>
  );
};
const Hero = () => {
  const mainContainer = useRef();
  const { scrollYProgress } = useScroll({
    target: mainContainer,
    offset: ["start start", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("sroci", latest);
    if (latest > 0.07) {
      control.start("hidden");
    } else {
      control.start("visible");
    }
  });
  const heroImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.5],
    [0.2, 0.5, 0.5, 1]
  );
  const control = useAnimationControls();
  return (
    <main className="relative overflow-x-clip" ref={mainContainer}>
      {/* hero section  */}
      {/* Hero Image  */}
      <div className="sticky -mt-[var(--header-height)] h-svh w-full  inset-0 ">
        <video
        autoPlay
        loop
        poster="heroimg1.jpg"
          alt=""
          className="w-full h-full object-cover object-center rounded-lg shrink-0 flex-none"
        >
          <source src="applevid.mp4" type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg"></source> */}
        </video>
        <motion.div
          className="absolute inset-0 w-full h-full bg-black"
          style={{ opacity: heroImageOpacity }}
        />
      </div>
      {/* hero content  */}
      <div className="absolute h-screen w-screen inset-0  z-50  ">
        <motion.div
          className=" container  px-12 mx-auto text-white h-full w-full flex justify-end flex-col"
          // style={{ opacity: heroTextOpacity }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: 0.075 }}
          animate={control}
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-12">
            All Apple Originals. <br />
            Only on Apple Tv+
          </h1>
          <Button className="mb-24 py-3 px-4">Stream Now</Button>
          <footer className="text-white text-lg mb-2">
            Watch on the 🍎tv app
          </footer>
        </motion.div>
      </div>
      {/* usps  */}
      <div className=" text-white py-12 px-8 text-4xl md:text-5xl max-w-5xl font-bold z-30 relative container mx-auto space-y-12">
        <FadeIn>New Apple Originals everymonth _ always ad-free.</FadeIn>
        <FadeIn>
          Stream on the Apple TV app on Apple devices, smart TVs, Consoles, or
          sticks.
        </FadeIn>
        <FadeIn>Watch in the 4K HDR video with immersive Spacial Audio.</FadeIn>
        <FadeIn>Share single subcription with upto five people.</FadeIn>
      </div>
    </main>
  );
};

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/heroimg.jpg",
  "/heroimg1.jpg",
];

const generateOrderImages = (images) => {
  const shuffledImages = [...images, ...images].sort(() => Math.random() - 0.5);
  return shuffledImages;
};
