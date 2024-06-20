import { FC } from 'react'

const Insight: FC = () => {
  return (
    <section className='phone:-mt-[13vh] lg:-mt-[7vw] keypad:absolute phone:relative'>
      <div className='justify-center items-center flex'>
      </div>
      <div className='badge phone:w-[50%] lg:w-[12%] mx-auto flex justify-center phone:mt-[7vh] lg:mt-[5vw]'>
         <img src='/icons/star.svg' alt='' className='my-auto w-5 h-5'/>
         <p className='font-medium text-sm text-neutral-800'>Crystal Glimpse</p>
      </div>
      <div className='w-full mx-auto flex flex-col phone:gap-3 lg:gap-7'>
         <h1 className='font-semibold phone:text-2xl lg:text-4xl text-center phone:w-[90%] lg:w-[50%] mx-auto tracking-tighter z-20'>Identifying, assessing and managing risk while striving to attain objectives</h1>
         <h1 className='text-center phone:text-sm lg:text-base tracking-tight text-neutral-500 font-medium phone:w-[90%] lg:w-[70%] mx-auto z-20 phone:mt-2 lg:mt-0'>Elevate your trading experience with our comprehensive risk management tools. From identifying potential pitfalls to assessing their impact and implementing strategic safeguards, we help you stay focused on achieving your objectives while safeguarding your investments.</h1>
      </div>
         <img src='/assets/integration.webp' alt='' className='phone:-mt-8 lg:-mt-36 phone:w-full lg:w-[70%] mx-auto rounded-xl z-10'/>
    </section>
  )
}

export default Insight
