import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {




  const [good,setGood] =  useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = () => setGood(good+1)
  const addNeutral = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)


  




  return (
    <div>
      <button onClick={addGood}>Good</button>
      <button onClick={addNeutral}>Neutral</button>
      <button onClick={addBad}>Bad</button>



      {good} {neutral} {bad}



    </div>
  )



}


ReactDOM.render(<App/>, document.getElementById('root'))