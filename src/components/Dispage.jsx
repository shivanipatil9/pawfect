import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar1';

function Disclaimer() {
    return (
        <div>
            <Navbar />
            <div className="relative max-w-4xl mx-auto ">
                <div className="relative z-10">
                    <div className="container mx-auto p-6">
                        <section tabIndex="-1" className="py-8 ">
                            <div className="relative ">
                                <div className="relative z-10 p-6">
                                    <div className="mb-6">
                                        <p className="text-2xl font-bold size-24px">
                                            THE PAWFECT DATE
                                        </p>
                                        <p className="text-2xl font-bold">
                                            DISCLAIMER
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg mt-14 mb-20">
                                            "By using The Pawfect Date, you agree to the following: ensure your pet's vaccinations comply with local regulations before interactions, take sole responsibility for your pet's behavior and health during app-facilitated meetups or mating, verify your pet's genetics before mating (as we don't validate genetic backgrounds), and abide by local pet ownership laws. The app and its company bear no liability for incidents during interactions. Clicking 'Agree' implies your acknowledgment and acceptance of these terms, prioritizing vaccination compliance, owner responsibility, genetic verification, and legal adherence."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Disclaimer;
