import { motion } from "framer-motion";
import { useState } from "react";

const Gallery = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="grid grid-cols-4 gap-4 grid-flow-row container place-items-center py-24 h-screen ">
      {images.map(({ src, id, title }, i) => (
        <motion.img
          key={id}
          className={`object-center object-cover rounded-md cursor-pointer ${
            active === i
            ? "order-first col-span-2 row-span-2 w-full h-[calc(24rem+16px)] relative z-50"
            : "w-96 h-48 "
          }`}
          onClick={() => setActive(i)}
          layout
          src={src}
          alt={title}
          transition={{
            duration: 0.4,
            ease: "linear",
            type: "tween",
          }}
        />
      ))}
    </section>
  );
};

export default Gallery;

const images = [
  {
    id: 0,
    title: "Modern Office Setup",
    src: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "Creative Workspace",
    src: "./image-1.webp",
  },
  {
    id: 2,
    title: "Corporate Meeting Room",
    src: "./image-2.webp",
  },
  {
    id: 3,
    title: "Stylish Home Office",
    src: "./image-3.webp",
  },
  {
    id: 4,
    title: "Productive Work Environment",
    src: "https://images.unsplash.com/photo-1721807578532-dc1756624727?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Minimalist Office Design",
    src: "./image-4.webp",
  },
  {
    id: 6,
    title: "Collaborative Workspace",
    src: "./image-5.webp",
  },
  {
    id: 7,
    title: "Tech-Driven Office",
    src: "https://images.unsplash.com/photo-1721614461028-6e80fa904ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Open Office Space",
    src: "https://images.unsplash.com/photo-1721297015739-6737bb24089c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
