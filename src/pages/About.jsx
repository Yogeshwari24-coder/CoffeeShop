import React from 'react'
import {motion} from 'framer-motion'
import about from '../assets/about.png'
import about_img from '../assets/about_img.png'

const About = () => {
  return (
    <div className='h-[70vh] w-full bg-[#1e1d1d] relative rounded-t-[-30%]'>
      {/* image section div */}
      <div className='overflow-hidden hidden md:block absolute top-[-200px] left-2'>
        <img src={about} className='object-cover h-50 w-50' />
      </div>
      {/* text section dev */}
      <div className='text-[#dcd0bf] md:p-20 p-5 flex flex-col gap-8'>
        <motion.h1
        initial={{
            x: -100,
            opacity: 0
        }} 
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 0.5,
            delay: 0.2
        }}
        className='text-6xl font-bold'>About Us</motion.h1>
        <motion.p 
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 0.3,
            delay: 0.3
        }}
        className='text-xs opacity-75 md:w-[80vh]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, repellendus sapiente suscipit, veniam cupiditate nemo, mollitia repudiandae veritatis quo amet error ratione culpa aliquam perferendis quisquam adipisci. Blanditiis, nemo iusto.</motion.p>
        <motion.p
        initial={{
            opacity: 0,
            y: 100
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        transition={{
            duration: 0.3,
        }}
        className='md:text-sm text-xs md:w-[90vh] opacity-55 md:leading-loose'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem exercitationem id consectetur ut voluptates ipsam, non odio doloremque magnam nemo ea autem esse atque blanditiis saepe illum cum incidunt excepturi?
        Amet quia nemo minima. Ipsa labore cum porro nulla, ea veritatis natus aspernatur dolorem, quae deserunt quaerat, modi animi eveniet sunt quis est explicabo? Aspernatur obcaecati quibusdam porro omnis quidem.
        Repellat,tium dolore mque ipsum endus, voluptas vitae sapiente dolorum. Corrupti pariatur enim sapiente harum hic consequatur ducimus accusamus quos magnam maiores? Asperiores eligendi dolorum voluptatem quae nihil tempora, quia veritatis possimus.</motion.p>
      </div>
      <div className='absolute bottom-0 right-0 opacity-30 md:opacity-95'>
        <img src={about_img} className='object-cover md:h-150 w-150 h-100'/>
      </div>
    </div>
  )
}

export default About
