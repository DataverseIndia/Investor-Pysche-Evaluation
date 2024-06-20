import HeroButton from '@/components/global/HeroButton';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react';

const DesktopNavbar: FC = () => {
    return (
        <section className="px-[10vw] grid grid-cols-3 py-3 fixed backdrop-blur-md z-30 w-full ">
            <Link to="/" className="mr-auto flex gap-3">
                <img src="/Logo.svg" alt="logo" className="w-6 h-6 my-auto" />
                <h1 className="my-auto font-medium">Investor Psyche Evaluation</h1>
            </Link>
            <div className="text-neutral-600 font-light flex my-auto justify-center">
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex gap-2 justify-center items-center hover:bg-white/40 animation px-5 py-2 rounded-full outline-none'>
                        <p>Factors</p>
                        <ChevronDown className='size-4 text-neutral-600 my-auto rotate-180 animation'/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='card-cover'>
                        <DropdownMenuItem>
                            <Link to="/investor-psychology">Investor psychology</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to="/cognitive-bias">Cognitive Bias</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to="/emotional-factors">Emotional Factors</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Link to="/" className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    Pricing
                </Link>
                <Link to="/resources" className="hover:bg-white/40 animation px-5 py-2 rounded-full">
                    Resources
                </Link>
                {/* <Link
                    to="/contact-us"
                    className="hover:bg-white/40 animation px-5 py-2 rounded-full text-nowrap"
                >
                    Contact Us
                </Link> */}
            </div>
            <div className="flex gap-3 ml-auto">
                <HeroButton buttonClassName="bg-neutral-800 rounded-md text-white hover:bg-neutral-900/95 py-4 px-3" buttonText='Download sample'/>
            </div>
        </section>
    );
};

export default DesktopNavbar;
