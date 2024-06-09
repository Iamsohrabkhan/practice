import "./marque.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { twMerge } from "tailwind-merge";

function ParallaxText({ children, baseVelocity = 100, className }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="!overflow-x-clip">
      <div
        className={twMerge(
          "relative overflow-x-clip tracking-tighter leading-[0.8] mt-0 whitespace-nowrap flex flex-nowrap  w-screen  ",
          className
        )}
      >
        <motion.div
          className=" whitespace-nowrap flex flex-nowrap"
          style={{ x }}
        >
          <span className="block mr-8">{children} </span>
          <span className="block mr-8">{children} </span>
          <span className="block mr-8">{children} </span>
          <span className="block mr-8">{children} </span>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* <section className="overflow-x-clip h-screen relative w-screen ">
        <img
          src="https://dennissnellenberg.com/assets/img/DSC07033.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center -z-50 "
          alt=""
        />
        <ParallaxText
          className="text-white font-semibold capitalize  text-9xl absolute bottom-12"
          baseVelocity={-3}
        >
          Dennis - snellenberg
        </ParallaxText>
      </section> */}
      <div className="h-screen w-sreen ">
        <div className="container mx-auto py-36 flex justify-center items-center flex-col ">
          <p className="bg-purple-300 py-2 px-4 rounded-xl">
            Over 3 milllion ready to work
          </p>
          <h1 className="text-center text-balance leading-none mt-12">
            Work With top World&apos;s top <br /> creative talent
          </h1>
          <p className="text-lg mt-3">
            Connect with millions of top rated designers and word agency around
            the world.
          </p>
          <button className="capitalize bg-black rounded-xl py-3 px-6 text-white mt-3">
            Start hiring today
          </button>
          <ParallaxText
            className=" font-semibold capitalize text-7xl mt-12 "
            baseVelocity={-3}
          >
           {/* &nbsp;&nbsp; Innovative &nbsp;&nbsp; Reliable &nbsp;&nbsp; Creative &nbsp;&nbsp; Efficient &nbsp;&nbsp; Global */}
           Let&apos;s Work Together
          </ParallaxText>
        </div>
      </div>
    </>
  );
}
