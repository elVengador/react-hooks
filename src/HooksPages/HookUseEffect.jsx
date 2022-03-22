import React, { useEffect, useState } from 'react'

export const HookUseEffect = () => {
    /**
     * Explanation:
     * first will execute the useState and build the states
     * then will build ever function
     * then will build the virtual dom
     * then will apply all effects
     *      so will set the interval
     * will render the UI
     * 
     * 
     *      after a second it will change the timer value
     *      so it will rerender again
     * 
     * build the states, functions and clean side effects
     * then will apply all effects again 
     * then render again
     * 
     * and so on ...
     */
    const [timer, setTimer] = useState(0)
    const [play, setPlay] = useState(false)

    useEffect(() => {
        if (!play) { return }

        const timer = setInterval(() => setTimer(prev => prev + 1), 1000)
        return () => clearInterval(timer)
    })

    const onReset = () => setTimer(0)

    const onPlay = () => setPlay(true)

    const onPause = () => setPlay(false)

    const onStop = () => {
        setPlay(false)
        setTimer(0)
    }

    return (
        <div className='card'>
            <h2>useEffect</h2>
            <hr />
            <h4>Timer</h4>
            <h1 className='timer-value'>{timer}</h1>
            <hr />
            {!play && <button onClick={onPlay}>Play</button>}
            {play && <button onClick={onPause}>Pause</button>}
            {play && <button onClick={onStop}>Stop</button>}
            <button onClick={onReset}>Restart</button>
            <hr />

        </div>
    )
}
