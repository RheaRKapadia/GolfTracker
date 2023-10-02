import React from 'react';
import {Link} from 'react-router-dom';
import {navLinks} from '../constants';

import {styles} from '../styles';
import SectionWrapper from './hoc/SectionWrapper';

import {motion} from 'framer-motion';
import { slideIn } from '../utils/motion';

// grid gap-[100px] grid-cols-3 grid-rows-3 mt-20
// w-full relative  mx-auto flex flex-start  flex-wrap mt-20 gap-20

const Home = () => {
  return (
    <section className='mt-20'>
      {/* <div className='text-[50px] px-5 '>Home</div> */}
      <div className='flex flex-row gap-20 justify-between'>
        <div className={`${styles.homeGreenBox} -ml-[100px] basis-1/4`}></div>
        <div className={`${styles.homeGreenBox} basis-1/4`}></div>
        <div className={`${styles.homeGreenBox} -mr-[100px] basis-3/5`}></div>
      </div>
      <div className='flex flex-row   justify-between mt-20'>
        <div className={`${styles.homeGreenBox} -ml-[100px] basis-2/5`}></div>
        <div className={`${styles.homeGreenBox} -mr-[100px] basis-1/2`}></div>
      </div>
      <div className='flex flex-row gap-20 justify-between   mt-[150px]'>
        <div className={`${styles.homeGreenBox} -ml-[100px]  basis-1/6`}></div>
        <div className={`${styles.homeGreenBox} -mr-[100px] basis-5/6`}></div>
      </div>
      <div className=' text-right  -mt-[130px] pr-10'>
        <motion.h1  variants={slideIn('right', 'tween', 0.5, 1)} className={`${styles.headingText}`}>AKSHAY</motion.h1>
      </div>
      
    </section>
  )
}

export default SectionWrapper(Home, "home");