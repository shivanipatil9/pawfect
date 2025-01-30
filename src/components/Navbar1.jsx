import React from "react";
import Pawfectlogo from "../images/Pawfectlogo.png";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const shadowStyle = {
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.7)",
  };

  return (
    <div className="flex justify-center bg-white" style={shadowStyle}>
      <Link to="/">
        <img
          src={Pawfectlogo}
          alt="Logo"
          className="w-[130px] h-[44px] object-cover mt-5 mb-4"
        />
      </Link>
    </div>
  );
};

export default Navbar1;
