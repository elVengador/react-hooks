import React, { useState, useEffect, useCallback } from 'react'

const Viewer = ({ getData }) => {

    useEffect(() => {
        getData()
        console.log('> get data !!');
    }, [getData])

    return <p>Viewer component</p>
}

export const HookUseCallback = () => {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('')

    const getData = () => name.length

    const getDataCallback = useCallback(getData, [name])


    return (
        <div className='card'>
            <h2>useCallback</h2>
            <hr />
            <h4>input + Counter</h4>

            <p>Viewer only render when change name</p>

            {/* <Viewer getData={getData} /> */}
            <Viewer getData={getDataCallback} />
            <input
                type="text"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
            />


            <hr />

            <h3>{counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    )
}
