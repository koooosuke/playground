import React from 'react'
import { Provider } from 'react-redux'
import Counter from './src/containers/Counter'
import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
