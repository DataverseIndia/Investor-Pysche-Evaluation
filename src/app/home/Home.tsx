import { FC } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Insight from './Insight'
import Footer from './Footer'

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Insight />
      <Footer />
    </>
  )
}

export default Home
