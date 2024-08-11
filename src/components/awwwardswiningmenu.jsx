const Menu = () => {
  return (
    <>
      <section className="h=screen w-full ">
        <nav className="fixed top-8 right-8">
          <button className="group bg-lime-300 text-black rounded-lg py-2 px-4 relative z-50">
            <div className="relative overflow-clip">
              <span className="group-hover:scale-0 group-hover:-translate-y-full transition-transform duration-500  absolute inset-0 ease-[cubic-bezier(ease-[cubic-bezier(0.95,0.05,0.795,0.035)])]">
                Menu
              </span>
              <span className="translate-y-full inline-block group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(ease-[cubic-bezier(0.95,0.05,0.795,0.035)])] scale-0 group-hover:scale-100">
                Menu
              </span>
            </div>
          <ul className="w-96 h-96 bg-lime-200  absolute ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </button>

        </nav>

        <img
          className=" inset-0 h-screen w-full object-cover object-center"
          src="https://images.unsplash.com/photo-1606868304562-16c307382efc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>
    </>
  );
};

export default Menu;
