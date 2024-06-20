import { FC } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Insight from './Insight'
import Footer from './Footer'
// import Factors from './Factors'

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Factors /> */}
      <Insight />
      <Footer />
    </>
  )
}

export default Home
