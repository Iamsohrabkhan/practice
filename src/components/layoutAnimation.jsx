/* eslint-disable no-unused-vars */
import {
  useMotionValue,
  useMotionValueEvent,
  motion,
  useTransform,
  useScroll,
  useMotionTemplate,
  
} from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

/* eslint-disable react/prop-types */
const LayoutAnimation = () => {
  const [active, setActive] = useState(1);
  console.log("🚀 ~ LayoutAnimation ~ active:", active)

  return (
    <main className="relative space-grotesk h-[300svh]">
      {/* <div className="h-svh w-full flex justify-center items-center text-3xl">
        Room to scroll
      </div> */}
      <Card
        src="https://craftohtml.themezaa.com/images/demo-branding-agency-home-04.jpg"
        number="01"
        heading="Branding and design"
        paragraph="Creating products with a strong identity. Provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive move."
        mainHeading="Whiteline face beauty."
        className=""
        active={1}
        setActive={setActive}
      />
      {/* <div className="h-svh w-full flex justify-center items-center text-3xl">
        Room to scroll
      </div> */}

      <Card
        src="https://craftohtml.themezaa.com/images/demo-branding-agency-home-05.jpg"
        number="02"
        heading="Whiteline face beauty."
        paragraph="We specialize in developing products with a distinct and compelling identity. Our team excels generating brilliant ideas that propel brands to success. Through customized marketing campaigns."
        mainHeading="Whiteline face beauty."
        className="-translate-y-full z-10"
        active={2}
        setActive={setActive}
        
      />
      <Card
        src="https://craftohtml.themezaa.com/images/demo-branding-agency-home-06.jpg"
        number="03"
        heading="Whiteline face beauty."
        paragraph="Creating products with a strong identity. Provide brilliant ideas and adding the world called success brand. We deliver customized marketing campaign to use your audience to make a positive mov."
        mainHeading="Whiteline face beauty."
        className="-translate-y-[200%] z-20"
        active={3}
        setActive={setActive}
      />
    </main>
  );
};

export default LayoutAnimation;

const Card = ({
  src,
  number,
  heading,
  paragraph,
  mainHeading,
  className,
  active,
  setActive,
}) => {
  const value = useMotionValue();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const t1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const t2 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const ty1 = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);



  // polygon(0 100%, 100% 100%, 100% 100%, 0 100%)
  // polygon(0 100%, 100% 100%, 100% 0, 0 0)

  const clipPath = useMotionTemplate`polygon(0 100%, 100% 100%, 100% ${t2}, 0 ${t2})`;
  useMotionValueEvent(scrollYProgress, "change", (l) => {
    if (l>0 && l<1) {
      setActive(active)
    }
    // console.log(l);
  });

  return (
    <motion.div className={twMerge("h-svh w-full sticky top-0", className)} ref={ref}
    style={{y:ty1}}
    >
      <motion.div
        className=" flex  h-full w-full bg-white"
        // style={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
        style={{
          clipPath,
        }}
      >
        <div className="basis-1/2">
          <img
            src={src}
            className="w-full h-full object-cover object-center"
            alt=""
          />
        </div>
        <div className="basis-1/2 ">
          <div className="flex  items-center h-full w-full justify-start">
            <div className="number text-[rgb(29, 29, 29)] text-[170px] opacity-30 font-bold -translate-x-1/2 -translate-y-1/2">
              {number}
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-300 w-fit bg bg-clip-text fill-none mb-2">
                {" "}
                {heading}
              </h1>
              <h2 className="text-5xl font-bold mb-2">{mainHeading}</h2>
              <p className="text-3xl">{paragraph}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
