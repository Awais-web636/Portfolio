import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import navItems from "./NavItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavigation = (path) => {
    if (path.startsWith("/")) {
      setIsOpen(false); // Close menu on navigation
    } else {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
            <Link to="/" className="text-2xl font-bold">
              Port<span className="text-[#FF6B00]">folio</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-12">
            {navItems.map(({ name, path }) => (
              <motion.li key={name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
                <Link
                  to={path}
                  className={`text-gray-600 font-bold cursor-pointer hover:text-[#FF6B00] transition-colors ${
                    location.pathname === path ? "text-[#FF6B00]" : ""
                  }`}
                  onClick={() => handleNavigation(path)}
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md"
        >
          <nav className="flex flex-col gap-6 p-4">
            {navItems.map(({ name, path }) => (
              <motion.button
                key={name}
                whileTap={{ scale: 1.2 }}
                onClick={() => handleNavigation(path)}
                className="w-full text-left px-4 py-2 text-lg font-bold cursor-pointer text-gray-600 hover:text-[#FF6B00] hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Link to={path}>{name}</Link>
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
