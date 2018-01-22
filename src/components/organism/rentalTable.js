import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableHeader } from 'material-ui'
import { filter, hasIn, isEmpty } from 'lodash'

import THeader from '../molecules/tableHeader'
import THeaderCol from '../atoms/tableHeaderCol'
import TRow from '../molecules/tableRow'
import SectionHeader from '../molecules/sectionHeader'
import SearchBox from '../molecules/searchBox'

import { loadList } from '../reducer/rentalList'

const styles = {
  headerStyle: {
    backgroundColor: 'transparent'
  },
  searchWrapper: {
    display: 'flex',
    padding: '10px 30px',
    justifyContent: 'flex-end'
  }
}

class RentalTable extends Component {
  constructor() {
    super()
    this.state = {
      filter: ''
    }
  }
  componentWillMount() {
    this.props.loadList();
  }
  render() {
    const keyword = this.state.filter;
    const list = isEmpty(keyword)?this.props.list:filter(this.props.list, function(val){
      const brand = hasIn(val, 'vehicle.brand')?val.vehicle.brand.indexOf(keyword) !== -1:false
      const fname = hasIn(val, 'driver.first_name')?val.driver.first_name.indexOf(keyword) !== -1:false
      const lname = hasIn(val, 'driver.last_name')?val.driver.last_name.indexOf(keyword) !== -1:false
      const fullname = hasIn(val, 'driver.first_name') && hasIn(val, 'driver.last_name') ?
        `${val.driver.first_name} ${val.driver.last_name}`.indexOf(keyword) !== -1 : false
      const email = hasIn(val, 'driver.email')?val.driver.email.indexOf(keyword) !== -1:false
      return brand || fname || lname || email || fullname
    })
    return (
      <div>
        <SectionHeader title="Rentals" desc={`${list.length} total`} />
        <div style={styles.searchWrapper}>
          <SearchBox onChange={(val) => {this.setState({filter: val})}}/>
        </div>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} style={styles.headerStyle}>
            <THeaderCol>status</THeaderCol>
            <THeaderCol>vehicle</THeaderCol>
            <THeaderCol>driver</THeaderCol>
            <THeaderCol>email</THeaderCol>
            <THeaderCol>start</THeaderCol>
            <THeaderCol>return</THeaderCol>
            <THeaderCol>rate</THeaderCol>
          </TableHeader>
          <TableBody>
            {
              list.map((val, key) =>{
                return (<TRow rentalInfo={val} key={key} onClick={() => {this.props.showModal(val)}}/>)
              })
            }
          </TableBody>
        </Table>
      </div>
    )
  }
}

const mapDispatchToProps = {
  loadList
}

const mapStateToProps = (state) => ({
  list: state.rentalList.list
})

export default connect(mapStateToProps, mapDispatchToProps)(RentalTable)