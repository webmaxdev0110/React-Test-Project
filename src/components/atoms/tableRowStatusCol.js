import React from 'react'
import Radium from 'radium'
import { TableRowColumn } from 'material-ui'

const styles = {
  base: {
    fontSize: '14px',
    textTransform: 'capitalize'
  },
  reserved: {
    color: '#A81526'
  },
  active: {
    color: '#FF3600'
  },
  returned: {
    color: '#A87BD9'
  },
  archived: {
    color: '#4C4C4C'
  }
}

const TRowStatusCol = ({status}) => (
  <TableRowColumn style={{...styles.base, ...styles[status]}}>
    {status}
  </TableRowColumn>
)

export default Radium(TRowStatusCol)