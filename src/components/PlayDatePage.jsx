import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar1';

function Playdateaggrement() {
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-start mt-10">
                    <p className="text-2xl font-bold ">THE PAWFECT DATE</p>
                    <p className="text-2xl font-bold ">END USER LICENSE AGREEMENT</p>
                </div>

                <div className="text-lg mt-8">
                    <p className="font-semibold">The Pawfect Playdate Agreement</p>
                    <p className="mt-6">Welcome to The Pawfect Date! Before registering for a playdate/meet up on this application, please carefully read and agree to the following terms and conditions:</p>

                    <p className="mt-4">1. Responsibilities and Guidelines:</p>
                    <p className="mt-4">
                        By using The Pawfect Date, you acknowledge and agree to the following responsibilities:
                    </p>
                    <ul className="mt-6">
                        <li>
                            Vaccinations Responsibility: You certify that your pet's vaccinations are up-to-date in compliance with local regulations and ethical standards, including those promoted by organizations like PETA. Ensure your pet's vaccinations are current before engaging in any interactions facilitated by this application.
                        </li>
                        <li className="mt-4">
                            Owner's Responsibility: You are solely responsible for your pet's behavior, health, and actions during meetups or mating facilitated through The Pawfect Date. The application and its company are not liable for any incidents or issues arising from these interactions.
                        </li>
                        <li className="mt-4">
                            Genetic Verification: Verify your pet's genetics and health history before engaging in any mating activities through this application. The Pawfect Date does not verify or guarantee the genetic background of pets on the platform.
                        </li>
                    </ul>

                    <p className="mt-4">2. Additional Points:</p>
                    <ul className="mt-4">
                        <li className="mt-4">
                            Health Check Responsibility: Prioritize your pet's health by ensuring they are in good health before participating in any interactions facilitated by The Pawfect Date. Consult a veterinarian for any health concerns.
                        </li>
                        <li className="mt-4">
                            Behavioral Assessment: Ensure your pet has a history of good behavior and socialization to minimize conflicts or incidents during interactions.
                        </li>
                        <li className="mt-4">
                            Emergency Situations: Seek immediate veterinary assistance in case of emergencies during interactions facilitated by The Pawfect Date. The Pawfect Date is not liable for emergencies or disputes that may arise.
                        </li>
                        <li className="mt-4">
                            Legal Compliance: Abide by local laws governing pet ownership, interactions, and mating in your area while using The Pawfect Date.
                        </li>
                        <li className="mt-4">
                            Communication and Transparency: Transparently share relevant information about your pet's health, behavior, and history with other users for a safe interaction experience.
                        </li>
                        <li className="mt-4">
                            Feedback and Reporting: Provide feedback on your experiences and report any inappropriate behavior or activities observed to The Pawfect Date for review and action.
                        </li>
                    </ul>

                    <p className="mt-4">3. Privacy Considerations:</p>
                    <ul className="mt-4">
                        <li className="mt-4">
                            Data Protection and Privacy: By using The Pawfect Date, you agree to the collection, storage, and processing of your data as outlined in the Privacy Policy.
                        </li>
                        <li className="mt-4">
                            Sharing of Information: Certain user information may be shared to facilitate interactions on the platform. Sensitive personal information will not be shared without explicit consent.
                        </li>
                        <li className="mt-4">
                            Third-Party Services: The Pawfect Date may utilize third-party services with their own privacy policies. The Pawfect Date is not responsible for the practices of these external entities.
                        </li>
                        <li className="mt-4">
                            Security Measures: While The Pawfect Date implements security measures, users should take precautions as no data transmission over the internet is entirely secure.
                        </li>
                        <li className="mt-4">
                            Data Retention: The Pawfect Date may retain user data for a reasonable period as required by law.
                        </li>
                        <li className="mt-4">
                            Opt-out and Account Deletion: Users have the option to modify, update, or delete their account and personal information.
                        </li>
                    </ul>

                    <p className="mt-4">4. Indemnification:</p>
                    <p className="mt-4">
                        You agree to indemnify and hold The Pawfect Date, the Company and its affiliates, officers, employees, agents, and partners harmless from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with your use of The Pawfect Date or any breach of this Agreement.
                    </p>

                    <p className="mt-4">
                        By clicking "Agree," you acknowledge that you have read, understood, and agreed to abide by the terms and conditions outlined in this End-User Agreement and the accompanying Privacy Policy.
                    </p>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default Playdateaggrement;
