import React from 'react';
import Pawfectlogo from "../images/Pawfectlogo.png";

const Navbar1 = () => {
    const shadowStyle = {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.7)',
    };

    return (
        <div className="flex justify-center " style={shadowStyle}>
            <img
                src={Pawfectlogo}
                alt="Logo"
                className="w-[130px] h-[44px] object-cover mt-5 mb-4"
            />
        </div>
    );
};

export default Navbar1;
