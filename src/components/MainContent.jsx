import React from 'react';
import Pawfectlogo from '../images/Pawfectlogo.png';
import FundogImage from '../images/fundog.png';
import GooglePlayBadge from '../images/googleplay.png';
import AppleStoreBadge from '../images/AppleStore.png';

const MainContent = () => {
    return (
        <main id="main-content" className="h-full flex flex-col items-center justify-center p-8 bg-gray-100" style={{ backgroundColor: 'transparent' }} >
            <section id="hero-section" className="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full max-w-4xl mx-auto">
                <div className="flex flex-col items-start mb-8 md:mb-0 md:w-1/2">
                    <img
                        src={Pawfectlogo}
                        alt="Pawfect Logo"
                        className="w-[300px] h-[101px] object-cover  mb-4"
                    />
                    <div className="text-left mb-8">
                        <h1 className="text-4xl font-bold text-red-500 font-montserrat">
                            Find your pet's pawfect match!
                        </h1>
                        <h2 className="text-3xl text-gray-800 mt-4 font-montserrat">
                            Download Now!
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 mb-8">
                        <a
                            href="https://play.google.com/store/apps/details?id=com.esmagico.pawfect&hl=en"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={GooglePlayBadge}
                                alt="Google Play Badge"
                                className="w-48 h-16 object-cover"
                            />
                        </a>
                        <a
                            href="https://apps.apple.com/in/app/the-pawfect-date/id6474994092"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={AppleStoreBadge}
                                alt="App Store Badge"
                                className="w-48 h-16 object-cover"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center md:w-1/2">
                    <img
                        src={FundogImage}
                        alt="Fun Dog Illustration"
                        className="w-[506px] h-[496px] object-cover"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    // width="506"
                    // height="496"
                    />
                </div>
            </section>
        </main>
    );
};

export default MainContent;

// import React from 'react';
// import Pawfectlogo from '../images/Pawfectlogo.png';
// import FundogImage from '../images/fundog.png';
// import GooglePlayBadge from '../images/googleplay.png';
// import AppleStoreBadge from '../images/AppleStore.png';

// const MainContent = () => {
//     return (
//         <main className="h-screen flex flex-col items-center justify-center p-8 bg-gray-100 " >
//             <section className="flex flex-col md:flex-row items-start md:items-center md:justify-between max-w-4xl mx-auto">
//                 <div className="flex flex-col items-start mb-8 md:mb-0">
//                     <img
//                         src={Pawfectlogo}
//                         alt="Pawfect Logo"
//                         className="w-[300px] h-[101px] object-cover mb-4"
//                     />
//                     <div className="text-left mb-8">
//                         <h1 className="text-3xl font-bold text-red-500 font-montserrat">
//                             Find your pet's pawfect match!
//                         </h1>
//                         <h2 className="text-[55px] text-gray-800 mt-4 font-montserrat">
//                             Download Now!
//                         </h2>
//                     </div>
//                     <div className="flex flex-col gap-4 mb-8">
//                         <a
//                             href="https://play.google.com/store/apps/details?id=com.esmagico.pawfect.pawfect"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             <img
//                                 src={GooglePlayBadge}
//                                 alt="Google Play Badge"
//                                 className="w-48 h-16 object-cover"
//                             />
//                         </a>
//                         <a
//                             href="https://apps.apple.com/in/app/the-pawfect-date/id6474994092"
//                             target="_blank"
//                             rel="noreferrer"
//                         >
//                             <img
//                                 src={AppleStoreBadge}
//                                 alt="App Store Badge"
//                                 className="w-48 h-16 object-cover"
//                             />
//                         </a>
//                     </div>
//                 </div>
//                 <div className="flex justify-center items-center">
//                     <img
//                         src={FundogImage}
//                         alt="Fun Dog Illustration"
//                         className="w-[506px] h-[496px] object-cover"
//                         width="506"
//                         height="496"
//                     />
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default MainContent;

