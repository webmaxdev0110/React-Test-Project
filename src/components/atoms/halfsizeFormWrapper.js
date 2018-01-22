import React from 'react'
import Radium from 'radium'

const styles = {
  halfSizeFieldWrapper: {
    width: '50%',
    padding: '10px 20px',
  }
}

const HalfSizeFieldWrapper = ({children}) => (
  <div style={styles.halfSizeFieldWrapper}>
    {children}
  </div>
)

export default Radium(HalfSizeFieldWrapper)