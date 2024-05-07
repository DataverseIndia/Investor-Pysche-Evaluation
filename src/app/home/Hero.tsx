import { FC } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Button } from '@nextui-org/button';
import HeroButton from '@/components/global/HeroButton';

const Hero: FC = () => {
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const handleDownload = () => {
        const pdfUrl = '/sample.pdf';
        fetch(pdfUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'sample.pdf');
                document.body.appendChild(link);
                link.click();
            })
            .catch(error => {
                console.error('Failed to download PDF:', error);
            });
    };
    return (
        <section className="h-[80vh]">
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
                <div className="phone:w-[90%] lg:w-[25%] flex relative phone:mt-2 lg:mt-0">
                    {isAboveSmallScreens ? (
                        <input
                            className="rounded-full border w-full px-5 phone:py-3.5 lg:py-4 bg-transparent placeholder:text-neutral-500 text-neutral-800 placeholder:font-medium font-medium text-lg border-neutral-300 focus:outline-neutral-300 phone:placeholder:text-sm lg:placeholder:text-lg"
                            placeholder="something@email.com"
                        />
                    ) : (
                        <></>
                    )}
                    <div className="phone:flex gap-3 my-auto phone:mx-auto lg:-ml-[110px]">
                        <HeroButton />
                        {isAboveSmallScreens ? <></> : <Button className='bg-neutral-900 text-white rounded-full phone:px-[1.5rem] py-6' onClick={handleDownload}>Download Sample</Button>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
