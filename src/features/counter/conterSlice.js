import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    reset: state => {
      state.count = 0
    },
    incrementByAmount: (state, action) => {
      const incrementValue = +action.payload
      state.count = incrementValue + state.count
    }
  }
})

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions
export default counterSlice.reducer
