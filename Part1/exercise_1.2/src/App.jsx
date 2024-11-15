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
      <Part name = {props.parts[0].name} exercises = {props.parts[0].exercises} />
      <Part name = {props.parts[1].name} exercises = {props.parts[1].exercises} />
      <Part name = {props.parts[2].name} exercises = {props.parts[2].exercises} />

  </div>
  )
}

const Part = (props) => {

return (
<div>
<p>{props.name} {props.exercises}</p>

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
