import React from 'react'
import hero2_img from '../assets/hero2_img.png'
import { motion, spring } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  return (
    <main className='md:h-screen min-h-[738px] bg-[#2D2424] w-full'>
        <section className='md:min-h-[750px] w-full md:flex justify-center'>
            <motion.div className='md:w-2/4 w-full flex flex-col p-10 pt-20 md:p-20 text-[#E0C097]'>
              <motion.h1 className='md:text-8xl text-4xl  font-bold'
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}>Lorem ipsum dolor sit amet.</motion.h1>
              <motion.p className='mt-5 text-sm'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}>Lorem ipsum dolor sit.</motion.p>
              <motion.p className='mt-5 md:text-sm text-xs md:leading-loose'
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: spring,
                stiffness: 150,
                damping:10, duration: 0.6, delay: 0.5 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore architecto quis ipsum corrupti atque dolore ullam, possimus eius officiis eveniet laboriosam aperiam magnam cumque, beatae provident nesciunt sed. Sit repudiandae velit praesentium rem, ipsum maxime? Ducimus aspernatur enim sapiente!</motion.p>  
              <motion.button
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: spring, damping: 10, duration: 1, delay: 0.6 }}
              className='relative z-50 bg-[#B85C38] md:mt-16 mt-5 h-10 w-32 rounded-xl cursor-pointer'
              onClick={()=>navigate("/shop")}>Shop Now</motion.button>
            </motion.div>
            <div className='md:w-2/4 overflow-hidden md:mt-0 md:ml-0 h-[400px] md:h-full'>
                <motion.img src={hero2_img} className='w-full md:h-screen object-contain md:object-cover' 
                   initial={{ x: 100, y: -100,opacity: 0 }}
                   whileInView={{ x: 0, y: 0, opacity: 1}}
                   transition={{ duration: 0.8, ease: "easeOut", type: spring, stiffness: 150, damping:10 }}/>
            </div>
        </section>
    </main>
  )
}

export default Hero
