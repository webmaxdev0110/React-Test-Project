import React from 'react'
import Radium from 'radium'
import { TableHeader } from 'material-ui'

import THeaderCol from '../atoms/tableHeaderCol'

const style = {
  backgroundColor: 'transparent'
}

const THeader = () => (
  <TableHeader displaySelectAll={false} style={style}>
    <THeaderCol>status</THeaderCol>
    <THeaderCol>vehicle</THeaderCol>
    <THeaderCol>driver</THeaderCol>
    <THeaderCol>email</THeaderCol>
    <THeaderCol>start</THeaderCol>
    <THeaderCol>return</THeaderCol>
    <THeaderCol>rate</THeaderCol>
  </TableHeader>
)

export default Radium(THeader)