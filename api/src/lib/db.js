import { GraphQLClient } from 'graphql-request'

// const AUTH_KEY = "Zm5BRF9vOVphdkFDQS1POE93OGotWEhrTmF4US1rN2EyRW00UndyMzpteV9kYjpzZXJ2ZXI="

export const request = async (query = {}) => {
  const endpoint = 'https://graphql.fauna.com/graphql'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Basic ' + process.env.FAUNADB_SECRET
    },
  })

  try {
    return await graphQLClient.request(query)
  } catch (error) {
    console.log(error)
    return error
  }
}
