import { useSpring } from "framer-motion";
import { motion, useMotionValue, useAnimationControls } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

export const Cursor = () => {
  const mousePositionX = useMotionValue(0);
  const mousePositionY = useMotionValue(0);

  const mousePositionXView = useSpring(mousePositionX, {
    stiffness: 600,
    damping: 30,
  });
  const mousePositionYView = useSpring(mousePositionY, {
    stiffness: 600,
    damping: 30,
  });
  const mousePositionXSpring = useSpring(mousePositionX, {
    stiffness: 500,
    damping: 30,
  });
  const mousePositionYSpring = useSpring(mousePositionY, {
    stiffness: 500,
    damping: 30,
  });
  const cursorControls = useAnimationControls();
  const [cursorText, setCursorText] = useState("");
  const cursorVarients = {
    initial: {
      width: 20,
      height: 20,
      backgroundColor: "rgb(29, 78, 216)",
      scale: 1,
      transition: {
        type: "spring",
        mass: 0.6,
      },

      // transition: { type: "tween", ease: "backOut", duration: 0.5 },
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: "rgb(241, 245, 249)",
      color: "#000",
      scale: 1,
      transition: { type: "tween", ease: "backOut", duration: 0.5 },
    },
    chat: {
      width: 60,
      height: 60,
      backgroundColor: "#FFBCBC",
      color: "#000",
      cursor: "pointer",
      scale: 1,
      transition: { type: "tween", ease: "backOut", duration: 0.5 },
    },
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mousePositionX.set(clientY);
      mousePositionY.set(clientX);
    };
    // const mouseOut=(e)=>{
    //   if(!e.relatedTarget || e.relatedTarget.nodeName==="HTML"){
    //     cursorControls.start({
    //       scale:0
    //     })
    //   }
    // }
    // window.addEventListener("mouseout", mouseOut)
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("mouseout", mouseOut)
    };
  }, [mousePositionX, mousePositionY]);
  useEffect(() => {
    // const cursor = document.getElementById("cursor");
    const cursorView = document.getElementsByClassName("cursor-view");
    const cursorChat = document.getElementsByClassName("cursor-hello");
    const cursorViewArr = [...cursorView];
    const cursorChatArr = [...cursorChat];

    const handleCursorViewMouseEnter = () => {
      setCursorText("View");
      cursorControls.start("view");
    };
    const handleCursorViewMouseLeave = () => {
      setCursorText("");
      cursorControls.start("initial");
    };
    cursorViewArr.forEach((element) => {
      element.addEventListener("mouseenter", handleCursorViewMouseEnter);
      element.addEventListener("mouseleave", handleCursorViewMouseLeave);
    });
    const handleCursorChatMouseEnter = () => {
      setCursorText("👋");
      cursorControls.start("chat");
    };
    const handleCursorChatMouseLeave = () => {
      cursorControls.start("initial");
      setCursorText("");
    };
    cursorChatArr.forEach((element) => {
      element.addEventListener("mouseenter", handleCursorChatMouseEnter);
      element.addEventListener("mouseleave", handleCursorChatMouseLeave);
    });

    return () => {
      cursorViewArr.forEach((element) => {
        element.removeEventListener("mouseenter", handleCursorViewMouseEnter);
        element.removeEventListener("mouseleave", handleCursorViewMouseLeave);
      });
      cursorChatArr.forEach((element) => {
        element.removeEventListener("mouseenter", handleCursorChatMouseEnter);
        element.removeEventListener("mouseleave", handleCursorChatMouseLeave);
      });
    };
  }, []);
  return (
    <>
      <motion.div
        id="cursor"
        className="fixed rounded-full pointer-events-none z-[99]"
        style={{
          top: mousePositionXSpring,
          left: mousePositionYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={cursorControls}
        initial="initial"
        variants={cursorVarients}
      ></motion.div>
      <motion.span
        className="fixed inline-block  font-bold z-[100] pointer-events-none"
        style={{
          top: mousePositionXView,
          left: mousePositionYView,
          x: "-50%",
          y: "-50%",
        }}
      >
        {cursorText}
      </motion.span>
    </>
  );
};

const CursorAnimationEffect = () => {
  return (
    <>
      <Cursor />
      <main className="container overflow-x-clip text-4xl">
        <header className=" font-bold py-4 flex justify-between items-center">
          <div>Cursor Animation</div>
          <div>
            {" "}
            <a
              className="cursor-hello text-center font-bold underline block"
              href=""
            >
              Want to chat
            </a>
          </div>
        </header>
        <section className="grid grid-cols-2 gap-12 mt-12">
          <div className="card p-2 cursor-view space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-1.webp"
              alt=""
            />
            <h2 className="uppercase">HOLISTOKEN</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5">
              branding
            </button>
          </div>
          <div className="card p-2 cursor-view space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-2.webp"
              alt=""
            />
            <h2 className="uppercase">munkin</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5">
              branding
            </button>
          </div>
          <div className="card p-2 cursor-view space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-3.webp"
              alt=""
            />
            <h2 className="uppercase">volkswegen</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5">
              branding
            </button>
          </div>
          <div className="card p-2 cursor-hello space-y-6">
            <img
              className="object-cover h-96 w-full"
              src="/image-5.webp"
              alt=""
            />
            <h2 className="uppercase">bod</h2>
            <button className="text-base uppercase border-2 border-black/80 py-1 px-1.5">
              branding
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CursorAnimationEffect;
