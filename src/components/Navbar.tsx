import React, { useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-b-[20px] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img
              src="https://tools.corenexis.com/image/cnxm/Q25/01/707198f98f.webp"
              alt="logo"
              className="h-12 w-12 object-contain rounded-full shadow-lg"
            />
            <Link
              to="/"
              className="font-extrabold text-2xl text-white hover:text-green-200 transition-colors duration-300"
            >
              SMP TPI Gedangan
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Beranda
              </Link>
              <Link
                to="/about"
                className="hover:bg-green-700 px-3 py-2 rounded-md"
              >
                Tentang Kami
              </Link>
              <Link
                to="/news"
                className="hover:bg-green-700 px-3 py-2 rounded-md"
              >
                Berita
              </Link>
              <Link
                to="/contact"
                className="hover:bg-green-700 px-3 py-2 rounded-md"
              >
                Kontak
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" ref={menuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)} // Menutup setelah klik link
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)} // Menutup setelah klik link
            >
              Tentang Kami
            </Link>
            <Link
              to="/news"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)} // Menutup setelah klik link
            >
              Berita
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)} // Menutup setelah klik link
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
