import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const [selected,SetSelected] = useState(0)

  
  const randomQuote = array => SetSelected(array[Math.floor(Math.random() * array.length)]) 
  const random = randomQuote(anecdotes)
  return (
    <div>
      <p>{anecdotes[random]}</p>


    </div>    
  )


}

ReactDOM.render(<App />,document.getElementById('root'))