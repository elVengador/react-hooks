import React, { useState } from 'react'

export const HookSetState = () => {

    const initialCounter = 0

    const [counter, setCounter] = useState(initialCounter)

    const onIncrement = () => setCounter(counter + 1)
    const onDecrement = () => setCounter(counter - 1)
    const onReset = () => setCounter(initialCounter)
    const onIncrementFiveTimes = () => {
        Array(5).fill().forEach(_ => {
            setCounter(prev => prev + 1)
        });
    }
    const onDecrementFiveTimes = () => {
        Array(5).fill().map(_ => setCounter(prev => prev - 1))
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{counter}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onIncrementFiveTimes}>Increment 5 Times</button>
            <button onClick={onDecrementFiveTimes}>Decrement 5 Times</button>
        </div>
    )
}
