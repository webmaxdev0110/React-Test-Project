import React from 'react'
import Radium from 'radium'
import { TableRowColumn } from 'material-ui'

const style = {
  color: '#4C4C4C',
  fontSize: '14px'
}

const TRowCol = ({children}) => (
  <TableRowColumn style={style}>
    {children}
  </TableRowColumn>
)

export default Radium(TRowCol)