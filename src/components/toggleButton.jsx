import { motion, useCycle } from "framer-motion";

const ToggleButton = () => {
  const [x, cycleX] = useCycle("20%", "80%");
  return (
    <section className="flex justify-center items-center flex-col h-screen w-screen">
      <motion.button
        onTap={() => cycleX()}
        className="h-7 w-12 cursor-pointer rounded-full bg-pink-400 relative"
      >
        <motion.span
          className={`absolute left-0 top-1/2 rounded-full bg-white shadow-lg  block  ${
            x == "20%" ? "size-5" : "size-6"
          }`}
          animate={{
            y: "-50%",
            x,
          }}
        ></motion.span>
      </motion.button>
    </section>
  );
};
export default ToggleButton;
