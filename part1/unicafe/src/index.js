import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {


  const [good,setGood] =  useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const addGood = () => setGood(good+1)
  const addNeutral = () => setNeutral(neutral+1)
  const addBad = () => setBad(bad+1)


  const obj = {
    good : good, 
    neutral: neutral, 
    bad:bad
  }

  

  return (
    <div>
      <Button func={addGood} text="Good"/>
      <Button func={addNeutral} text="Neutral"/>
      <Button func={addBad} text="Bad"/>
      <Statistic  obj={obj}/>


    </div>
  )
}

const Button = ({func,text}) =>(
  <button onClick={func}>{text}</button>
)

const Statistic = ({obj}) => {

  const pourcent = () => (obj.good / (obj.neutral+obj.bad)) *100
  const All = () =>  obj.good + obj.neutral + obj.bad

  let showPourcent = pourcent() == typeof(NaN) ? 0 : pourcent()
  let ShowAll = All()
  

  if(ShowAll == 0){
    return(
      <div>No feedback to give</div>
    )
  }else{

    return(
      <div>
      <p> good {obj.good}</p>
      <p>neutral {obj.neutral}</p>
      <p>bad {obj.neutral}</p>
      <p> All {ShowAll}</p>
      <p> pourcent {showPourcent}</p>

    </div>
  )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'))