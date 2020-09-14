import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course}) => (
  <h1>{course}</h1>
)

const Content = ({content}) => (
    <p>
      {content.name} {content.exercises}
    </p>
)

const Total = ({total}) => (
  <p>Number of exercises {total}</p>
)

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
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

   const sum = (array) => {
    let result  = 0;
    for(var i =0; i<array.length; i++){
      result += array[i].exercises; 
      
    }
    return result
  }
  
  const result = sum(parts)

  return(
    <div>
    <Header course={course}/>
    <Content content={parts[0]}/>
    <Content content={parts[1]}/>
    <Content content={parts[2]}/>
    <Total total={result}/>
  
  
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))