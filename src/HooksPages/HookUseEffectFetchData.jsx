import React, { useEffect, useState } from 'react'

export const HookUseEffectFetchData = () => {

    const URI = 'https://jsonplaceholder.typicode.com/posts'
    const [posts, setPosts] = useState([])
    const [views, setViews] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchPosts()
    }, [setError, setIsLoading, setPosts])

    const fetchPosts = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(URI)
            const val = await res.json()
            console.log('posts', val);
            setPosts(val)
            setIsLoading(false)
        } catch (error) {
            console.log('>>', typeof error.message);
            const errorMessage = typeof error.message === 'string'
                ? error.message
                : 'Ups, some error happen'
            setError(errorMessage)
            setIsLoading(false)
        }
    }


    return (
        <div className='card'>
            <h2>useEffect</h2>
            <hr />
            <h4>Posts</h4>
            <span>Views: {views} </span>
            <button onClick={() => setViews(views + 1)}>+</button>

            <div className='posts'>
                {error && <h3>Error: {error}</h3>}
                {isLoading && <h3>Loading...</h3>}
                {
                    !isLoading && posts.map((cur) => <article
                        className='post'
                        key={cur.id}
                    >
                        {cur.title}
                    </article>)
                }
            </div>

        </div>
    )
}
