import React from 'react'
import SectionWrapper from './hoc/SectionWrapper'
import { styles } from '../styles'
import { statistics} from '../constants'

const Statistics = () => {
  return (
    <section>
      <div className={`${styles.headingTextPages} `}>STATISTICS</div>
      <div className='mt-[11rem] '>
        {statistics.map((statistic => (
          <div className='grid grid-cols-4 grid-rows-2 gap-10 w-full'>
            <div className={`${styles.statisticsBox } text-center  `}>
              <p className='text-[54px]'>{statistic.scoringAvg}</p>
              <p className='text-[20px] font-light'>Scoring Average</p>
            </div>
            <div className={`${styles.statisticsBox } text-center  `}>
              <p className='text-[54px]'>{statistic.fairwaysHit}</p>
              <p className='text-[20px] font-light'>Fairways Hit</p>
            </div>
            <div className={`${styles.statisticsBox } text-center   `}>
              <p className='text-[54px] '>{statistic.scrambling}</p>
              <p className='text-[20px] font-light'>Scrambling</p>
            </div>
            <div className={`${styles.statisticsBox } text-center  row-span-2 flex flex-wrap `}>
              <p className='text-[54px] w-full z-10'>{statistic.putsPerRound}</p>
              <p className='text-[20px] font-light w-full -mt-[4.5rem] z-10'>Puts per Round</p>
              <div className='bg-darkGreen w-full -mb-4  z-0 rounded-lg -mt-[6rem]'>
                <img  className='-mt-3.5 ml-3' src='src/assets/grass.svg' alt='grass'></img>
              </div>
            </div>
            <div className={`${styles.statisticsBox }  col-span-2 row-start-2 flex  flex-wrap justify-around `}>
              <p className='text-[54px] z-10 '>{statistic.GIR}</p>
              <p className='text-[20px] font-light z-10'>GIR <br></br>Greens In Regulation</p>
              <div className='bg-darkGreen w-full -mb-4  z-0 rounded-lg '>
                <img  className='-mt-3.5 ml-2' src='src/assets/grass.svg' alt='grass'></img>
                <img  className='-mt-3.5 ml-[15rem]' src='src/assets/grass.svg' alt='grass'></img>
              </div>
            </div>
            <div className={`${styles.statisticsBox } text-center   col-start-3 row-start-2`}>
              <p className='text-[54px]'>{statistic.putsPerGIR}</p>
              <p className='text-[20px] font-light'>Puts per GIR</p>
            </div>
          </div>
          
        )))}
      </div>
    
    </section>
  )
}

export default SectionWrapper( Statistics, "statistics");