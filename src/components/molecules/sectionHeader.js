import React from 'react'
import Radium from 'radium'

import SectionTitle from '../atoms/sectionTitle'
import SectionDesc from '../atoms/sectionDesc'

const styles = {
  base: {
    position: 'relative',
    padding: '15px 30px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#7C7C7C',
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px'
  },
}

const SectionHeader = ({title, desc}) => (
  <div style={styles.base}>
    <SectionTitle title={title} />
    <SectionDesc desc={desc} />
  </div>
)

export default Radium(SectionHeader)