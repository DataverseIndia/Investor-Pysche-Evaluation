import { FC } from 'react';
import { Image } from '@nextui-org/image';
import Navbar from '../home/Navbar';
import Footer from '../home/Footer';
import { Steps } from '@/data/factors';
import { Link } from 'react-router-dom';
import { Button } from '@nextui-org/button';
import { ArrowLeft } from 'lucide-react';

const StepFour: FC = () => {
    return (
        <div className=''>
          <Navbar/>
            <div className='w-[80%] flex flex-col justify-center items-center mx-auto phone:pt-[5rem] tablet:pt-[7rem]'>
                <Image
                    src={Steps[3].imageUrl}
                    alt=""
                    className="object-cover rounded-lg phone:h-auto tablet:h-[30rem] w-auto"
                />
                <div className="phone:mt-5 tablet:mt-12">
                    <h1 className="phone:text-2xl lg:text-5xl font-bold tracking-tighter">
                        {Steps[3].heading}
                    </h1>
                    <p className='text-neutral-700 tracking-tight phone:mt-2 tablet:mt-5 pb-7 phone:text-sm tablet:text-base text-justify'>
                        {Steps[3].content}
                    </p>
                </div>
            </div>
            <Link to="/step-three">
                <Button className='bg-neutral-800 text-neutral-50 rounded-md mx-auto flex'>
                    <ArrowLeft className='size-4'/>
                    Step Three
                </Button>
            </Link>
            <div className='phone:pt-10 tablet:pt-16 lg:pt-28'>
                <Footer />
            </div>
        </div>
    );
};

export default StepFour;
