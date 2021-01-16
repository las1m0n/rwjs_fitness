import gql from 'graphql-tag'

export const schema = gql`
  type Trainings {
    title: String!
    body: String!
  }

  type TrainingsPage {
    data: [Trainings]
  }

  type Query {
    trainings: TrainingsPage
  }
`
