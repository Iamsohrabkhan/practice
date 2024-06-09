import { cubicBezier } from "framer-motion";
import { useAnimationControls } from "framer-motion";
import { useAnimate, stagger, motion } from "framer-motion";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [scope, animate] = useAnimate();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active) {
      animate([
        [".sidebar", { x: ["100%", 0], opacity: [0, 1] }, { duration: 0.6 }],
        ["img", { opacity: [0, 0.4] }, { duration: 0.9, at: "-0.4" }],
        [
          ".list-child",
          { y: ["100%", 0] },
          {
            at: "<",
            delay: stagger(0.025),
            duration: 0.25,
            type: "tween",
            ease: "easeOut",
          },
        ],
      ]);
    } else {
      animate([
        [
          ".sidebar",
          { opacity: [1, 0] },
          { duration: 0.3, type: "tween", ease: "easeInOut" },
        ],
      ]);
    }
  }, [active]);

  return (
    <nav ref={scope} className="fixed inset-0 h-screen  w-full bg-black ">
      <button
        className="size-16  bg-[#bfbfb1] rounded-full absolute right-10 top-10 z-40  flex justify-center items-center flex-col hover:scale-90 duration-300 ease-in-out transition-all"
        onClick={() => {
          setActive(!active);
        }}
      >
        <motion.span
          intial={false}
          animate={{
            rotate: active ? 45 : 0,
            transition: {
              type: "spring",
            },
          }}
          className="w-7 h-0.5 inline-block bg-black absolute"
        />
        <motion.span
          intial={false}
          animate={{
            rotate: active ? -45 : 0,
            y: active ? 0 : 6,
            transition: {
              type: "spring",
            },
          }}
          className="w-7 h-0.5 inline-block bg-black absolute "
        />
      </button>
      <motion.aside
        style={{ x: "100%" }}
        className="sidebar absolute right-0 top-1 bottom-1 bg-[#3c3936] h-[99vh] max-w-2xl w-[30rem] rounded-md"
      >
        <motion.img
          intial={{ opacity: 0 }}
          className="circle absolute top-0 right-0 "
          src="\circle.svg"
          alt=""
        />

        <ul className="space-y-3 text-white text-6xl font-extrabold  absolute top-1/2 -translate-y-1/2  left-10 uppercase [&>li]:cursor-pointer ">
          <Li>Home</Li>
          <Li>About</Li>
          <Li>Work</Li>
          <Li>Services</Li>
          <Li>Blog</Li>
        </ul>
      </motion.aside>
    </nav>
  );
};

const Li = ({ children }) => {
  const dotControl = useAnimationControls();
  return (
    <motion.li
      animate={dotControl}
      onHoverStart={() => {
        dotControl.start("final");
      }}
      onHoverEnd={() => {
        dotControl.start("hidden");
      }}
      className="flex  items-center gap-2 overflow-y-clip"
    >
      <motion.span
        variants={{
          hidden: { width: 0, height: 0 },
          final: { width: 16, height: 16 },
        }}
        className="rounded-full  bg-white"
      />
      <span className="">
        {`${children}`.split("").map((char, i) => (
          <span className="list-child inline-block" key={i}>
            {char}
          </span>
        ))}
      </span>
    </motion.li>
  );
};
export default Sidebar;
