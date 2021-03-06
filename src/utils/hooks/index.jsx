import { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-API-KEY': '97529230-88e4-4a40-8406-549586218454',
                        'Accept-Version': '1.4.0',
                    },
                })
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { isLoading, data, error }
}
