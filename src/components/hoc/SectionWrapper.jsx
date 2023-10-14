import { motion } from 'framer-motion';


import { staggerContainer } from '../../utils/motion';

const SectionWrapper = (Component, idName) =>
function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25}}
            className={` wrapperBoxShadow sm:px-16 px-6 max-w-6xl mx-auto min-h-[34rem]  relative z-0 bg-beige dark:bg-blue-300 rounded-3xl border-black border-2 top-[140px] mt-20 mb-[20rem]`}
        >
            <span className='hash-span' id={idName}>
                &nbsp; 
            </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper

// h-[550px]