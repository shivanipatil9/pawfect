import React from 'react';
import Footer from './Footer';
import MainContent from './MainContent';
import Navbar1 from './Navbar1';

function Landingpage() {
    return (
        <div className="App  " style={{ backgroundColor: 'transparent' }}>
            <Navbar1 />
            <MainContent />
            <Footer />
        </div>
    );
}

export default Landingpage;