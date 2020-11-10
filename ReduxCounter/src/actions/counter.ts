import { INCREMENT, DECREMENT } from '../constants/counter'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export type Action = ReturnType<typeof increment> | ReturnType<typeof decrement>
