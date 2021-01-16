import { render } from '@redwoodjs/testing'

import TrainingLayout from './TrainingLayout'

describe('TrainingLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrainingLayout />)
    }).not.toThrow()
  })
})
