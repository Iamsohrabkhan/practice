import { useSpring } from "framer-motion";
import { useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import {
  animate,
  useMotionValue,
  useMotionValueEvent,
  motion,
  useVelocity,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Velocity = () => {
  // const x = useMotionValue(0);
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x=useTransform(scrollYProgress,[0,1],["10%","-50%"])
  const xVelocity=useVelocity(x)
  // useEffect(() => {
  //   animate(x, 100, {
  //     duration: 3,

  //   });
  // }, [x]);
  // useMotionValueEvent(xVelocity, "change", (latest) => {
  //   console.log({ latest });
  // });

  return (
    <>
      <div className=" h-screen bg-red-50"></div>

      <section
        ref={ref}
        className=" relative h-screen flex overflow-x-clip items-center"
      >
        <motion.div
          className="box py-6 px-3 font-bold text-nowrap text-[192px] uppercase"
          style={{ x :xVelocity}}
        >
          Framer framer Framer
        </motion.div>
      </section>

      <div className=" h-screen bg-yellow-50"></div>
    </>
  );
};

export default Velocity;
