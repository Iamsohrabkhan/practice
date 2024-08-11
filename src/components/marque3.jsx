/* eslint-disable react/prop-types */

import {
  useAnimate,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect } from "react";

/* eslint-disable no-unused-vars */

const Marque3 = ({ children = "This is Marque" }) => {
  const [scope, animate] = useAnimate();
  const { scrollY } = useScroll();
  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (e.deltaY > 0) {
        animate(
          ".marque-inner",
          {
            x: "-50%",
          },
          {
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 0,
            // onUpdate(l){console.log(l)},
            onPlay(){console.log("plat");},
            // onRepeat(){console.log("repeaet");},
            
          }
        );
      } else {
        animate(
          ".marque-inner",
          {
            x: "-0%",
          },
          {
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 0,
          }
        );
      }
    });
  }, []);

  return (
    <>
      <section className="relative w-full h-svh overflow-x-clip">
        <img
          src="https://images.unsplash.com/photo-1487088678257-3a541e6e3922?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhY2tncm91bmQlMjBmb3IlMjB3ZWJzaXRlfGVufDB8fDB8fHww"
          className="object-cover object-center w-full h-full absolute inset-0 -z-20"
          alt=""
        />
        <span
          className="bg-black/50 -z-10 w-full h-full absolute inset-0"
          alt=""
        />

        <div className="marque-wrapper" ref={scope}>
          <motion.div className="marque-inner absolute left-0 right-0 bottom-12 ">
            <ul className="inline-flex flex-nowrap whitespace-nowrap text-white text-8xl font-normal ">
              <li className="flex-shrink-0 mx-4 text-nowrap ">{children}</li>
              <li className="flex-shrink-0 mx-4 text-nowrap ">{children}</li>
              <li className="flex-shrink-0 mx-4 text-nowrap ">{children}</li>
              <li className="flex-shrink-0 mx-4 text-nowrap ">{children}</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <div className="h-svh"></div>
    </>
  );
};

export default Marque3;
