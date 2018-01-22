import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import { isEmpty } from 'lodash'

import RentalInfo from '../molecules/rentInfo'
import VehicleInfo from '../molecules/vehicleInfo'
import DriverInfo from '../molecules/driverInfo'
import DlgHeader from '../molecules/dlgHeader'
import DlgButton from '../atoms/dlgButton'

import { loadList, deleteRental, updateInfo } from '../reducer/rentalList'

class RentalForm extends Component {
  constructor(props) {
    super(props);
    if(!isEmpty(props.info)) {
      this.state = {
        status: props.info.status,
        fname: props.info.driver.first_name,
        lname: props.info.driver.last_name,
        email: props.info.driver.email,
        startDate: props.info.start_date,
        endDate: props.info.end_date,
        rate: props.info.rate,
        vehicle: props.info.vehicle.brand,
        rentalError: {
          startDate: false,
          endDate: false,
          rate: false,
          status: false,
        },
        rnt: false,
        driverError: {
          fname: false,
          lname: false,
          email: false,
        },
        drv: false,
        vehicleError: {
          brand: false,
        },
        vhc: false,
      }
    }else {
      this.state = {
        status: 'active',
        fname: '',
        lname: '',
        email: '',
        startDate: '',
        endDate: '',
        rate: 0,
        vehicle: '',
        rentalError: {
          startDate: false,
          endDate: false,
          rate: false,
          status: false,
        },
        rnt: false,
        driverError: {
          fname: false,
          lname: false,
          email: false,
        },
        drv: false,
        vehicleError: {
          brand: false,
        },
        vhc: false,
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.info.id !== this.props.info.id) {
      this.setState({
        status: nextProps.info.status,
        fname: nextProps.info.driver.first_name,
        lname: nextProps.info.driver.last_name,
        email: nextProps.info.driver.email,
        startDate: nextProps.info.start_date,
        endDate: nextProps.info.end_date,
        rate: nextProps.info.rate,
        vehicle: nextProps.info.vehicle.brand,
        rentalError: {
          startDate: false,
          endDate: false,
          rate: false,
          status: false,
        },
        rnt: false,
        driverError: {
          fname: false,
          lname: false,
          email: false,
        },
        drv: false,
        vehicleError: {
          brand: false,
        },
        vhc: false,
      })
    }
  }

  validateEmail(mail)
  {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) || isEmpty(mail))
    {
      return true
    }
    return false
  }

  checkRentalInfo() {
    const startDate = isEmpty(this.state.startDate)?'Required':false
    const rate = !this.state.rate?'Required':false
    const status = isEmpty(this.state.status)?'Required':false
    this.setState({
      rentalError: {
        startDate,
        rate,
        status
      },
      rnt: isEmpty(this.state.startDate) || isEmpty(this.state.rate) || isEmpty(this.state.status)
    })
  }

  checkVehicleInfo() {
    const brand = isEmpty(this.state.vehicle)?'Required':false
    this.setState({
      vehicleError: {
        brand
      },
      vhc: isEmpty(this.state.vehicle)
    })
  }

  checkDriverInfo() {
    const email = this.validateEmail(this.state.email)?false:'Invalid Email Address'
    const fname = isEmpty(this.state.fname)?'Required':false
    const lname = isEmpty(this.state.lname)?'Required':false
    this.setState({
      driverError: {
        fname,
        lname,
        email
      },
      drv: isEmpty(this.state.fname) || isEmpty(this.state.lname) || !this.validateEmail(this.state.email)
    })
  }

  handleDelete() {
    this.props.deleteRental(this.props.info.id)
    this.props.handleClose()
  }

  handleSave() {
    if(this.state.drv || this.state.vhc || this.state.rnt) {
      alert('Please Fix the Errors')
      return ;
    }
    this.props.updateInfo({
      id: this.props.info.id,
      rate: this.state.rate,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
      status: this.state.status,
      driverId: this.props.info.driverId,
      vehicleId: this.props.info.vehicleId,
      driver: {
        id: this.props.info.driverId,
        first_name: this.state.fname,
        last_name: this.state.lname,
        email: this.state.email
      },
      vehicle: {
        id: this.props.info.vehicleId,
        brand: this.state.vehicle
      }
    })
    this.props.handleClose()
  }

  render() {
    const actions = [
      <DlgButton
        label="Delete"
        primary={true}
        onClick={() => {this.handleDelete()}}
      />,
      <DlgButton
        label="Save"
        primary={true}
        onClick={() => {this.handleSave()}}
      />,
    ];
    return (
      <Dialog
        title={<DlgHeader mainTitle={this.state.vehicle} status={this.state.status} handleClose={this.props.handleClose} />}
        actions={actions}
        modal={false}
        open={this.props.show}
        onRequestClose={this.props.handleClose}
        paperProps={{
          style: {
            borderRadius: '3px',
            overflow: 'hidden'
          }
        }}
        bodyStyle={{
          padding: '0px'
        }}
        actionsContainerStyle={{
          backgroundColor: '#E6E6E6',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <VehicleInfo
          vehicle={this.state.vehicle}
          error={this.state.vehicleError}
          onChangeVehicle={(evt, newVal)=>{
            this.setState(
              {vehicle: newVal},
              () => {
                this.checkVehicleInfo()
              }
            )
          }}
        />
        <RentalInfo
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          rate={this.state.rate}
          status={this.state.status}
          onChangeStartDate={(dateTime) => {
            this.setState(
              {startDate: JSON.parse(JSON.stringify(dateTime))},
              () => {
                this.checkRentalInfo()
              }
            )
          }}
          onChangeEndDate={(dateTime) => {
            this.setState(
              {endDate: JSON.parse(JSON.stringify(dateTime))},
              () => {this.checkRentalInfo()}
            )
          }}
          onChangeRate={(evt, newVal) => {
            this.setState(
              {rate: newVal},
              () => {
                this.checkRentalInfo()
              }
            )
          }}
          onChangeStatus={(evt, key, payload) => {
            this.setState(
              {status: payload},
              () => {this.checkRentalInfo()}
            )
          }}
          error={this.state.rentalError}
        />
        <DriverInfo
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
          error={this.state.driverError}
          onFnameChange={(evt, newVal) => {
            this.setState(
              {fname: newVal},
              () => {
                this.checkDriverInfo()
              }
            )
          }}
          onLnameChange={(evt, newVal) => {
            this.setState(
              {lname: newVal},
              () => {this.checkDriverInfo()}
            )
          }}
          onEmailChange={(evt, newVal) => {
            this.setState(
              {email: newVal},
              () => {
                this.checkDriverInfo()
              }
            )
          }}
        />
      </Dialog>
    )
  }
}

const mapDispatchToProps = {
  loadList,
  deleteRental,
  updateInfo
}

const mapStateToProps = (state) => ({
  info: state.rentalList.info
})

export default connect(mapStateToProps, mapDispatchToProps)(RentalForm)