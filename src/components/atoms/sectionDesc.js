import React from 'react'
import Radium from 'radium'

const style = {
  fontSize: '11px',
  color: 'white',
  opacity: 0.6
}

const SectionDesc = ({desc}) => (
  <label style={style}>
    {desc}
  </label>
)

export default Radium(SectionDesc)