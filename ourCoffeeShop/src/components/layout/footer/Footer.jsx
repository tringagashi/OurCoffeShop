import { useLocation } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const location = useLocation();

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
    <header className={activePageClass}>
      <div
        className={`justify-center items-center w-full pt-10 flex flex-col gap-10`}
      >
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col  items-center lg:items-start px-24">
            <h4 className="text-white text-xl font-bold">About Us</h4>
            <div className="text-white font-light items-center lg:items-start flex flex-col text-base pb-5 lg:pb-0">
              <p>About Us</p>
              <p>Sustainability</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start px-24">
            <h4 className="text-white text-xl font-bold">Support</h4>
            <div className="text-white font-light items-center lg:items-start flex flex-col text-base pb-5 lg:pb-0">
              <p>Contact Us</p>
              <p>Privacy & Policy</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start px-24">
            <h4 className="text-white text-xl font-bold">Social Media</h4>
            <div className="text-white font-light  items-center lg:items-start flex flex-col text-base pb-5 md:pb-0">
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
          </div>
        </div>
        <h1 className="text-white text-center flex items-center">
          Copyright © 2024 Coffee Shop
        </h1>
      </div>
    </header>
  );
};

export default Footer;
