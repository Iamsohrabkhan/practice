import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { useState } from "react";

const AnimatePresenceComponent = () => {
  const Tabs = ["Tab-1", "Tab-2", "Tab-3", "Tab-4", "Tab-5"];
  const colors = ["green", "orange", "blue", "purple", "pink"];
  const [selectedColor, setSelectedColor] = useState(1);

  return (
    <section className="container px-16 overflow-hidden h-screen">
      <div className="tabs">
        <ul className="flex justify-center items-center py-6 gap-12 text-lg">
          {Tabs.map((tab, i) => (
            <motion.li
              className="relative  px-4 cursor-pointer py-1"
              key={tab}
              onTap={() => {
                setSelectedColor(i);
              }}
            >
              {selectedColor === i && (
                <motion.div
                  layoutId="pill"
                  transition={{ duration: 0.9, type: "spring" }}
                  className="absolute inset-0 w-full h-full  rounded-xl -z-10 bg-sky-200"
                />
              )}
              {tab}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center mt-36 ">
        <MotionConfig transition={{ duration: 0.3, y: { duration: 1 } }}>
          <AnimatePresence mode="wait">
            {selectedColor && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={{
                  initial: {
                    opacity: 0,
                    y: "100%",
                  },
                  animate: { opacity: 1, y: 0 },
                  exit: {
                    opacity: 0,
                    y: "-100%",
                  },
                }}
                transition={{ when: "afterChidren", duration: 0.5 }}
                key={selectedColor}
                className="size-52 flex justify-center items-center uppercase text-xl text-white rounded-md"
                style={{ backgroundColor: colors[selectedColor] }}
              >
                <div>
                  <motion.p
                    variants={{
                      initial: { scale: 0 },
                      animate: { scale: 1 },
                      exit: { scale: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="bg-white text-black size-24 rounded-full flex justify-center items-center"
                  >
                    {colors[selectedColor]}
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </MotionConfig>
      </div>
    </section>
  );
};

export default AnimatePresenceComponent;
