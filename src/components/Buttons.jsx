const Buttons = ({ children, href }) => {
  return (
    <a
      href={href}
      className="relative bg-purple-500 text-black border border-black rounded-full text-3xl px-10 sm:px-16 py-2 sm:py-4 cursor-pointer -translate-x-0.5 shadow-[0px_4px_0_0_black] hover:-translate-y- hover:-translate-x-0.5 hover:shadow-[5px_15px_0_0_black] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0_0_0_0_black]"
    >
      {children}
    </a>
  );
};

export default Buttons;
