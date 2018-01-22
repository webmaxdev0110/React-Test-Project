import React from 'react'
import Radium from 'radium'
import FlatButton from 'material-ui/FlatButton';

const style = {
  color: '#4C4C4C',
}

const DlgButton = ({label, primary, onClick}) => (
  <FlatButton
    label={label}
    primary={primary}
    onClick={onClick}
    style={style}
  />
)

export default Radium(DlgButton)