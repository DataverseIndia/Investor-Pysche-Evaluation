import { FC } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import HeroButton from '@/components/global/HeroButton';
import { Button } from '@nextui-org/button';
import { useNavigate } from 'react-router-dom';

const Hero: FC = () => {
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navigate = useNavigate()
    const handleStep4 = () => {
        navigate('/step-four')
    }
    const handleStep3 = () => {
        navigate('/step-three')
    }
    const handleStep2 = () => {
        navigate('/step-two')
    }
    const handleStep1 = () => {
        navigate('/step-one')
    }
    return (
        <section className="h-[105vh]">
            <div className="h-full overflow-hidden absolute flex-none w-full z-0">
                <img className="block w-full h-full" src="/assets/background.webp" alt="" />
            </div>
            <div className="h-full overflow-hidden absolute flex-none w-full z-0">
                <img className="block w-full h-full" src="/assets/box-pattern.svg" alt="" />
            </div>
            <div className="flex flex-col phone:gap-3 lg:gap-7 h-full relative justify-center items-center z-20 w-full">
                <div className="phone:text-3xl lg:text-6xl font-semibold tracking-tighter lg:px-2 py-1 gradient-text text-center phone:w-[90%] lg:w-[60%]">
                    <span className="bg-gradient-to-r from-indigo-400/95 to-yellow-300/60 bg-clip-text text-transparent">
                        Investor Psyche Evaluation
                    </span>
                </div>
                <h1 className="phone:text-xl lg:text-4xl font-semibold tracking-tight pb-5 lg:px-2 gradient-text text-center phone:w-[90%] lg:w-[60%]">
                    Find the right investor with the perfect fitment who would add to your pool of
                    funds
                </h1>
                <h1 className="text-center phone:text-sm lg:text-lg text-neutral-500 font-medium phone:w-[90%] lg:w-[50%] phone:-mt-3 lg:-mt-5">
                    Seeking and building strategic alliances and collaborative arrangements through
                    partnerships to advance the objectives of the organization.
                </h1>
                <div className="phone:w-[90%] lg:w-[30%] flex relative phone:mt-2 lg:mt-0">
                    {isAboveSmallScreens ? (
                        <input
                            className="rounded-full border-2 w-full px-5 tablet:py-3.5 lg:py-4 bg-transparent placeholder:text-neutral-500 text-neutral-800 placeholder:font-medium font-medium text-lg border-neutral-300 focus:outline-neutral-300 phone:placeholder:text-sm tablet:placeholder:text-base lg:placeholder:text-lg"
                            placeholder="something@email.com"
                        />
                    ) : (
                        <></>
                    )}
                    <div className="phone:flex gap-3 my-auto phone:mx-auto lg:-ml-[185px]">
                        <HeroButton buttonClassName='rounded-3xl bg-neutral-800/90 hover:bg-neutral-900/90 text-neutral-100' buttonText='Download sample'/>
                    </div>
                </div>
                <div className='grid gap-3'>
                    <Button onClick={handleStep1} radius='sm' className='rounded-3xl phone:px-[3rem] lg:px-10 py-6 bg-neutral-700 text-neutral-100'>
                        Step One
                    </Button>
                    <Button onClick={handleStep2} radius='sm' className='rounded-3xl phone:px-[3rem] lg:px-10 py-6 bg-neutral-700 text-neutral-100'>
                        Step Two
                    </Button>
                    <Button onClick={handleStep3} radius='sm' className='rounded-3xl phone:px-[3rem] lg:px-10 py-6 bg-neutral-700 text-neutral-100'>
                        Step Three
                    </Button>
                    <Button onClick={handleStep4} radius='sm' className='rounded-3xl phone:px-[3rem] lg:px-10 py-6 bg-neutral-700 text-neutral-100'>
                        Step Four
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
