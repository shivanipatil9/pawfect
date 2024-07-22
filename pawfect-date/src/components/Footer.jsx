import React from 'react';
import Pawfectlogo from "../images/Pawfectlogo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id="footer" className="footer bg-[#372E2F] text-white py-8 px-4 w-100">
            <div className="footer-container mx-auto flex flex-col md:flex-row gap-x-20 items-start mt-6 justify-center">
                {/* Logo Section */}
                <div className="footer-logo flex flex-col items-center mb-4 md:mb-0">
                    <img
                        src={Pawfectlogo}
                        alt="Pawfect logo"
                        className="logo w-32 h-11 object-cover shadow-lg"
                    />
                    <div className="description mt-4 text-sm text-center space-y-0">
                        <p className="mb-0">Paws, meet your perfect</p>
                        <p className="mb-0">match! The premier dog</p>
                        <p className="mb-0">dating app.</p>
                    </div>
                </div>

                {/* Text Section */}
                <div className="footer-text flex flex-col items-center md:items-start text-center md:text-left mb-4 ">
                    <div className="links mb-4 ">
                        <Link to="/Privacypolicy" target="_blank" rel="noopener noreferrer" className="link text-sm underline block mb-4 ">
                            Privacy Policy
                        </Link>
                        <Link to="/Terms_and_conditions" target="_blank" rel="noopener noreferrer" className="link text-sm underline block mb-4">
                            Terms & Conditions
                        </Link>

                        <Link to="/EndUserLicenseAggrement" target="_blank" rel="noopener noreferrer" className="link text-sm underline block mb-4">
                            End User License Agreement
                        </Link>
                        <Link to="/Playdateaggrement" target="_blank" rel="noopener noreferrer" className="link text-sm underline block mb-4">
                            Play Date Agreement
                        </Link>
                        <Link to="/Disclaimer" target="_blank" rel="noopener noreferrer" className="text-sm underline block mb-4">
                            Disclaimer
                        </Link>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="footer-contact flex flex-col items-center md:items-start text-center md:text-left mb-4">
                    <p className="contact-title text-lg font-bold mb-3">Contact</p>
                    <a href="tel:+91 9909991910" className="link text-sm block mb-10">
                        Phone: +916353729725
                    </a>
                    <p className="email text-sm mb-2">
                        Email: <a href="mailto:info@thepawfectdate.com" className="link underline">info@thepawfectdate.com</a>
                    </p>
                </div>

                {/* Address Section */}
                <div className="footer-address flex flex-col items-center md:items-start text-center md:text-left">
                    <p className="address-title text-lg font-bold mb-2">Address</p>
                    <p className="address text-sm font-bold mb-2">
                        Stallion Enterprise<br />
                    </p>
                    <p className="address text-sm">
                        Survey No. 220, G M House, S G Highway,<br />
                        Nr. Amin JCB Equipment, Makarba,<br />
                        Ahmedabad, Gujarat, 382210
                    </p>
                </div>
            </div>
            <div className="footer-bottom text-center text-sm mt-4">
                © 2023 Pawfect. All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
