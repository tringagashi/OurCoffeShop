import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const getActivePageClass = (pathname) => {
    if (pathname === "/lavazza") {
      return "active-lavazza";
    }

    if (pathname === "/starbucks") {
      return "active-starbucks";
    }
    if (pathname === "/nespresso") {
      return "active-nespresso";
    }
    if (pathname === "/princcaffe") {
      return "active-princcaffe";
    }
    if (pathname === "/illy") {
      return "active-illy";
    }

    if (pathname === "/nescafe") {
      return "active-nescafe";
    }

    return "";
  };

  const activePageClass = getActivePageClass(location.pathname);
  return (
    <header ref={navRef}  className={activePageClass} >
      <div className="flex justify-between items-center h-[80px] p-2">
      <div className="img">
        <img className="logo" src="https://static.vecteezy.com/system/resources/previews/024/032/837/non_2x/coffee-bean-logo-on-transparent-background-free-png.png" alt="Logo" />
      </div>
      <nav>
        <a href="/#">Home</a>
        <a href="/aboutpage">About Us</a>
        <a href="/brandspage">Our Brands</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      </div>
    </header>
  );
}

export default Navbar;
