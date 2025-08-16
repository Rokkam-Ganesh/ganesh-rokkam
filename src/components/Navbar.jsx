import React, { useEffect } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full z-50 bg-white rounded-lg backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold">
            Ganesh <span className="text-blue-500">Rokkam</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden font-medium md:flex items-center space-x-8">
            {["Home", "Skills", "Projects", "Contacts"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-900 hover:text-[rgb(139,104,61)] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/ganesh-rokkam/resume.pdf"
              download="Ganesh_Rokkam_Resume.pdf"
              className="rounded bg-black text-white px-3 py-1.5 cursor-pointer hover:bg-gray-800 transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
