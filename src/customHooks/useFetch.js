import { useEffect, useState } from 'react'

export const useFetch = (URI) => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const manageError = (error) => {
        const errorMessage = typeof error.message === 'string'
            ? error.message
            : 'Ups, some error happen'
        setError(errorMessage)
        setIsLoading(false)
    }

    const manageStatusCode = (statusCode) => {
        if (statusCode !== 200) {
            if (res.status === 404) { throw new Error('Ups, data not found') }
            if (res.status === 500) { throw new Error('Ups, error in server') }
            throw new Error('Ups, some error happened')
        }
    }


    useEffect(() => {

        if (!URI) { return }

        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(URI, { signal })
                manageStatusCode(res.status)

                const dataJson = await res.json()
                setData(dataJson)
                setIsLoading(false)
                setError('')
            } catch (error) {
                manageError(error)
            }
        }

        fetchData()

        return () => controller?.abort();
    }, [URI, setError, setIsLoading, setData])

    return { data, isLoading, error }
}
