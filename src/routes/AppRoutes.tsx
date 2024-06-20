import NotFound from '@/app/extra/404';
import ContactUs from '@/app/extra/ContactUs';
import Inquiries from '@/app/extra/Inquiries';
import InvestorPsychology from '@/app/steps/step-3';
import Home from '@/app/home/Home';
import ForexInvestorBehaviourProfileReport from '@/app/home/Table';
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
import StepOne from '@/app/steps/step-1';
import StepTwo from '@/app/steps/step-2';
import StepFour from '@/app/steps/step-4';
import StepThree from '@/app/steps/step-3';

const AppRoutes: FC = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/inquiries" element={<Inquiries />} />
      <Route path='/resources' element={<ForexInvestorBehaviourProfileReport />} />
      <Route path="/investor-psychology" element={<InvestorPsychology />} />
      <Route path="/step-one" element={<StepOne />} />
      <Route path="/step-two" element={<StepTwo />} />
      <Route path="/step-three" element={<StepThree />} />
      <Route path="/step-four" element={<StepFour />} />
   </Routes>
  )
}

export default AppRoutes
