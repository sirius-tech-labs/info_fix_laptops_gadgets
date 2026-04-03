import React from 'react';
import { Gavel, AlertCircle, HelpCircle, Truck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const TermsOfService: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 md:py-24">
            <Helmet>
                <title>Terms of Service | GIANT EDGE TECHNOLOGIES</title>
                <meta name="description" content="Terms of Service for GIANT EDGE TECHNOLOGIES." />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative border border-gray-100">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tech-blue/5 rounded-bl-full -z-10" />

                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-blue-50 p-3 rounded-2xl">
                            <Gavel className="text-tech-blue" size={32} />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Terms of Service</h1>
                    </div>

                    <p className="text-gray-500 font-medium mb-10 border-b border-gray-100 pb-8">
                        Last Updated: April 3, 2026
                    </p>

                    <div className="space-y-10 text-gray-700 leading-relaxed font-medium">
                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <AlertCircle size={24} className="text-tech-blue" />
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing or using the **GIANT EDGE TECHNOLOGIES** website, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <HelpCircle size={24} className="text-tech-blue" />
                                2. Description of Service
                            </h2>
                            <p>
                                GIANT EDGE TECHNOLOGIES provides high-quality new and UK-used laptops and technology accessories to customers across Nigeria. We provide tools including an AI Laptop Finder to help you choose the best machine for your needs.
                            </p>
                        </section>

                        <section className="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100">
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">3. User Accounts</h2>
                            <p>
                                To use certain features of the service, you must sign in via your Google account. You are responsible for maintaining the confidentiality of your account information. We reserves the right to terminate accounts that violate our policies.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <Truck size={24} className="text-tech-blue" />
                                4. Shipping and Delivery
                            </h2>
                            <p>
                                We offer nationwide delivery across Nigeria. While we strive to meet all delivery timelines, we are not responsible for delays caused by third-party logistics providers. We ensure all laptops are securely packaged and tested before shipment.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">5. Payments and Pricing</h2>
                            <p>
                                All prices are in Nigerian Naira (₦). We reserves the right to change prices at any time without notice. Payments must be completed through our authorized channels before orders are processed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">6. Limitation of Liability</h2>
                            <p>
                                GIANT EDGE TECHNOLOGIES shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service or any laptops purchased through the platform.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100">
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">7. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and defined following the laws of the **Federal Republic of Nigeria**.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
