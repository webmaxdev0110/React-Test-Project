import React from 'react'
import Radium from 'radium'

const style = {
  fontSize: '28px',
  color: 'white'
}

const SectionTitle = ({title}) => (
  <label style={style}>
    {title}
  </label>
)

export default Radium(SectionTitle)