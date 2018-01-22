import {isEmpty} from 'lodash'
import { baseUrl } from '../constants'

export const loadRentalList = () => {
  return fetch(`${baseUrl}rentals?_expand=driver&_expand=vehicle`)
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return {};
    })
}

export const deleteRental = (rentalId) => {
  return fetch(`${baseUrl}rentals/${rentalId}`,
    {
      method: 'delete'
    }
  ).then(response => {
    return response.json()
  }).catch(error => {
    return {}
  })
}

export const updateRental = (rentalInfo) => {
  var rental = fetch(`${baseUrl}rentals/${rentalInfo.id}`,
    {
      method: 'put',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        rate: rentalInfo.rate,
        start_date: rentalInfo.start_date,
        end_date: rentalInfo.end_date,
        status: rentalInfo.status,
        driverId: rentalInfo.driverId,
        vehicleId: rentalInfo.vehicleId
      })
    }
  )
  
  var driver = fetch(`${baseUrl}drivers/${rentalInfo.driver.id}`,
    {
      method: 'put',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        first_name: rentalInfo.driver.first_name,
        last_name: rentalInfo.driver.last_name,
        email: rentalInfo.driver.email,
      })
    }
  )

  var vehicle = fetch(`${baseUrl}vehicles/${rentalInfo.vehicle.id}`,
    {
      method: 'put',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({
        brand: rentalInfo.vehicle.brand,
      })
    }
  )

  return Promise.all([
    rental, driver, vehicle
  ]).then(values => {
    return values;
  }).catch(error => {
    return {};
  })
}