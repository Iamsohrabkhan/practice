/* eslint-disable react/prop-types */

import { motion, useSpring, useTransform, useAnimate } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const TorqueEdition = () => {
  const [title, setTitle] = useState("Versatile Office Designs");
  const [hover, sethover] = useState(true);
  const [hovered, sethovered] = useState(false);

  const transition = {
    mass: 0.2,
    stiffness: 120,
  };
  const x = useSpring(0, transition);
  const y = useSpring(0, transition);

  const xTransform = useTransform(x, [0, 1], ["0%", "-50%"]);
  const yTransform = useTransform(y, [0, 1], ["6%", "-56%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      const { innerHeight, innerWidth } = window;
      x.set(pageX / innerWidth);
      y.set(pageY / innerHeight);
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  const [scope, animate] = useAnimate();

  return (
    <>
      <BackgroundGrid
        color="#eee"
        fade={false}
        strokeWidth="5px"
        cellSize="40px"
        className="background-grid"
      />
      <section>
        <div
          ref={scope}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  pointer-events-none text-8xl text-nowrap space-grotest"
        >
          {title}
        </div>

        <motion.div
          className="wrapper w-[200svw] flex flex-wrap justify-center items-center gap-16"
          style={{ x: xTransform, y: yTransform }}
        >
          {images.map(({ src, title, color, id }) => (
            <motion.img
              className={`odd:size-56 even:size-72  shrink-0 grow-0  object-cover object-center rounded-md cursor-pointer
                even:[--y:8rem] odd:[--y:0rem] even:[--rotate:6] odd:[--rotate:-6] even:[--scale:1.1] odd:[--scale:1.2]  transition-opacity duration-200
                ${hovered !== id && "opacity-20"}
                ${hover && "!opacity-100"}
                `}
              key={id}
              src={src}
              alt={title}
              onMouseEnter={() => {
                sethovered(id);
                sethover(false);
                setTitle(title);
                animate(scope.current, { opacity: [0, 1] }, { duration: 0.4 });
                animate(scope.current, { color }, { duration: 0.4 });
                const animateGrid = document.querySelector(".background-grid");
                animateGrid.classList.add("opacity-20");
              }}
              onMouseLeave={() => {
                animate(scope.current, { opacity: [0, 1] }, { duration: 0.4 });
                animate(scope.current, { color: "#252323" }, { duration: 0.4 });
                setTitle("Versatile Office Designs");
                sethover(true);

                const animateGrid = document.querySelector(".background-grid");

                animateGrid.classList.remove("opacity-20");
              }}
              style={{
                y: "var(--y)",
              }}
              whileHover={{
                scale: "var(--scale)",
                rotate: "var(--rotate)",

                transition: {
                  scale: {
                    type: "spring",
                    damping: 4,
                    bounce: 0.5,
                  },
                },
              }}
            />
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default TorqueEdition;

const BackgroundGrid = ({
  color = "#fb3a5d",
  cellSize = "25px",
  strokeWidth = "3px",
  className,
  fade = true,
  ...props
}) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `;
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  return (
    <div
      className={`pointer-events-none fixed -z-50 inset-0 left-0 top-0 flex h-full w-full ${className}`}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: "repeat",
        backgroundSize: cellSize,
        maskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
        WebkitMaskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
      }}
      {...props}
    ></div>
  );
};

const images = [
  {
    id: 0,
    title: "Modern Office Setup",
    src: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    src: "https://images.unsplash.com/photo-1721807578532-dc1756624727?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#C40C0C",
  },
  {
    id: 5,
    title: "Minimalist Office Design",
    src: "./image-4.webp",
    color: "#4F6F52",
  },
  {
    id: 6,
    title: "Collaborative Workspace",
    src: "./image-5.webp",
    color: "#ff70a6",
  },
  {
    id: 7,
    title: "Tech-Driven Office",
    src: "https://images.unsplash.com/photo-1721614461028-6e80fa904ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#874CCC",
  },
  {
    id: 8,
    title: "Open Office Space",
    src: "https://images.unsplash.com/photo-1721297015739-6737bb24089c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#153448",
  },
  {
    id: 9,
    title: "Office with a View",
    src: "https://images.unsplash.com/photo-1698945926770-ed14a9075bdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#edafb8",
  },
  {
    id: 10,
    title: "Innovative Workspace",
    src: "https://images.unsplash.com/photo-1711068650675-a23ad4b205aa?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#1E0342",
  },
  {
    id: 11,
    title: "Professional Office Setting",
    src: "https://images.unsplash.com/photo-1721742145236-d89b27b8ceb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    color: "#102C57",
  },
  {
    id: 12,
    title: "Modern Office Interiors",
    src: "https://images.unsplash.com/photo-1508440767412-59ce0b206bbc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#074173",
  },
  {
    id: 13,
    title: "Sophisticated Office Design",
    src: "https://images.unsplash.com/photo-1568992688243-52608227497d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    color: "#8576FF",
  },
  {
    id: 14,
    title: "High-Tech Office",
    src: "https://images.unsplash.com/photo-1564965927390-a7ca4d41ef64?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#8E7AB5",
  },
  {
    id: 15,
    title: "Corporate Office Design",
    src: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#FFA38F",
  },
  {
    id: 16,
    title: "Elegant Office Space",
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#FF7EE2",
  },
  {
    id: 17,
    title: "Office Collaboration Area",
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#FDFFD2",
  },
  {
    id: 18,
    title: "Open Workspace Concept",
    src: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "red",
  },
  {
    id: 19,
    title: "Modern Office Lighting",
    src: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#FFB4C2",
  },
  {
    id: 20,
    title: "Office with Natural Light",
    src: "https://images.unsplash.com/photo-1543269664-7eef42226a21?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#DA7297",
  },
  {
    id: 21,
    title: "Trendy Office Space",
    src: "https://images.unsplash.com/photo-1522198684868-88edd8463fc9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#E8C5E5",
  },
  {
    id: 22,
    title: "Elegant Workspace",
    src: "https://images.unsplash.com/photo-1501876991173-f9c47cd28268?q=80&w=1419&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#604CC3",
  },
  {
    id: 23,
    title: "Inspiring Office Environment",
    src: "https://images.unsplash.com/photo-1470145318698-cb03732f5ddf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "#6FDCE3",
  },
];
