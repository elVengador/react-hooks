import React, { useState, useMemo } from 'react'

const Viewer = ({ value }) => {

    return <div
        style={{ padding: '5px', margin: '10px 0px' }}
    >
        Important Value: {value}
    </div>
}

export const HookUseMemo = () => {


    const [valueA, setValueA] = useState(0)
    const [valueB, setValueB] = useState(0)
    const [counter, setCounter] = useState(0)



    const complexSum = (A, B) => {
        /**
         * this will be executed when dont be memoized
         */
        console.log('>. running expensive function!!');
        return A + B
    }

    const value = useMemo(() => complexSum(valueA, valueB), [valueA, valueB])

    return (
        <div className='card'>
            <h2>useMemo</h2>
            <hr />
            <h4>Sum + Counter</h4>

            <p>Viewer render only when change value A or value B</p>
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
        </div>
    )
}
