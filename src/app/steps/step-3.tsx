import { FC } from 'react';
import { Image } from '@nextui-org/image';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import { Steps } from '@/data/factors';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const StepThree: FC = () => {
    return (
        <div className=''>
          <Navbar/>
            <div className='w-[80%] flex flex-col justify-center items-center mx-auto phone:pt-[5rem] tablet:pt-[7rem]'>
                <Image
                    src={Steps[2].imageUrl}
                    alt=""
                    className="object-cover rounded-lg phone:h-auto tablet:h-[30rem] w-auto"
                />
                <div className="phone:mt-5 tablet:mt-12">
                    <h1 className="phone:text-2xl lg:text-5xl font-bold tracking-tighter">
                        {Steps[2].heading}
                    </h1>
                    <p className='text-neutral-700 tracking-tight phone:mt-2 tablet:mt-5 pb-7 phone:text-sm tablet:text-base text-justify'>
                        {Steps[2].content}
                    </p>
                </div>
            </div>
            <div className='flex gap-5 justify-center'>
                <Link to="/step-two">
                    <Button className='bg-neutral-800 text-neutral-50 rounded-md mx-auto flex'>
                        <ArrowLeft className='size-4'/>
                        Step Two
                    </Button>
                </Link>
                <Link to="/step-four">
                    <Button className='bg-neutral-800 text-neutral-50 rounded-md mx-auto flex'>
                        Step Four
                        <ArrowRight className='size-4'/>
                    </Button>
                </Link>
            </div>
            <div className='phone:pt-10 tablet:pt-16 lg:pt-28'>
                <Footer />
            </div>
        </div>
    );
};

export default StepThree;
