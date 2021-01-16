import {request} from 'src/lib/db'
import {gql} from 'graphql-request'

export const trainings = async () => {
  const query = gql`
  {
    trainings {
      data {
        title
        body
      }
    }
  }
  `

  const data = await request(query, 'https://graphql.fauna.com/graphql')
  console.log(data['trainings'])
  return data['trainings']
}
