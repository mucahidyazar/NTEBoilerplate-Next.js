import {createStore, applyMiddleware, Store} from 'redux'
import logger from 'redux-logger'
import {createWrapper, Context} from 'next-redux-wrapper'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import * as sagas from '../sagas'

export const initSagas = sagaMiddleware => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}

export const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware, thunkMiddleware, logger]
  const composables = [applyMiddleware(...middlewares)]

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducer, composeWithDevTools(...composables))

  // 3: Run your sagas on server
  initSagas(sagaMiddleware)

  // 4: now return the store:
  return store
}

export const wrapper = createWrapper(makeStore)
