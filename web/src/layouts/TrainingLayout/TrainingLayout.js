import {Link, routes} from '@redwoodjs/router'

const TrainingLayout = ({children}) => {
  return (
    <>
      <header>
        <h1>🚀🚀EFFORT🚀🚀</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Login</Link>
            </li>
          </ul>
        </nav>

      </header>

      <main>
        {children}
      </main>
    </>
  )
}

export default TrainingLayout
