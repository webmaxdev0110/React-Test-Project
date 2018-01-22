import { call, put, takeEvery } from 'redux-saga/effects'

import { actions } from '../rentalList'
import { deleteRental, updateRental, loadRentalList } from '../../../api/api'

export function* loadList(action) {
  const rentalList = yield call(loadRentalList)
  yield put({type: actions.setList, payload: rentalList})
}

export function* updateRentalInfo(action) {
  const val = yield call(updateRental, action.payload)
  yield put({type: actions.loadList})
}

export function* deleteRecord(action) {
  const val = yield call(deleteRental, action.payload)
  yield put({type: actions.loadList})
}

export default function* rentalSaga() {
  yield takeEvery(actions.loadList, loadList)
  yield takeEvery(actions.updateInfo, updateRentalInfo)
  yield takeEvery(actions.deleteRental, deleteRecord)
}