import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"
import { spring } from 'motion'

const Header = () => {
  
    return (
      
      <div className='w-11/12 max-3x1 text-center max-auto h-screen flex flex-col 
      items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0}} 
      whileInView={{scale: 1}} 
      transition={{scale: 0.8, type: 'spring', stiffness: 100}}> 
        <Image src={assets.profile_img} alt='' className='Rounded-full w-40'/> 
      </motion.div>

        <motion.h3 
        initial={{y: -20, opacity: 0}} 
        whileInView={{y: 0, opacity: 1}} 
        transition={{duration: 0.6, delay: 0.3}}
        className='flex items-end gap-2 text-x1 md:text-6x1 mb-3 font-Ovo'>
            Hi, Welcome to my Portfolio | I'm Michael Ogyiri M.<Image src={assets.hand_icon} alt=''
            className='w-6'/> </motion.h3>

        <motion.h1 
        initial={{y: -30, opacity: 0}} 
        whileInView={{y: 0, opacity: 1}} 
        transition={{duration: 0.8, delay: 0.5}}
        className='text-3x1 sm:text-6x1 lg:text-[50px] font-Ovo'> 
          Graphic Designer, Web Developer, IT Infrustracture support specialist baseed in Ghana.</motion.h1>
           
           <motion.p 
           initial={{opacity: 0}} 
           whileInView={{opacity: 1}} 
           transition={{duration: 0.6, delay: 0.7}}
           className='max-w-2x1 max-auto font-Ovo'>
              As a highly motivated and results-driven professional with 3 years of experience, I excel in IT, Graphic Design, and Web Development.
           </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y: 30, opacity: 0}} 
            whileInView={{y: 0, opacity: 1}} 
            transition={{duration: 0.6, delay: 0.1}}
            href="#contact" 
            className='px-10 py-3 border border-white rouded-full bg-black 
            text-white flex items-center gap-2 dark:bg-transparent'>
                Contact me<Image src={assets.right_arrow_white} alt=''
            className='w-4'/> </motion.a>
            <motion.a 
            initial={{y: 30, opacity: 0}} 
            whileInView={{y: 0, opacity: 1}} 
            transition={{duration: 0.6, delay: 1.2}}
            href="/sample-resume.pdf" download 
            className='px-10 py-3 border rouded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
                my resume<Image src={assets.download_icon} alt='' className='w-4'/> </motion.a>
        </div>
    </div>
  )
}

export default Header
