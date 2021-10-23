import {fork} from 'redux-saga/effects'
import cartSaga from './cart'

const root = function* root() {
  yield fork(cartSaga)
}

export default root
