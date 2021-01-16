export const QUERY = gql`
  query TRAININGS {
    trainings {
      data {
        title
        body
      }
    }
  }
`
export const Loading = () => <div>Loading...</div>
export const Empty = () => <div>Empty</div>
export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ trainings }) => {
  const {data} = trainings
  return data.map(training => (
    <>
      <header>
        <h2>{training.title}</h2>
      </header>
      <p>{training.body}</p>
    </>
  ))
}
