import React from 'react'
import Radium from 'radium'
import { TableHeaderColumn } from 'material-ui'

const style = {
  backgroundColor: 'transparent',
  color: '#BDBDBD',
  fontSize: '11px'
}

const THeaderCol = ({children}) => (
  <TableHeaderColumn style={style}>
    {children}
  </TableHeaderColumn>
)

export default Radium(THeaderCol)