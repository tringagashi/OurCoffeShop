import React from "react";
import "./brands.css";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Brands = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-5 p-10 bg-stone-200">
        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg bg-white">
          <NavLink to="/starbucks">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              class="lineUp"
            />
          </NavLink>
        </div>

        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg  bg-white">
          <NavLink to="/lavazza">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/09/Lavazza-Logo.png"
              class="lineUp"
            />
          </NavLink>
        </div>

        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg  bg-white">
          <NavLink to="/princcaffe">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Logo_Prince_Caffe.png"
              class="lineUp"
            />
          </NavLink>
        </div>

        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg  bg-white">
          <NavLink to="/nespresso">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Nespresso_logo_%28monogram_%2B_wordmark%29.svg"
              class="lineUp"
            />
          </NavLink>
        </div>

        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg  bg-white">
          <NavLink to="/illy">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/03/Illy-Symbol.png"
              class="lineUp"
            />
          </NavLink>
        </div>

        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg bg-white">
          <NavLink to="/nescafe">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/03/Nescafe-Logo.png"
              class="lineUp"
            />
          </NavLink>
        </div>

        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg bg-white">
          <NavLink to="/segafredo">
            <img src="https://seeklogo.com/images/S/Segafredo_Zanetti-logo-DE758A0FDF-seeklogo.com.png"
             class="lineUp" 
             />
          </NavLink>
        </div>

        <div className="flex justify-center items-center w-56 h-56 border rounded-lg p-4 shadow-lg bg-white">
          <img
            src="https://italiasolutions.co.uk/cdn/shop/collections/Kimbo_Logo_1_460x@2x.jpg?v=1712760059"
            class="lineUp"
          />
        </div>
        </div>

    </>
  );
};

export default Brands;
