
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'

import { BOOKS_QUERY } from './queries'
import { BOOK_CREATE_MUTATION } from './mutations'


const Books = (props: any): JSX.Element => {
    const { loading, error , data } = useQuery(BOOKS_QUERY)
    const [addBook] = useMutation(BOOK_CREATE_MUTATION)
    const [bookName, setBookName] = useState(undefined)
    const [bookYear, setBookYear] = useState(undefined)

    
    if (error) return <p>Error: {error}</p>
    if (loading) return <p>Loading...</p>

    return (
        <div>
            <ul>
                {data?.books?.edges.map(({ node }: any) => (
                    <li key={node.id}>
                        {node.title} {node.year}
                    </li>
                ))}
            </ul>
            <form
                onSubmit={(event: any) => {
                    event.preventDefault()
                    addBook({ variables: { input: { title: bookName, year: bookYear } } })
                }}>
                <input 
                    className="form-control"
                    value={bookName}
                    placeholder="Book Title"
                    onChange={(event: any) => setBookName(event.target.value)} />
                <input 
                    className="form-control"
                    value={bookYear}
                    placeholder="Book Year, YYYY-MM-DD"
                    onChange={(event: any) => setBookYear(event.target.value)} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Books 