import { createAction, handleActions } from 'redux-actions'

export const actions = {
  loadList: 'list/LOAD_LIST',
  setList: 'list/SET_LIST',
  setInfo: 'list/SET_INFO',
  deleteRental: 'list/DELETE_RENTAL',
  updateInfo: 'list/UPDATE_INFO'
}

export const loadList = createAction(actions.loadList)
export const setList = createAction(actions.setList)
export const setInfo = createAction(actions.setInfo)
export const deleteRental = createAction(actions.deleteRental)
export const updateInfo = createAction(actions.updateInfo)

const defaultState = { list: [], info: {} }

export default handleActions({
  [actions.setList]: (state, action) => ({ ...state, list: action.payload }),
  [actions.setInfo]: (state, action) => ({ ...state, info: action.payload })
}, defaultState)