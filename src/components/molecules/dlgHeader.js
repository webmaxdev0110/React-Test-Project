import React from 'react'
import Radium from 'radium'

import DlgCloseButton from '../atoms/dlgCloseButton'
import DlgMainTitle from '../atoms/dlgMainTitle'
import DlgStatus from '../atoms/dlgStatus'

const styles = {
  base: {
    position: 'relative',
    padding: '15px 30px',
    display: 'flex',
    flexDirection: 'column'
  },
  reserved: {
    backgroundColor: '#A81526'
  },
  active: {
    backgroundColor: '#FF3600'
  },
  returned: {
    backgroundColor: '#A87BD9'
  },
  archived: {
    backgroundColor: '#4C4C4C'
  }
}

const DlgHeader = ({mainTitle, status, handleClose}) => (
  <div style={[styles.base, styles[status]]}>
    <DlgMainTitle title={mainTitle} />
    <DlgStatus status={status} />
    <DlgCloseButton onClick={handleClose} />
  </div>
)

export default Radium(DlgHeader)