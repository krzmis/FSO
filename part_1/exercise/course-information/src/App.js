const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
    )
}

const Content = (props) => {
  const parts = () => {
    return props.parts.parts.map((part, i) => (
      <Part key={part.name + i} part={part.name} exercise={part.exercises}/>
      ))
  }
  
  return (
    <div>{parts()}</div>
  )
}

const Total = (props) => {
    return (
        <div>
          <p>Number of exercises {props.total}</p>
        </div>
    )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const totalExercises = course.parts.reduce((a, b) => a + b.exercises, 0)
  
  return (
    <div>
      <Header course={course}/>
      <Content parts={course}/>
      <Total total={totalExercises}/>
    </div>
    )
}

export default App