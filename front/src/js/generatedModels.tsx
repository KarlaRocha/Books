import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type BookCreate = {
   __typename?: 'BookCreate';
  book?: Maybe<BookType>;
};

export type BookDelete = {
   __typename?: 'BookDelete';
  ok?: Maybe<Scalars['Boolean']>;
};

export type BookInputType = {
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};

export type BookType = {
   __typename?: 'BookType';
  id: Scalars['ID'];
  title: Scalars['String'];
  year: Scalars['Date'];
};

export type BookTypeConnection = {
   __typename?: 'BookTypeConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<BookTypeEdge>>;
};

export type BookTypeEdge = {
   __typename?: 'BookTypeEdge';
  node?: Maybe<BookType>;
  cursor: Scalars['String'];
};


export type Mutation = {
   __typename?: 'Mutation';
  bookCreate?: Maybe<BookCreate>;
  bookDelete?: Maybe<BookDelete>;
};


export type MutationBookCreateArgs = {
  input: BookInputType;
};


export type MutationBookDeleteArgs = {
  id: Scalars['ID'];
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  books?: Maybe<BookTypeConnection>;
  book?: Maybe<BookType>;
};


export type QueryBooksArgs = {
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  search?: Maybe<Scalars['String']>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};

export type BookCreateMutationMutationVariables = {
  input: BookInputType;
};


export type BookCreateMutationMutation = (
  { __typename?: 'Mutation' }
  & { bookCreate?: Maybe<(
    { __typename?: 'BookCreate' }
    & { book?: Maybe<(
      { __typename?: 'BookType' }
      & Pick<BookType, 'id'>
    )> }
  )> }
);

export type BookDeleteMutationVariables = {
  id: Scalars['ID'];
};


export type BookDeleteMutation = (
  { __typename?: 'Mutation' }
  & { bookDelete?: Maybe<(
    { __typename?: 'BookDelete' }
    & Pick<BookDelete, 'ok'>
  )> }
);

export type BooksQueryQueryVariables = {
  search?: Maybe<Scalars['String']>;
};


export type BooksQueryQuery = (
  { __typename?: 'Query' }
  & { books?: Maybe<(
    { __typename?: 'BookTypeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'BookTypeEdge' }
      & { node?: Maybe<(
        { __typename?: 'BookType' }
        & Pick<BookType, 'id' | 'title' | 'year'>
      )> }
    )>> }
  )> }
);


export const BookCreateMutationDocument = gql`
    mutation BookCreateMutation($input: BookInputType!) {
  bookCreate(input: $input) {
    book {
      id
    }
  }
}
    `;
export type BookCreateMutationMutationFn = ApolloReactCommon.MutationFunction<BookCreateMutationMutation, BookCreateMutationMutationVariables>;
export type BookCreateMutationComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<BookCreateMutationMutation, BookCreateMutationMutationVariables>, 'mutation'>;

    export const BookCreateMutationComponent = (props: BookCreateMutationComponentProps) => (
      <ApolloReactComponents.Mutation<BookCreateMutationMutation, BookCreateMutationMutationVariables> mutation={BookCreateMutationDocument} {...props} />
    );
    
export type BookCreateMutationProps<TChildProps = {}> = ApolloReactHoc.MutateProps<BookCreateMutationMutation, BookCreateMutationMutationVariables> & TChildProps;
export function withBookCreateMutation<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BookCreateMutationMutation,
  BookCreateMutationMutationVariables,
  BookCreateMutationProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, BookCreateMutationMutation, BookCreateMutationMutationVariables, BookCreateMutationProps<TChildProps>>(BookCreateMutationDocument, {
      alias: 'bookCreateMutation',
      ...operationOptions
    });
};
export type BookCreateMutationMutationResult = ApolloReactCommon.MutationResult<BookCreateMutationMutation>;
export type BookCreateMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<BookCreateMutationMutation, BookCreateMutationMutationVariables>;
export const BookDeleteDocument = gql`
    mutation BookDelete($id: ID!) {
  bookDelete(id: $id) {
    ok
  }
}
    `;
export type BookDeleteMutationFn = ApolloReactCommon.MutationFunction<BookDeleteMutation, BookDeleteMutationVariables>;
export type BookDeleteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<BookDeleteMutation, BookDeleteMutationVariables>, 'mutation'>;

    export const BookDeleteComponent = (props: BookDeleteComponentProps) => (
      <ApolloReactComponents.Mutation<BookDeleteMutation, BookDeleteMutationVariables> mutation={BookDeleteDocument} {...props} />
    );
    
export type BookDeleteProps<TChildProps = {}> = ApolloReactHoc.MutateProps<BookDeleteMutation, BookDeleteMutationVariables> & TChildProps;
export function withBookDelete<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BookDeleteMutation,
  BookDeleteMutationVariables,
  BookDeleteProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, BookDeleteMutation, BookDeleteMutationVariables, BookDeleteProps<TChildProps>>(BookDeleteDocument, {
      alias: 'bookDelete',
      ...operationOptions
    });
};
export type BookDeleteMutationResult = ApolloReactCommon.MutationResult<BookDeleteMutation>;
export type BookDeleteMutationOptions = ApolloReactCommon.BaseMutationOptions<BookDeleteMutation, BookDeleteMutationVariables>;
export const BooksQueryDocument = gql`
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
    `;
export type BooksQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<BooksQueryQuery, BooksQueryQueryVariables>, 'query'>;

    export const BooksQueryComponent = (props: BooksQueryComponentProps) => (
      <ApolloReactComponents.Query<BooksQueryQuery, BooksQueryQueryVariables> query={BooksQueryDocument} {...props} />
    );
    
export type BooksQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<BooksQueryQuery, BooksQueryQueryVariables> & TChildProps;
export function withBooksQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  BooksQueryQuery,
  BooksQueryQueryVariables,
  BooksQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, BooksQueryQuery, BooksQueryQueryVariables, BooksQueryProps<TChildProps>>(BooksQueryDocument, {
      alias: 'booksQuery',
      ...operationOptions
    });
};
export type BooksQueryQueryResult = ApolloReactCommon.QueryResult<BooksQueryQuery, BooksQueryQueryVariables>;