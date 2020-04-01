import gql from 'graphql-tag'

export const BOOKS_QUERY = gql`
    query BooksQuery($search: String) {
        books(search: $search) {
            edges {
                node {
                    id
                    title
                    year
                }
            }
        }
    }
`
