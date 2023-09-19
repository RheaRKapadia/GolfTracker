import React from 'react'
import SectionWrapper from './hoc/SectionWrapper'
import { styles } from '../styles'

const Statistics = () => {
  return (
    <section>
      <div className={`${styles.headingTextPages} `}>STATISTICS</div>
    </section>
  )
}

export default SectionWrapper( Statistics, "statistics");