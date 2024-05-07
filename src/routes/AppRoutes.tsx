import NotFound from '@/app/extra/404';
import ContactUs from '@/app/extra/ContactUs';
import Home from '@/app/home/Home';
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom';

const AppRoutes: FC = () => {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path="/contact-us" element={<ContactUs />} />
   </Routes>
  )
}

export default AppRoutes
