import React from 'react'
import { motion, spring} from 'framer-motion'
import BestSellerCart from './BestSellerCart'
import { Data } from '../data/BestSellerData'

const BestSeller = (title, img, des, price) => {
  return (
    <div className='min-h-[90vh] bg-[#dcd0bf] flex flex-col items-center md:rounded-b-[40%] p-8'>
      <motion.h1 className='text-5xl font-semibold text-[#5C3D2E]'
      initial={{
        opacity: 0,
        y: 100
      }} 
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        type: spring,
        stiffness: 150,
        damping: 10,
        duration: 5,
      }}
      >Best Sellers</motion.h1>
      <motion.div className='h-[3px] md:w-50 bg-[#5C3D2E] mt-4'
      initial={{
        y: 100,
        opacity: 0
      }} 
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        type: spring,
        stiffness: 150,
        damping: 10,
        duration: 10,
      }}
      ></motion.div>
      <motion.p className='md:mt-5 mt-2 text-xs text-center text-[#5C3D2E]' 
       initial={{
        y: 100,
        opacity: 0,
        scale: 0.5
      }} 
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        type: spring,
        stiffness: 150,
        damping: 10,
        duration: 0.8,
      }}
      >Lorem ipsum dolor sit, amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iste?</motion.p>
      <div className='md:flex justify-center gap-10 items-center mt-5'>
         {Data.map((item, index) => (
          <motion.div
            key={item.id}

            initial={{ x: 0, y: 30, opacity: 0 }}
            whileInView={{x:0, y: 0, opacity: 1 }}

            transition={{
              duration: 2,
              breakAfter: 4,
              delay: 0.3 + index * 0.3
            }}
          >
            <BestSellerCart {...item} img={item.img} title={item.title} des={item.des} price={item.price} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default BestSeller
