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
            className={`sm:px-16 px-6 max-w-7xl mx-auto h-[550px] relative z-0 bg-beige rounded-3xl border-black border-2 top-[130px] mt-20 mb-20`}
        >
            <span className='hash-span' id={idName}>
                &nbsp; 
            </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper