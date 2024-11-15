const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course = {course}/>
      <Content part1 = {part1} exercises1 = {exercises1} part2={part2} exercises2 = {exercises2} part3={part3} exercises3 = {exercises3}
      />
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
      <p>part1: {props.part1} ,Number exercices: {props.exercises1}</p>
      <p>part2: {props.part2} ,Number exercices: {props.exercises2}</p>
      <p>part3: {props.part3} ,Number exercices: {props.exercises3}</p>

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
