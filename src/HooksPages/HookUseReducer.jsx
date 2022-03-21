import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'RESET':
            return { ...state, counter: 0 }
        case 'CHANGE_VARIATION':
            return { ...state, variation: action.payload }
        case 'INCREMENT_BY_VARIATION':
            return { ...state, counter: state.counter + state.variation }
        case 'DECREMENT_BY_VARIATION':
            return { ...state, counter: state.counter - state.variation }
        case 'RESET_VARIATION':
            return { ...state, variation: 10 }

        default:
            return state;
    }
}

export const HookUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 1, variation: 10 })

    return (
        <>
            <h2>Counter with useReducer:</h2>
            <h2>{state.counter}</h2>

            <input
                type="text"
                value={state.variation}
                onChange={(e) => dispatch({ type: 'CHANGE_VARIATION', payload: +e.currentTarget.value })}
            />

            <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
            <button onClick={() => dispatch({ type: 'INCREMENT_BY_VARIATION' })}>INCREMENT_BY_VARIATION BY N</button>
            <button onClick={() => dispatch({ type: 'DECREMENT_BY_VARIATION' })}>DECREMENT_BY_VARIATION</button>
            <button onClick={() => dispatch({ type: 'RESET_VARIATION' })}>RESET_VARIATION</button>

        </>
    )
}
