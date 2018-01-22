import React from 'react'
import Radium from 'radium'

const styles = {
  fullSizeFieldWrapper: {
    width: '100%',
    padding: '10px 20px',
    textAlign: 'center',
  }
}

const FullSizeFieldWrapper = ({children}) => (
  <div style={styles.fullSizeFieldWrapper}>
    {children}
  </div>
)

export default Radium(FullSizeFieldWrapper)