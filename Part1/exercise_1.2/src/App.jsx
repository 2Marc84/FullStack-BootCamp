const App = () => {
  const course = 'Half Stack application development'


  const parts =[
    {name : 'Fundamentals of React', exercises : 10},
    {name : 'Using props to pass data',exercises : 7},
    {name : 'State of a component', exercises : 14},
  ]

  const exercises = parts[0].exercises + parts[1].exercises + parts[2].exercises

  return (
    <div>
      <Header course = {course}/>
      <Content parts = {parts}/>
      <Total exercises = {exercises}/>
    </div>
  )
}

const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {

  return (
   <div>
      <p>part1: {props.parts[0].name} ,Number exercices: {props.parts[0].exercises}</p>
      <p>part2: {props.parts[1].name} ,Number exercices: {props.parts[1].exercises}</p>
      <p>part3: {props.parts[2].name} ,Number exercices: {props.parts[2].exercises}</p>

  </div>
  )
}
const Total = (props) => {

  return (
   <div>
      <p>Total number of exercices for all parts = {props.exercises}</p>
  </div>
  )
}
export default App
