import React, { useState, useRef, useEffect } from "react";
import MediaIcons from "./MediaIcons";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-[#393F40] w-full text-white p-4 z-50 flex flex-row md:justify-between justify-end pt-[15px] md:px-[25px] text-2xl absolute pl-5 ">
        <Link to="/" className="hover:text-[#CCCCCC] hidden md:block">
          SF
        </Link>
        <div className="relative flex flex-row md:gap-24 -z-10 gap-10">
          <Link to="/" className="hover:text-[#CCCCCC] hover:underline">
            Home
          </Link>
          <div className="relative hover:text-[#CCCCCC] hover:underline">
            <button onClick={toggleMenu}>Contact</button>
            {isMenuOpen && (
              <div ref={menuRef}>
                <MediaIcons />
              </div>
            )}
          </div>
          <Link to="/about" className="hover:text-[#CCCCCC] hover:underline">
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
