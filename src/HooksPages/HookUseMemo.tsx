import React, { useState, useMemo } from 'react'

const Viewer = ({ value }) => {
    /**
     * This component is renderer only if change valueA or ValueB
     * if change counter it wont be called, Because we are using useMemo
     */
    console.log('render VVV');
    return <div>Important Value:{value}</div>
}

export const HookUseMemo = () => {


    const [valueA, setValueA] = useState(0)
    const [valueB, setValueB] = useState(0)
    const [counter, setCounter] = useState(0)



    const complexSum = (A, B) => {
        console.log('>>>>');
        return A + B
    }

    const value = useMemo(() => complexSum(valueA, valueB), [valueA, valueB])

    return (
        <>
            <h1>Hook useMemo:</h1>
            <input
                type="number"
                value={valueA}
                onChange={e => setValueA(+e.currentTarget.value)}
            />
            <input
                type="number"
                value={valueB}
                onChange={e => setValueB(+e.currentTarget.value)}
            />

            <Viewer value={value} />
            {/* <Viewer value={complexSum(valueA, valueB)} /> */}

            <hr />

            <h3>{counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </>
    )
}
