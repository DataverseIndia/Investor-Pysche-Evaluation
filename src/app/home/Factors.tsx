// import { FC } from 'react';
// import { Factors as data } from '@/data/factors';
// import { Link } from 'react-router-dom';

// const Factors: FC = () => {
//   return (
//     <div className='phone:w-[95%] tablet:w-[80%] mx-auto flex flex-col tablet:gap-7 phone:pb-20 tablet:pb-40'>
//       {data.map((datum, index) => (
//         <Link to={datum.url} key={datum.id} className='card-cover p-3 rounded-lg'>
//           <div className='grid gap-5'>
//             <div className={`${index % 2 === 1 ? 'tablet:order-first' : ''}`}>
//               <h1 className="phone:text-2xl lg:text-3xl font-bold tracking-tighter">{datum.heading}</h1>
//               <p className="text-neutral-700 mt-5 pb-7 tracking-tighter leading-normal text-justify phone:text-sm tablet:text-base">{datum.content}</p>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   )
// }

// export default Factors;
