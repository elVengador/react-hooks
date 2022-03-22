import React, { useEffect, useState } from 'react'
import { useFetch } from '../customHooks/useFetch'

export const SearchPosts = () => {

    const URI = 'https://jsonplaceholder.typicode.com/posts'
    const [search, setSearch] = useState('')
    const [url, setUrl] = useState('')
    const { data, error, isLoading } = useFetch(url)

    const onChangeSearch = (e) => {
        const value = e.currentTarget.value
        setSearch(value)
        const newUrl = value ? `${URI}/${value}` : ''
        setUrl(newUrl)
    }

    return (
        <div className='card'>
            <h2>Custom Hook</h2>
            <hr />
            <h4>Search Post</h4>
            <div className="posts">
                <input
                    type="text"
                    value={search}
                    onChange={onChangeSearch}
                    placeholder="Search..."
                />
                <p>Post with id {search || ' '}:</p>

                {error && <h3>{error}</h3>}
                {isLoading && <h3>Loading...</h3>}

                {
                    !isLoading && data && <article
                        className='post'
                    >
                        {data.title}
                    </article>
                }

            </div>
        </div>
    )
}
