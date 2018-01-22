import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import combinedReducer from './reducer'
import rootSaga from './reducer/saga'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combinedReducer,
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware
    )
  )
)

sagaMiddleware.run(rootSaga)

export default store;