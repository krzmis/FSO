import { useState } from 'react'

const goodText = 'good'
const neutralText = 'neutral'
const badText = 'bad'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Stat = ({text, count}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <p>{text}: </p>
          </td>
          <td>
            <p>{count}</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  
  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  
  return (
    <div>
      <Stat text={goodText} count={good}/>
      <Stat text={neutralText} count={neutral}/>
      <Stat text={badText} count={bad}/>
      <Stat text='total' count={total}/>
      <Stat text='avg' count={total === 0 ? 0 : average.toFixed(2)}/>
      <Stat text='positive' count={total === 0 ? 0 : positive.toFixed(2)}/>
    </div>
  )
}
  
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodFeedback = () => {
    setGood(good + 1)
  }
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }
  const handleBadFeedback = () =>  {
    setBad(bad + 1)
  }
  
  return (
    <div>
      <div>
        <p>Give feedback</p>
      </div>
      <Button handleClick={handleGoodFeedback} text={goodText}/>
      <Button handleClick={handleNeutralFeedback} text={neutralText}/>
      <Button handleClick={handleBadFeedback} text={badText}/>
      <div>
        <p>Statistics</p>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App