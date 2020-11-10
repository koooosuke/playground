import React, { FC, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { State } from '../reducers/counter'
import { increment, decrement } from '../actions/counter'
import Counter from '../components/Counter'

const ConnectCounter: FC = () => {
  const count = useSelector((state: State) => state.current)
  const dispatch = useDispatch()
  const actions = useMemo(
    () => ({
      increment() {
        dispatch(increment())
      },
      decrement() {
        dispatch(decrement())
      },
    }),
    [dispatch]
  )

  return <Counter count={count} actions={actions} />
}

export default ConnectCounter
