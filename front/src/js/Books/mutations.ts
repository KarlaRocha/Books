import gql from 'graphql-tag'

export const BOOK_CREATE_MUTATION = gql`
    mutation BookCreateMutation($input: BookInputType!) {
        bookCreate(input: $input){
            book {
                id
                title
            }
        }
    }
`

export const BOOK_DELETE_MUTATION = gql`
    mutation BookDelete($id: ID!){
        bookDelete(id: $id){
            ok
        }
    }
`