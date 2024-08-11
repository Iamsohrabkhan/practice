/* eslint-disable react/no-unescaped-entities */
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const MaskCursor = () => {
  const [hover, setHover] = useState(false);
  console.log("🚀 ~ MaskCursor ~ hover:", hover);
  const { x, y } = useMousePosition();

  const size = hover ? 400 : 40;
  return (
    <main className="h-svh bg-black overflow-cli ">
      <div className=" container h-full w-full ">
        <motion.div
          className="mask mask-img flex justify-center items-center w-full h-full   text-6xl leading-[64px] absolute bg-[#ec4e39] text-black [mask-repeat:_no-repeat] pointer-events-none"
          style={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          }}
          animate={{
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p>
            A visual designer - with skills that haven't been replaced by A.I
            (yet) - making good shit only if the paycheck is equally good.
          </p>
        </motion.div>
        <div className="visible-paragraph flex justify-center items-center w-full h-full  text-[#afa18f] text-6xl leading-[64px] cursor-pointer">
          <motion.p
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            I'm a <span className="text-[#ec4e39]">selectively skilled</span>{" "}
            product designer with strong focus on producing high quality &
            impactful digital experience.
          </motion.p>
        </div>
      </div>
    </main>
  );
};

export default MaskCursor;
