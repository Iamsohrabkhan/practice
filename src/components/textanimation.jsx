/* eslint-disable react-hooks/exhaustive-deps */
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const TextAnimation = ({
  children = "framer motion",
  className,
  startDelay = 0,
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".text-span",
      { y: 0, skewY: 0, rotate: 0 },
      {
        duration: 0.9,
        type: "spring",
        bounce: 0.4,
        delay: stagger(0.025, {
          ease: [0.32, 0.23, 0.4, 0.9],
          from: 0,
          startDelay,
        }),
      }
    );
  }, []);

  return (
    <div className="h-screen w-screen bg-purple-300 text-purple-600 flex justify-center items-center text-8xl">
      <span
        ref={scope}
        className={twMerge("block text-center  overflow-y-clip", className)}
      >
        {`${children}`.split("").map((char, k) => (
          <motion.span
            className="text-span inline-block leading-none"
            key={k}
            initial={{ y: "100%", skewY: 20, rotate: 90 }}
          >
            {char}
            {char == " " && <>&nbsp;</>}
          </motion.span>
        ))}
      </span>
    </div>
  );
};

export default TextAnimation;
