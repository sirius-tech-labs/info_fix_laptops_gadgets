import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16 md:py-24">
            <Helmet>
                <title>Privacy Policy | GIANT EDGE TECHNOLOGIES</title>
                <meta name="description" content="Privacy Policy for GIANT EDGE TECHNOLOGIES - How we protect your data." />
            </Helmet>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative border border-gray-100">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-tech-blue/5 rounded-bl-full -z-10" />

                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-blue-50 p-3 rounded-2xl">
                            <Shield className="text-tech-blue" size={32} />
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">Privacy Policy</h1>
                    </div>

                    <p className="text-gray-500 font-medium mb-10 border-b border-gray-100 pb-8">
                        Last Updated: April 3, 2026
                    </p>

                    <div className="space-y-10 text-gray-700 leading-relaxed">
                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <Eye size={24} className="text-tech-blue" />
                                1. Introduction
                            </h2>
                            <p>
                                Welcome to **GIANT EDGE TECHNOLOGIES**. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at bellojosh500@gmail.com.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <FileText size={24} className="text-tech-blue" />
                                2. Information We Collect
                            </h2>
                            <p className="mb-4">
                                We collect personal information that you voluntarily provide to us when you register on our website, express an interest in obtaining information about us or our products and services, or when you participate in activities on the services.
                            </p>
                            <ul className="list-disc pl-6 space-y-2 font-medium">
                                <li>**Personal Information**: Name, email address, phone number, and shipping address.</li>
                                <li>**Authentication Data**: We use Google OAuth for authentication, which provides your email and name to verify your identity.</li>
                                <li>**Order History**: Details of products you have purchased and transactions made on our platform.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 flex items-center gap-2">
                                <Lock size={24} className="text-tech-blue" />
                                3. How We Use Your Information
                            </h2>
                            <p>
                                We use personal information collected via our website for a variety of business purposes, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 font-medium">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To fulfill and manage your orders, payments, and deliveries.</li>
                                <li>To respond to user inquiries and offer support.</li>
                                <li>To send you administrative information, such as updates to our terms, conditions, and policies.</li>
                            </ul>
                        </section>

                        <section className="bg-blue-50/50 p-6 rounded-[2rem] border border-blue-100">
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">4. Sharing Your Information</h2>
                            <p>
                                We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We work with trusted partners like **Supabase** (for data storage) and **Vercel** (for hosting) to provide our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">5. Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
                            </p>
                        </section>

                        <section className="pt-8 border-t border-gray-100">
                            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">6. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, you may email us at **bellojosh500@gmail.com** or visit our physical store at number 21 kuteyi street, owalusin iwaro oka akoko Ondo state.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
