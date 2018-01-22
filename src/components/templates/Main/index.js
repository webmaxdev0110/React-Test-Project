import React, { Component } from 'react'
import { connect } from 'react-redux'

import RentalForm from '../../organism/rentalForm'
import RentalTable from '../../organism/rentalTable'

import { setInfo } from '../../reducer/rentalList'

class RentalTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
  }
  showModal(info) {
    this.props.setInfo(info);
    this.setState({showModal: true});
  }
  render() {
    return (
      <div>
        <RentalTable showModal={(val) => {this.showModal(val)}} />
        <RentalForm show={this.state.showModal} handleClose={() => {this.setState({showModal: false})}}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  setInfo
}

const mapStateToProps = (state) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(RentalTemplate)