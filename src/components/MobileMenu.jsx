const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-90 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-4 right-4 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {["Home", "Skills", "Projects", "Contacts"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold my-4 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } text-gray-900 hover:text-[rgb(139,104,61)]`}
        >
          {item}
        </a>
      ))}

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        download="Ganesh_Rokkam_Resume.pdf"
        onClick={() => setMenuOpen(false)}
        className={`rounded bg-black text-white px-4 py-2 mt-6 cursor-pointer hover:bg-gray-800 transition ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Resume
      </a>
    </div>
  );
};

export default MobileMenu;
