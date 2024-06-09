import { motion } from "framer-motion";

const HorizentalLine = () => {
  return (
    <>
      <div className="flex justify- items-center h-screen w-screen  container">
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="block   h-[0.3px] bg-black "
        />
      </div>
    </>
  );
};

export default HorizentalLine;
