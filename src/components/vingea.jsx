/* eslint-disable no-unused-vars */
import { useSpring, motion } from "framer-motion";

const Vingea = () => {
  const mousePosition = {
    x: useSpring(0, {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    }),
    y: useSpring(0, {
      stiffness: 150,
      damping: 15,
      mass: 0.1,
    }),
  };
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const targetX = clientX - 320 / 2,
      targetY = clientY - 320 / 2;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  return (
    <section onMouseMove={handleMouseMove}>
      <div>
        {images.map(({ src, id, title }) => {
          return (
            <div
              className="h-svh w-full"
              style={{ clipPath: "polygon(0 0,0 100%, 100% 100%, 100% 0)" }}
              key={id}
            >
              <img
                className="size-full object-cover object-center"
                src={src}
                alt={title}
              />

              <motion.img
                className="size-80 fixed rounded-md top-0 left-0 object-cover object-center pointer-events-none"
                src={src}
                alt={title}
                style={{ x: mousePosition.x, y: mousePosition.y }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const images = [
  {
    id: 0,
    title: "Modern Office Setup",
    src: "https://images.unsplash.com/photo-1721224026389-bd0f4fd04eea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#fb3a5d",
  },
  {
    id: 1,
    title: "Creative Workspace",
    src: "./image-1.webp",
    color: "#4D869C",
  },
  {
    id: 2,
    title: "Corporate Meeting Room",
    src: "./image-2.webp",
    color: "#640D6B",
  },
  {
    id: 3,
    title: "Stylish Home Office",
    src: "./image-3.webp",
    color: "#A87676",
  },
  {
    id: 4,
    title: "Productive Work Environment",
    src: "https://images.unsplash.com/photo-1719937206333-dceea3c5564d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#C40C0C",
  },
  {
    id: 5,
    title: "Minimalist Office Design",
    src: "./image-4.webp",
    color: "#4F6F52",
  },
];

export default Vingea;
