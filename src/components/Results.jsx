import React from 'react'
import SectionWrapper from './hoc/SectionWrapper'
import { styles } from '../styles'
import { tournamentResults } from '../constants'

const Results = () => {
  return (
    <section>
      <div className={`${styles.headingTextPages} `}>RESULTS</div>
      <table className="table-fixed mt-[4rem] w-full uppercase text-center border border-separate border-spacing-y-[1.5rem]  max-h-[10rem] overflow-scroll no-scrollbar">
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
        <tr className={`${styles.resultsBox} group hover:bg-darkGreen h-[60px]`}>
          <td className='group-hover:text-white'>{result.date}</td>
          <td className='group-hover:text-white'>{result.tournament}</td>
          <td className='group-hover:text-white'>{result.course}</td>
          <td className='group-hover:text-white'>{result.tour}</td>
          <td className='group-hover:text-white'>{result.score}</td>
          <td className='group-hover:text-white'>{result.finish}</td>
        </tr>
      )))}
      </tbody>
    </table>
    </section>
  )
}

export default SectionWrapper(Results, 'results'); 