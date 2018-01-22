import React from 'react'
import Radium from 'radium'

const styles = {
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const FormRow = ({children}) => (
  <div style={styles.row}>
    {children}
  </div>
)

export default Radium(FormRow)