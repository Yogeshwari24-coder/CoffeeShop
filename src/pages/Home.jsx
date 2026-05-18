import React from 'react'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import About from './About'
import Contact from './Contact'

const Home = () => {
  return (
    <div className='bg-[#1e1d1d]'>
      <Hero/>
      <BestSeller/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home
