import { FC } from 'react';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import useDocumentTitle from '@/hooks/useDocumentTitle';

const ContactUs: FC = () => {
    useDocumentTitle(`Contact Us | investor Pysche Evaluation`)
    return (
        <section className="min-h-screen">
            <div className="h-full overflow-hidden absolute flex-none w-full z-0">
                <img className="block w-full h-full" src="/assets/background.webp" alt="" />
            </div>
            <div className="h-full overflow-hidden absolute flex-none w-full z-0">
                <img className="block w-full h-full" src="/assets/box-pattern.svg" alt="" />
            </div>
            <Navbar />
            <div className="w-full py-12 phone:py-24 lg:py-40 tracking-tight">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-6 text-center">
                        <div className="space-y-2 z-20">
                            <h1 className="phone:text-4xl lg:text-6xl font-semibold tracking-tighter lg:px-2 py-1 gradient-text text-center w-full bg-gradient-to-r from-indigo-500 to-yellow-300 bg-clip-text text-transparent">
                                <span className='bg-gradient-to-r from-indigo-400/95 to-yellow-300/60 bg-clip-text text-transparent'>Contact Us</span>
                            </h1>
                            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Get in touch with us for more information.
                            </p>
                        </div>
                        <div className="w-full max-w-md space-y-4 z-20">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold">Location</h3>
                                    <a
                                        target="_blank"
                                        href="https://maps.app.goo.gl/ZxKkyKU7hXsDEue4A"
                                        className="text-gray-500 dark:text-gray-400"
                                    >
                                        C 442 Defence Colony New Delhi 110024
                                    </a>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-semibold">Phone</h3>
                                    <a
                                        href="tel:+919811740100"
                                        className="text-gray-500 dark:text-gray-400"
                                    >
                                        +91 98117 40100
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default ContactUs;
