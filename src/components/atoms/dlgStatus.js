import React from 'react'
import Radium from 'radium'

const style = {
  fontSize: '10px',
  color: 'white',
}

const DlgStatus = ({status}) => (
  <label style={style}>
    {status}
  </label>
)

export default Radium(DlgStatus)