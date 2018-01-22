import React from 'react'
import Radium from 'radium'

const styles = {
  base: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '20px',
    borderBottom: '1px solid #AFAFAF'
  }
}

const FormSection = ({children}) => (
  <div style={styles.base}>
    {children}
  </div>
)

export default Radium(FormSection)