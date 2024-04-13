import { useMotionValue, animate, motion } from "framer-motion";
import {  useEffect } from "react";

export default function Marque() {
  const xTranslate = useMotionValue(0);
  useEffect(() => {
    animate(xTranslate, -192*6, {
      duration: 5,
      repeat:Infinity,
      repeatDelay:0,
      repeatType:"loop"
    });
  }, []);

  return (
    <>
      <div className=" font-bold underline text-red-300 h-screen w-full container mx-auto" />
      <div className="flex justify-center items-center ">
        <div className="overflow-clip">
          <motion.ul  style={{ x: xTranslate }} className="flex gap-2">
            {images.map((it,i) => (
              <li className="grow-0 flex-none" key={`${it}-${i}`}>
                <img
                  className="size-48 rounded-xl  object-cover object-center"
                  src={it}
                  alt=""
                />
                <p className="text-center bg-red-200 p-1">Picture-{i}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="text-3xl font-bold underline text-red-300 h-screen w-full" />
    </>
  );
}

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.png",
  "img5.jpg",
  "img6.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.png",
  "img5.jpg",
  "img6.jpg",
];
