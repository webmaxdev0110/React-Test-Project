import React from 'react'
import Radium from 'radium'
import NavigationClose from 'react-material-icons/icons/navigation/close'

const style = {
  fontSize: '27px',
  color: 'white',
  background: 'transparent',
  border: 'none',
  position: 'absolute',
  right: '10px',
  top: '25px'
}

const DlgCloseButton = ({onClick}) => (
  <button
    style={style}
    onClick={onClick}
  >
    <NavigationClose style={{color: 'white'}} />
  </button>
)

export default Radium(DlgCloseButton)