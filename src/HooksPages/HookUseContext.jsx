import React, { useContext } from 'react'
import { UserContext } from '../main'

export const HookUseContext = () => {
    const user = useContext(UserContext)

    return (
        <div className='card'>
            <h2>useContext</h2>
            <hr />
            <h3>With Context.Consumer:</h3>

            <UserContext.Consumer>
                {value => <>
                    <h4>Nick: {value.nick}, Age: {value.age}</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente tempora esse at aspernatur deserunt facilis dolores? Consectetur pariatur doloremque ipsam labore laudantium, eaque quaerat, facilis expedita nisi earum molestiae.</p>
                </>
                }
            </UserContext.Consumer>

            <hr />
            <h3>With useContext:</h3>
            <h4>Nick: {user.nick}, Age: {user.age}</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente tempora esse at aspernatur deserunt facilis dolores? Consectetur pariatur doloremque ipsam labore laudantium, eaque quaerat, facilis expedita nisi earum molestiae.</p>
        </div>
    )
}
