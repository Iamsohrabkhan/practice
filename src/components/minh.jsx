/* eslint-disable react/prop-types */
import { useMotionTemplate } from "framer-motion";
import { animate } from "framer-motion";
import {
  motion,
  useTransform,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
const Event = () => {
  return (
    <>
      <section className="h-screen flex uppercase justify-center items-center text-5xl bg-black text-white">
        scroll to see some animation
      </section>
      <section className="bg-black min-h-screen">
        <div className="container px-12">
          <h1 className="uppercase text-base text-[#b7ab98]">What I DO</h1>
          <ul className="flex flex-col ">
            <Li paragraph="I create stunning three-dimensional visuals that bring your concepts to life.">
              3d
            </Li>
            <Li paragraph="I design captivating visuals that make a lasting impression.">
              visual
            </Li>
            <Li paragraph="I infuse energy into your content with seamless and engaging motion design.">
              motion
            </Li>
            <Li paragraph="I showcase your products in the best light, highlighting their unique features.">
              product
            </Li>
            <Li paragraph="I provide clear and concise tutorials that make learning enjoyable and accessible.">
              tutorial
            </Li>
          </ul>
        </div>
      </section>
      <section className="h-screen flex justify-center items-center text-9xl bg-black text-white ">
        ...
      </section>
    </>
  );
};

export default Event;

const Li = ({ children, paragraph }) => {
  const ref = useRef();
  const [hover, sethover] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const t1 = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const clipPath = useMotionTemplate`inset(0 ${t1} 0 0)`;
  useMotionValueEvent(scrollYProgress, "change", (l) => {
    console.log(l);
  });

  return (
    <motion.li
      className="uppercase text-[104px] leading-[0.9] relative space-grotest"
      ref={ref}
      onHoverEnd={() => {
        sethover(false);
      }}
      onHoverStart={() => {
        sethover(true);
        animate(
          ".cursor-pointer",
          { clipPath: "inset(50% 0 50% 0)" },
          { duration: 0.3, ease: "linear" }
        );
      }}
    >
      <span className="absolute top-0 left-0 right-0 text-[#b7ab9886]  font-bold  ">
        {children}
      </span>
      <motion.span
        className="absolute top-0 left-0 right-0  font-bold inline-block w-fit h-full text-[#eb5939] "
        style={{
          clipPath,
        }}
      >
        {children}
      </motion.span>

      <motion.span
        className="absolute top-0 left-0 right-0  font-bold inline-block h-full bg-[#eb5939] text-black cursor-pointer  "
        initial={false}
        animate={{ clipPath: !hover ? "inset(50% 0 50% 0)" : "inset(0 0 0 0)" }}
        transition={{ type: "tween", duration: 0.3, ease: "linear" }}
      >
        {children}
        <p className="absolute right-24  top-1/2 -translate-y-1/2  font-bold text-sm max-w-96 ">
          {paragraph}
        </p>
      </motion.span>
      <Hr />
    </motion.li>
  );
};

const Hr = () => <span className="bg-[#b7ab98] h-[1px] w-full inline-block " />;
