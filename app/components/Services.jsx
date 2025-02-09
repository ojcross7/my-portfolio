import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
    initial={{opacity: 0}} 
    whileInView={{opacity: 1}} 
    transition={{duration: 1}}  
    id='services'
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        isDarkMode ? 'bg-darkTheme text-white' : 'bg-white text-black'
      }`}
    >
      <motion.h4 
      initial={{y:-20, opacity: 0}} 
      whileInView={{y: 0, opacity: 1}} 
      transition={{delay: 0.3, duration: 0.5}}
      className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>
      <motion.h2 
      initial={{y:-20, opacity: 0}} 
      whileInView={{y: 0, opacity: 1}} 
      transition={{delay: 0.5, duration: 0.5}}
      className='text-center mb-2 text-5xl font-Ovo'>My Services</motion.h2>

      <motion.p 
      initial={{opacity: 0}} 
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a dedicated IT professional based in Ghana with over three years of expertise spanning Graphic Design, Web/App Development, and other IT Support services.
      </motion.p>

      <motion.div 
      initial={{opacity: 0}} 
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileHover={{scale: 1.05}}
            key={index}
            className={`border ${
              isDarkMode ? 'border-gray-600' : 'border-gray-400'
            } rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer ${
              isDarkMode ? 'hover:bg-darkHover' : 'hover:bg-lightHover'
            } hover:-translate-y-1 duration-500`}
          >
            <Image src={icon} alt='' className='w-5' />
            <h3 className={`text-lg my-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {title}
            </h3>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-6`}>
              {description}
            </p>
            <a
              href={link}
              className='flex items-center gap-2 text-sm mt-5'
            >
              Read more <Image alt='' src={assets.right_arrow} className='w-4' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;