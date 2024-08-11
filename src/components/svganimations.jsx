import { motion } from "framer-motion";

function Icon() {
  return (
    <div className="container flex justify-center items-center w-full h-screen">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-2">
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, type: "spring" }}
          className="stroke-lime-400 stroke-[20] w-full"
          d="M0 10L250 10"
        ></motion.path>
      </svg>
    </div>
  );
}

export default Icon;
