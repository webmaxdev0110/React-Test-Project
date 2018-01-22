import { all } from 'redux-saga/effects'
import rentalSaga from './rentalSaga'

export default function* rootSaga() {
  yield all([
    rentalSaga()
  ])
}