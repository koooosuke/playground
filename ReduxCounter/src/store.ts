import { applyMiddleware, createStore, Middleware } from 'redux'
import thunk from 'redux-thunk'
import counterReducer, { createInitialState } from './reducers/counter'

const store = createStore(
  counterReducer,
  createInitialState(),
  applyMiddleware(thunk)
)

export default store
