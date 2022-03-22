import React, { useState } from 'react'
import { useFetch } from '../customHooks/useFetch'

export const MiniBlog = () => {

    const URI = 'https://jsonplaceholder.typicode.com/posts'
    const [views, setViews] = useState(10)
    const { data, error, isLoading } = useFetch(URI)

    return (
        <div className='card'>
            <h2>Custom Hook</h2>
            <hr />
            <h4>Posts</h4>
            <span>Views: {views} </span>
            <button onClick={() => setViews(views + 1)}>+</button>

            <div className="posts">
                {error && <h3>{error}</h3>}
                {isLoading && <h3>Loading...</h3>}
                {
                    !isLoading && data && data.map((cur) => <article
                        className='post'
                        key={cur.id}
                    >
                        {cur.title}
                    </article>)
                }
                {!isLoading && !data && <p>No data!!</p>}
            </div>
        </div>
    )
}
