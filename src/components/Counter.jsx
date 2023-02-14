import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from '../features/counter/conterSlice'

const Counter = () => {
  const counter = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  const [incrementValue, setIncrementValue] = useState(0)
  return (
    <div className='counter'>
      <p>Counter value: {counter}</p>
      <div className='buttons'>
        <input
          type='number'
          min={1}
          max={100}
          onChange={e => setIncrementValue(e.target.value)}
          value={incrementValue}
        />
        <button
          className='btn btn-success'
          onClick={
            incrementValue
              ? () => dispatch(incrementByAmount(incrementValue))
              : () => dispatch(increment())
          }
        >
          Increment
        </button>
        <button
          className='btn btn-danger'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button className='btn btn-primary' onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
