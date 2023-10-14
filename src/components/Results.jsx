import React from 'react'
import SectionWrapper from './hoc/SectionWrapper'
import { styles } from '../styles'
import { tournamentResults } from '../constants'
import { useState } from 'react'

const Results = () => {
  

    const [clickRound, setClickRound] = useState([]);
    const showRound = () => {
      
    }
    // return (
    //   <tr className={`${styles.resultsBox} bg-darkGreen h-[60px]`}>
    //     <td className=''>Hello</td>
    //     <td className=''>Hello</td>
    //     <td className=''>Hello</td>
    //     <td className=''>Hello</td>
    //     <td className=''>Hello</td>
    //     <td className=''>Hello</td>

    //   </tr>
    // )
  
  return (
    <section>
      <div className={`${styles.headingTextPages} `}>RESULTS</div>
      <table className="dark:text-lightGrey table-fixed mt-[4rem] w-full uppercase text-center border border-separate border-spacing-y-[1rem] border-beige dark:border-blue-300 rounded-lg  overflow-scroll no-scrollbar">
        <thead>
          <tr>
            <th className='font-bold'>DATE</th>
            <th className='font-bold'>TOURNAMENT</th>
            <th className='font-bold'>COURSE</th>
            <th>TOUR</th>
            <th>SCORE</th>
            <th>FINISH</th>
          </tr>
        </thead>
        <tbody>
        {tournamentResults.map((result => (
          // onClick={setClickRound(true)
          <tr className={`${styles.resultsBox} group hover:bg-green-100 dark:hover:bg-green-300 h-[60px]`} >
            <td className='rounded-bl-lg rounded-tl-lg  group-hover:text-white innerBoxShadowTableLeft'>{result.date}</td>
            <td className='group-hover:text-white innerBoxShadowTableTop'>{result.tournament}</td>
            <td className='group-hover:text-white innerBoxShadowTableTop'>{result.course}</td>
            <td className='group-hover:text-white innerBoxShadowTableTop'>{result.tour}</td>
            <td className='group-hover:text-white innerBoxShadowTableTop'>{result.score}</td>
            <td className='rounded-tr-lg rounded-br-lg group-hover:text-white innerBoxShadowTableRight'>{result.finish}</td>
          </tr>
        )))}
        </tbody>
    </table>
    </section>
  )
}

export default SectionWrapper(Results, 'results'); 