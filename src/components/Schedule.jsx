import React from 'react'
import SectionWrapper from './hoc/SectionWrapper'
import { styles } from '../styles'
import { upcomingTournaments } from '../constants'

const Schedule = () => {
  return (
    <section>
      <div className={`${styles.headingTextPages} `}>SCHEDULE</div>
      <div className='flex-col flex mt-[4rem] max-h-[33rem] overflow-scroll no-scrollbar last:pb-[10px]'>
        {upcomingTournaments.map((tournament => (

          <div className='flex justify-center h-[11rem] mt-[4%]'>

            <div className='basis-1/6 font-bold text-[18px] text-center pt-[3.5rem]'>{tournament.date}</div>

            <div className={`{${styles.scheduleBox}} basis-5/6 flex-col flex gap-2 pl-10 pt-[2%]`}>

                <p className='text-[25px] font-medium leading-8'>{tournament.name}</p>
                <p className='text-[18px] font-light'>{tournament.course}</p>
                <p className=' text-[18px] font-light uppercase pb-[10px]'>{tournament.tour}</p>
            
            </div>
          </div>

        )))}

      </div>
    </section>
    
  )
}

export default SectionWrapper(Schedule, "schedule") 