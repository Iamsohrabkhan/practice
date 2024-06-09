import { useState } from "react";

export const Pagetransition = () => {
  const pages = ["home", "about", "contact", "blog"];
  const [active, setActive] = useState("home");

  return (
    <>
      <nav>
        <ul className="flex justify-center items-center gap-4 text-xl w-full h-16">
          {pages.map((curr) => (
            <li
              className="cursor-pointer p-2 rounded-xl uppercase hover:bg-slate-300 transform duration-200 transition-colors"
              key={curr}
              onClick={() => {
                setActive(curr);
              }}
            >
              {curr}
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="fixed inset-0 h-screen w-full  grid "
        style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr));" }}
      >
        <div className="bg-yellow-300 size-44"></div>
        <div className="bg-gray-300 size-44"></div>
        <div className="bg-gray-400 size-44"></div>
        <div className="bg-gray-500 size-44"></div>
        <div className="bg-gray-600 size-44"></div>
        <div className="bg-gray-700 size-44"></div>
        <div className="bg-gray-800 size-44"></div>
        <div className="bg-gray-900 size-44"></div>
        <div className="bg-green-300 size-44"></div>
        <div className="bg-pink-300 size-44"></div>
        <div className="bg-orange-300 size-44"></div>
        <div className="bg-gray-300 size-44"></div>
        <div className="bg-gray-300 size-44"></div>
        <div className="bg-gray-400 size-44"></div>
        <div className="bg-gray-500 size-44"></div>
        <div className="bg-gray-600 size-44"></div>
        <div className="bg-gray-700 size-44"></div>
        <div className="bg-gray-800 size-44"></div>
        <div className="bg-gray-900 size-44"></div>
        <div className="bg-green-300 size-44"></div>
        <div className="bg-yellow-300 size-44"></div>
        <div className="bg-pink-300 size-44"></div>
        <div className="bg-orange-300 size-44"></div>
        <div className="bg-gray-300 size-44"></div>
        {/* {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-green-100 size-44"></div>
        ))} */}
      </div>
      {active && (
        <section className="h-[calc(100vh-4rem)] w-full ">
          <div className="flex h-full uppercase  justify-center items-center text-2xl">
            <h1>This is {active} Page</h1>
          </div>
        </section>
      )}
    </>
  );
};
