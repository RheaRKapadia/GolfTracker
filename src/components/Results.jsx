import React from 'react'
import SectionWrapper from './hoc/SectionWrapper'
import { styles } from '../styles'
import { tournamentResults } from '../constants'

const Results = () => {
  return (
    <section>
      <div className={`${styles.headingTextPages} `}>RESULTS</div>
      <table class="table-auto">
      <thead>
        <tr>
          <th>DATE</th>
          <th>TOURNAMENT</th>
          <th>COURSE</th>
          <th>TOUR</th>
          <th>SCORE</th>
          <th>FINISH</th>
        </tr>
      </thead>
      <tbody>
      {tournamentResults.map((result => (
        <tr>
          <td>{result.date}</td>
          <td>{result.tournament}</td>
          <td>{result.course}</td>
          <td>{result.tour}</td>
          <td>{result.score}</td>
          <td>{result.finish}</td>
        </tr>
      )))}
      </tbody>
    </table>
    </section>
  )
}

export default SectionWrapper(Results, 'results'); 