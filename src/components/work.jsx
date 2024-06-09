import { useMotionValue } from "framer-motion";
import { useSpring } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";

const Work = () => {
  return (
    <>
      <header className="w-full h-52"></header>
      <section className="container max-w-[80%]">
        <Heading />
        <Tabs />
        <Table />
      </section>

      <section className="h-screen w-full flex justify-center items-center text-8xl">
        Room to scroll
      </section>
    </>
  );
};
const Table = () => {
  const [id, setId] = useState(null);
  const [hoverFirstCard, setHoverFirstCard] = useState(true);
  console.log("🚀 ~ Table ~ id:", id);
  const cardControl = useAnimationControls();
  const top = useMotionValue();
  const left = useMotionValue();
  const topSpring = useSpring(top, { mass: 0.025 });
  const leftSpring = useSpring(left, { mass: 0.025 });
  const topSpringView = useSpring(top, { mass: 0.001 });
  const leftSpringView = useSpring(left, { mass: 0.001 });
  const images = [
    "https://dennissnellenberg.com/media/pages/work/andy-hardy/f152b03247-1646837253/thumbnail-andyhardy.jpg",
    "https://dennissnellenberg.com/media/pages/work/base-create/1f2468ab51-1680179645/thumbnail-base-desktop.jpg",
    "https://dennissnellenberg.com/media/pages/work/graphichunters/0daec771af-1660128857/thumbnail-gh.jpg",
    "https://dennissnellenberg.com/media/pages/work/atypikal/fd1951ffc9-1646837277/thumbnail-atypikal.jpg",
    "https://dennissnellenberg.com/media/pages/work/avvr/4d2a7758a4-1672918357/thumbnail-avvr-v2.jpg",
    "https://dennissnellenberg.com/media/pages/work/twice/0ab7e43954-1710404752/thumbnail-twice.jpg",
  ];
  useEffect(() => {
    const handleMouseMove = (e) => {
      top.set(e.clientY);
      left.set(e.clientX);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="divide-double divide-y-2 mt-12">
        <TableHeading />

        <motion.div
          className="fixed bg-blue-600 z-20 rounded-full pointer-events-none size-20 flex justify-center items-center "
          style={{
            top: topSpringView,
            left: leftSpringView,
            x: "-50%",
            y: "-50%",
          }}
          variants={{ initial: { scale: 0 }, final: { scale: 1 } }}
          initial="initial"
          animate={cardControl}
        >
          View
        </motion.div>
        <motion.div
          className="fixed bg-slate-100 size-96 z-10 pointer-events-none overflow-clip"
          style={{ top: topSpring, left: leftSpring, x: "-50%", y: "-50%" }}
          variants={{ initial: { scale: 0 }, final: { scale: 1 } }}
          transition={{ duration: 0.6, type: "tween", ease: "circOut" }}
          initial="initial"
          animate={cardControl}
        >
          <AnimatePresence mode="sync">
            {images.map((curr, i) => {
              return (
                i === id && (
                  <motion.img
                    initial={{ y: hoverFirstCard ? 0 : "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                      duration: 0.4,
                      type: "tween",
                      ease: "easeInOut",
                    }}
                    // style={{ x: "-50%" }}
                    key={i}
                    src={curr}
                    className="absolute  h-full w-full  object-cover object-center"
                  />
                )
              );
            })}
          </AnimatePresence>
        </motion.div>
        <motion.div
          className="divide-y-2 divide-double relative"
          onMouseEnter={() => {
            cardControl.start("final");
          }}
          onMouseLeave={() => {
            cardControl.start("initial");
            setHoverFirstCard(true);
          }}
        >
          <TableItem
            uniqueId={0}
            year="2024"
            client="twice"
            services="interactive & development"
            location="spain"
            id={id}
            setId={setId}
          />
          <TableItem
            uniqueId={1}
            year="2024"
            client="The Demai"
            services="design & Developementt"
            location="bali, indoneshia"
            id={id}
            setHoverFirstCard={setHoverFirstCard}
            setId={setId}
          />
          <TableItem
            uniqueId={2}
            year="2024"
            client="FABRiC"
            services="design & Developementt"
            location="London, UK"
            id={id}
            setHoverFirstCard={setHoverFirstCard}
            setId={setId}
          />
          <TableItem
            uniqueId={3}
            year="2024"
            client="Base Create"
            services="design & Developementt"
            location="Hongkong"
            id={id}
            setId={setId}
            setHoverFirstCard={setHoverFirstCard}
          />
          <TableItem
            uniqueId={4}
            year="2024"
            client="Graphics"
            services="design & Developementt"
            location="Hongkong"
            id={id}
            setId={setId}
            setHoverFirstCard={setHoverFirstCard}
          />
          <TableItem
            uniqueId={5}
            year="2024"
            client="AVVR"
            services="design & Developementt"
            location="Hongkong"
            id={id}
            setId={setId}
            setHoverFirstCard={setHoverFirstCard}
          />
        </motion.div>
      </div>
    </>
  );
};

const TableItem = ({
  year,
  services,
  location,
  client,
  uniqueId,
  id,
  setId,
  setHoverFirstCard,
}) => {
  const control = useAnimationControls();
  return (
    <motion.ul
      animate={control}
      onMouseEnter={() => {
        setId(uniqueId);
        control.start("final");
        uniqueId !== 0 ? setHoverFirstCard(false) : null;
      }}
      onMouseLeave={() => {
        control.start("initial");
      }}
      className=" grid grid-cols-4 py-12 gap-12 px- cursor-pointer items-center"
    >
      <motion.li
        onMouseEnter={() => {}}
        variants={{
          initial: { x: 0, opacity: 1 },
          final: { x: -10, opacity: 0.5 },
        }}
        transition={{ type: "spring" }}
        className="text-4xl uppercase text-nowrap"
      >
        {client}
      </motion.li>
      <motion.li
        variants={{
          initial: { x: 0, opacity: 1 },
          final: { x: -10, opacity: 0.5 },
        }}
        className="text- capitalize"
      >
        {location}
      </motion.li>
      <motion.li
        variants={{
          initial: { x: 0, opacity: 1 },
          final: { x: 10, opacity: 0.5 },
        }}
        className="text- capitalize"
      >
        {services}
      </motion.li>
      <motion.li
        variants={{
          initial: { x: 0, opacity: 1 },
          final: { x: 10, opacity: 0.5 },
        }}
        className="text-"
      >
        {year}
      </motion.li>
    </motion.ul>
  );
};
const TableHeading = () => (
  <ul className="uppercase grid grid-cols-4 py-12 gap-12 px- ">
    <li className="text-xs text-[rgb(28,_29,_32)]">Client</li>
    <li className="text-xs text-[rgb(28,_29,_32)]">location</li>
    <li className="text-xs text-[rgb(28,_29,_32)]">services</li>
    <li className="text-xs text-[rgb(28,_29,_32)]">year</li>
  </ul>
);
const Heading = () => (
  <h1 className="[font-size:_clamp(45.5px,5vw+2rem,83.6646px)] leading-none text-balance font-semibold">
    Creating next level digital products
  </h1>
);
const Tabs = () => {
  return (
    <div className="flex justify-between items- mt-12">
      <div className="flex gap-3 ">
        <button className="border border-black py-4  px-10 cursor-pointer rounded-3xl bg-black text-white">
          All
        </button>
        <button className="border border-black py-4  px-10 cursor-pointer rounded-3xl">
          Design
        </button>
        <button className="border border-black py-4  px-10 cursor-pointer rounded-3xl">
          Developement
        </button>
      </div>
      <div>
        <div className="svgs space-x-2">
          <span className="inline-block cursor-pointer border bg-black border-black p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6  text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
          <span className="inline-block cursor-pointer border border-black p-4 rounded-full">
            <svg
              style={{ width: 20 }}
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <g fill="currentColor" fillRule="nonzero">
                <path d="M8 0H0v8h8V0zM7 1v6H1V1h6zM8 12H0v8h8v-8zm-1 1v6H1v-6h6zM20 0h-8v8h8V0zm-1 1v6h-6V1h6zM20 12h-8v8h8v-8zm-1 1v6h-6v-6h6z" />
              </g>
            </svg>
          </span>
          <span className="inline-block"></span>
        </div>
      </div>
    </div>
  );
};

export default Work;
