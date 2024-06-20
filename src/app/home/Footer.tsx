import { Button } from '@nextui-org/button';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
    return (
        <section className="mx-auto h-full -mt-[5vw] w-full">
            <div className="overflow-hidden flex justify-center items-center phone:px-[2vh] lg:px-[10vw] w-full z-0 phone:rounded-t-2xl lg:rounded-t-3xl phone:h-[75vh] lg:h-[60vh] absolute">
                <img
                    className="block h-full w-full phone:rounded-t-2xl lg:rounded-t-3xl"
                    style={{ imageRendering: 'auto' }}
                    src="/assets/footer-background.webp"
                    alt=""
                />
            </div>
            <div className="phone:pt-5 lg:pt-16 lg:h-[60vh]">
                <div className="badge phone:w-[50%] lg:w-[12%] mx-auto flex justify-center">
                    <img src="/icons/star.svg" alt="" className="my-auto w-5 h-5" />
                    <p className="font-medium text-sm text-neutral-800">Get Started Now</p>
                </div>
                <div className="absolute mx-auto flex flex-col justify-center w-full phone:mt-5 lg:mt-0">
                    <h1 className="phone:text-2xl lg:text-4xl text-center text-neutral-900 font-semibold tracking-tighter w-[80%] mx-auto">
                        Unlock More Teading insights with Less Effort!
                    </h1>
                    <h1 className="phone:text-sm lg:text-base text-center text-neutral-500 tracking-tighter phone:mt-2 lg:mt-5 w-[80%] mx-auto">
                        Focusing personal efforts on achieving results consistent with the
                        organization’s objectives
                    </h1>
                    <div className="lg:w-[60%] mx-auto px-4 sm:px-6 lg:px-8 phone:pt-10 lg:pt-20 tracking-tight">
                        <div className="lg:flex justify-between mx-auto">
                            <div className="w-full">
                                <div className="flex phone:justify-center lg:justify-start gap-3">
                                    <img src="/Logo.svg" alt="logo" className="w-6 h-6 my-auto" />
                                    <h1 className="my-auto text-lg font-medium">
                                        Investor Psyche Evaluation
                                    </h1>
                                </div>
                                <p className="phone:mb-2 lg:mb-4 phone:text-sm lg:text-base phone:w-[90%] phone:mx-auto lg:w-[70%] lg:mx-0 phone:mt-2 lg:mt-5 text-neutral-700 font-medium phone:text-center lg:text-start">
                                    With Investor Psyche Evaluation, experience a light, open-source
                                    analytics platform that honors privacy.
                                </p>
                                <div className='w-full flex phone:justify-center lg:justify-start phone:py-7 lg:py-0'>
                                    <Button className="lg:justify-start py-5 bg-neutral-800 text-white rounded-md">
                                        Follow us on X
                                    </Button>
                                </div>
                            </div>
                            <div className="flex phone:justify-center lg:justify-between phone:gap-7 lg:gap-10 phone:mt-5 tablet:mt-0">
                                {/* <div>
                                    <h3 className="text-lg font-semibold text-neutral-500 phone:mb-1 lg:mb-1 text-center">
                                        Company
                                    </h3>
                                    <ul className="text-neutral-800 text-center">
                                        <li>
                                            <Link to='/contact-us' className='underline'>Contact</Link>
                                        </li>
                                    </ul>
                                </div> */}
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-500 phone:mb-1 lg:mb-1 text-center">
                                        Resources
                                    </h3>
                                    <ul className="text-neutral-800 text-center">
                                        <li>
                                            <Link to="/" className='underline'>Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
