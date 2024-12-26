import React from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            SMP TPI Gedangan
          </Link>

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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Tentang Kami
            </Link>
            <Link
              to="/news"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Berita
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-green-700 px-3 py-2 rounded-md"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
