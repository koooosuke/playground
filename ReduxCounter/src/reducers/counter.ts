import { INCREMENT, DECREMENT } from '../constants/counter'
import { Action } from '../actions/counter'

export const createInitialState = () => {
  return {
    current: 0,
  }
}

export type State = ReturnType<typeof createInitialState>

const counterReducer = (state = createInitialState(), action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        current: state.current + 1,
      }
    case DECREMENT:
      return {
        ...state,
        current: state.current - 1,
      }
    default:
      return state
  }
}

export default counterReducer
