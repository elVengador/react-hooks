import React, { useState, useRef } from 'react'

export const HookUseRef = () => {

    const [name, setName] = useState('')
    const myInput = useRef(null)
    const myMutableCounter = useRef(0)

    console.log('render', myMutableCounter.current);


    return (
        <div className='card'>
            <h2>useRef</h2>
            <hr />
            <h4>Input + Counter</h4>

            <div>
                <ol>
                    <li>useRef is used to make reference to a HTML element</li>
                    <li>also to save values in a mutable object without render</li>
                </ol>
            </div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
                ref={myInput}
            />

            <div>
                <button onClick={() => myInput.current.focus()}>Focus</button>
                <button onClick={() => myInput.current.blur()}>Loos Focus</button>
            </div>

            <hr />

            <h1>{myMutableCounter.current}</h1>
            <button onClick={() => myMutableCounter.current += 1}>Increment Mutable value without render</button>
        </div>
    )
}
