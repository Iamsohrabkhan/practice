import {
  useMotionValue,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

const DragableSlider = () => {
  const imagesRef = useRef();
  const x = useMotionValue(0);
  const t1 = useTransform(x, [286, -286], ["100%", "0%"]); // 286 is the half of the width of the imagesRef - width of vertical line
  const t2 = useTransform(x, [-286, 286], ["100%", "0%"]);
  const clipPath1 = useMotionTemplate`inset(0 0 0 ${t1})`;
  const clipPath2 = useMotionTemplate`inset(0 ${t2} 0 0)`;

  return (
    <section className="h-svh w-full flex justify-center items-center ">
      <div
        className="relative w-[36rem] h-96 rounded-md active:cursor-grabbing"
        ref={imagesRef}
      >
        <motion.img
          style={{ clipPath: clipPath1 }}
          className="object-cover object-center w-full h-full absolute inset-0 rounded-md"
          src="https://images.unsplash.com/photo-1565996939960-f42172c9e2bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
          alt=""
        />
        <motion.img
          style={{ clipPath: clipPath2 }}
          className="object-cover object-center w-full h-full absolute inset-0 rounded-md"
          src="https://images.unsplash.com/photo-1572297259518-0974576b6738?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          alt=""
        />
        <motion.div
          drag="x"
          dragConstraints={imagesRef}
          dragElastic={0}
          dragMomentum={false}
          style={{ x }}
          className="w-1 h-full bg-black absolute left-[calc(50%-2px)] cursor-grab active:cursor-grabbing pointer-events-auto"
        />
          
      </div>
    </section>
  );
};
export default DragableSlider;
