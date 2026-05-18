import React, { useEffect, useState } from 'react'

import png1 from '../assets/png1.png'
import png2 from '../assets/png2.png'

import { motion, AnimatePresence } from 'framer-motion'

import { CategoriesData } from '../data/Categories'

const Categories = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === CategoriesData.length - 1 ? 0 : prev + 1
      )
    }, 2500)

    return () => clearInterval(interval)

  }, [])


  const positions = [
    'top-5 right-20',
    'top-35 right-0',
    'top-70 right-0',
    'top-105 right-20',
  ]


  return (
    <div className='relative h-[900px] w-full overflow-hidden px-20'>

      {/* LEFT SECTION */}
      <div
        className='h-[550px] w-[560px] bg-cover bg-center absolute top-0 left-10 rounded-[40px]'
        style={{ backgroundImage: `url(${png1})` }}
      >

        <div className='relative w-full h-full'>

          {/* BIG IMAGE */}
        <AnimatePresence mode='wait'>
        <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className='absolute top-30 left-15 h-80 w-80 rounded-full overflow-hidden shadow-2xl'
        >
            <img
            src={CategoriesData[activeIndex].url}
            alt=''
            className='w-full h-full object-cover rounded-full'
            />
        </motion.div>
        </AnimatePresence>


          {/* ROTATING SMALL IMAGES */}
          {/* ROTATING SMALL IMAGES */}
            {CategoriesData.map((item, index) => {

            const shiftedIndex =
                (index + activeIndex) % positions.length

            return (
                <motion.div
                key={item.id}

                animate={{
                    scale: shiftedIndex === 0 ? 1.2 : 1,
                }}

                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}

                className={`
                    absolute
                    ${positions[shiftedIndex]}
                    h-30
                    w-30
                    rounded-full
                    overflow-hidden
                    shadow-xl
                `}
                >
                <img
                    src={item.url}
                    alt={item.name}
                    className='w-full h-full object-cover rounded-full'
                />
                </motion.div>
            )
            })}        </div>
      </div>


      {/* RIGHT SECTION */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className='h-[500px] w-[480px] bg-cover bg-center absolute top-60 right-10 rounded-[40px]'
        style={{ backgroundImage: `url(${png2})` }}
      ></motion.div>

    </div>
  )
}

export default Categories