import React, { useContext } from 'react'
import { UserContext } from '../main'

export const HookUseContext = () => {
    const user = useContext(UserContext)

    return (
        <>
            <h1>With Context.Consumer:</h1>
            <UserContext.Consumer>
                {value => <>
                    <h2>Nick: {value.nick}, Age: {value.age}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente tempora esse at aspernatur deserunt facilis dolores? Consectetur pariatur doloremque ipsam labore laudantium, eaque quaerat, facilis expedita nisi earum molestiae.</p>
                </>
                }
            </UserContext.Consumer>

            <hr />

            <h1>With useContext:</h1>
            <h2>Nick: {user.nick}, Age: {user.age}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente tempora esse at aspernatur deserunt facilis dolores? Consectetur pariatur doloremque ipsam labore laudantium, eaque quaerat, facilis expedita nisi earum molestiae.</p>
        </>
    )
}
