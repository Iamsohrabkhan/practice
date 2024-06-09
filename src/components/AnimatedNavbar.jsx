import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedNavbar = () => {
  const [active, setActive] = useState(null);
  return (
    <main className="container grid place-items-center h-screen ">
      <nav
        className="border-2 border-black rounded-full p-1 bg-white"
        onMouseLeave={() => {
          setActive(null);
        }}
      >
        <ul className="flex justify-center items-center gap-1 ">
          <Tabs setActive={setActive} active={active} />
        </ul>
      </nav>
    </main>
  );
};

const Tabs = ({ setActive, active }) => {
  const list = ["Pricing", "Products", "Features", "Docs", "Blog"];

  return (
    <>
      {list.map((curr, i) => {
        return (
          <motion.li
            key={`${curr}-${i}`}
            className="relative  text-2xl rounded-full py-3 px-6 cursor-pointer"
            onHoverStart={() => {
              setActive(i);
            }}
          >
            <span className="w-full h-full text-white mix-blend-difference relative z-10">
              {curr}
            </span>
            <AnimatePresence>
              {active === i && (
                <motion.span
                  layoutId="pill"
                  transition={{ duration: 0.4 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  className="bg-black block absolute inset-0 w-full h-full rounded-full  "
                />
              )}
            </AnimatePresence>
          </motion.li>
        );
      })}
    </>
  );
};

export default AnimatedNavbar;
