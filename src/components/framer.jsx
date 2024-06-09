import { useMotionValueEvent } from "framer-motion";
import { useMotionValue } from "framer-motion";
import { animate, motion } from "framer-motion";

const Framer = () => {
  const x = useMotionValue(-400);

  const animation = animate(x, 400, {
    duration: 7,
    // type: "spring",
    repeat: Infinity,
    repeatType: "loop",
  });
  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log(`Latest: ${latest}`);
  // });

  return (
    <section className="h-svh w-svw flex justify-center items-center relative">
      <div>
        <motion.div
          style={{ x }}
          className="text-4xl font-bold h-10 w-20 bg-red-400"
        ></motion.div>

        <div className="absolute bottom-12">
          <motion.button
            className="text-lg bg-pink-400 py-2 px-3 rounded-xl cursor-pointer block mt-4"
            onClick={() => {
           
              // animation.speed = -1;
              console.log({animation});
            }}
            onHoverStart={() => {
              // animation.pause()
              animation.speed=1;
              console.log(animation.duration)

            }}
            onHoverEnd={() => {
              // animation.play()
              animation.speed=-2

            }}
          >
            Button
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Framer;
