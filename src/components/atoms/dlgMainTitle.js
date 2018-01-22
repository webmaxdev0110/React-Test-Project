import React from 'react'
import Radium from 'radium'

const style = {
  fontSize: '27px',
  color: 'white'
}

const DlgMainTitle = ({title}) => (
  <label style={style}>
    {title}
  </label>
)

export default Radium(DlgMainTitle)