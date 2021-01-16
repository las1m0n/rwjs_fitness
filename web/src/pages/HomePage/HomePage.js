import TrainingLayout from "src/layouts/TrainingLayout/TrainingLayout";
import TrainingPostCell from "src/components/TrainingPostCell/TrainingPostCell"

const HomePage = () => {
  return (
    <TrainingLayout>
      <h1>Training 🚀</h1>
      <TrainingPostCell />
    </TrainingLayout>
  )
}

export default HomePage
