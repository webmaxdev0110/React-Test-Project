import React from 'react'
import Radium from 'radium'
import { TableRow } from 'material-ui'
import { isEmpty } from 'lodash'

import TRowCol from '../atoms/tableRowCol'
import TRowStatusCol from '../atoms/tableRowStatusCol'

const style = {
  backgroundColor: '#EEEEEE',
  marginBottom: '2px',
  cursor: 'pointer'
}

const TRow = ({rentalInfo, onClick}) => (
  <TableRow style={style} onClick={()=>{onClick(rentalInfo.id)}}>
    <TRowStatusCol status={rentalInfo.status} />
    <TRowCol>{ isEmpty(rentalInfo.vehicle.brand)?'-':rentalInfo.vehicle.brand }</TRowCol>
    <TRowCol>{ isEmpty(rentalInfo.driver.first_name)?'-':`${rentalInfo.driver.first_name} ${rentalInfo.driver.last_name}` }</TRowCol>
    <TRowCol>{ isEmpty(rentalInfo.driver.email)?'-':rentalInfo.driver.email }</TRowCol>
    <TRowCol>{ isEmpty(rentalInfo.start_date)?'-':rentalInfo.start_date }</TRowCol>
    <TRowCol>{ isEmpty(rentalInfo.end_date)?'-':rentalInfo.end_date }</TRowCol>
    <TRowCol>{ isEmpty(rentalInfo.rate)?'-':rentalInfo.rate }</TRowCol>
  </TableRow>
)

export default Radium(TRow)