import React, { useState } from 'react'

export const HookSetStateObjects = () => {

    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <input
                type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.currentTarget.value })}
                placeholder='First Name'
            />
            <input
                type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.currentTarget.value })}
                placeholder='Last Name'
            />

            <hr />

            <h2 style={{ textAlign: 'center' }}>First Name: {name.firstName}</h2>
            <h2 style={{ textAlign: 'center' }}>Last Name: {name.lastName}</h2>
        </div>
    )
}
