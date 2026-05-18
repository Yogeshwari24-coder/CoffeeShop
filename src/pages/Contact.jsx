import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {delay, motion, spring} from 'framer-motion'

const Contact = () => {
  return (
    <div className='min-h-[30vh] bg-[#dcd0bf] flex md:flex-row flex-col justify-between items-center gap-3 pt-10 md:px-50 px-35'>
      <motion.div 
      initial={{
        y: 10,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        type: spring,
        damping: 10,
        duration: 0.6,
        delay: 0.3
      }}
      className=' h-50 w-40 flex flex-col items-center'>
        <span className='text-[#B85C38] font-bold text-3xl'><FaHome/></span>
        <h1 className='text-lg font-semibold text-[#2D2424] opacity-88'>VISIT US</h1>
        <p className='text-center text-sm opacity-55 text-[#2D2424]'>Lorem ipsum dolor sit amet.</p>
        <p className='font-semibold text-[#B85C38]'>landmark</p>
      </motion.div>
      <motion.div 
      initial={{
        y: 10,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        type: spring,
        damping: 10,
        duration: 0.6,
        delay: 0.3
      }}
      className=' h-50 w-40 flex flex-col items-center'>
        <span className='text-[#B85C38] font-bold text-3xl'><IoMdCall/></span>
        <h1 className='text-lg font-semibold text-[#2D2424] opacity-88'>CALL US</h1>
        <p className='text-center text-sm opacity-55 text-[#2D2424]'>Lorem ipsum dolor sit amet.</p>
        <p className='font-semibold text-[#B85C38]'>+91 1234567890</p>
      </motion.div>
      <motion.div 
      initial={{
        y: 10,
        opacity: 0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        type: spring,
        damping: 10,
        duration: 1,
        breakAfter: 2,
        delay: 0.3
      }}
      className=' h-50 w-40 flex flex-col items-center'>
        <span className='text-[#B85C38] font-bold text-3xl'><HiOutlineMail/></span>
        <h1 className='text-lg font-semibold text-[#2D2424] opacity-88'>CONTACT US</h1>
        <p className='text-center text-sm opacity-55 text-[#2D2424]'>Lorem ipsum dolor sit amet.</p>
        <p className='font-semibold text-[#B85C38]'>coffeeshop@gmail.com</p>
      </motion.div>
    </div>
  )
}

export default Contact
