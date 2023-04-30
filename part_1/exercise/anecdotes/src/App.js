import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const Votes = ({votes, selected}) => <p>Votes: {votes[selected].votes}</p>
const MostVotedAnecdote = ({votes}) => {
  const tempAnecdotes = [...votes]
  tempAnecdotes.sort((a, b) => b.votes - a.votes);
  
  return (
    <div>
      <p>Anecdote with most votes: </p>
      <p>{tempAnecdotes[0].text.text}</p>
    </div>
    )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const annecdotesToVote = anecdotes.map(text => {
    return {
      text: {text},
      votes: 0
    }
  })
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(annecdotesToVote)
  
  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };
  
  const vote = () => {
    setVotes(prevVotes => {
      const updatedVotes = [...prevVotes];
      updatedVotes[selected] = {
        ...updatedVotes[selected],
        votes: updatedVotes[selected].votes + 1
      };
      
      return updatedVotes;
    })
  }
  


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={getRandomAnecdote} text={'Next Anecdote'} />
      <Button handleClick={vote} text={'Vote'} />
      <Votes votes={votes} selected={selected} />
      <MostVotedAnecdote votes={votes} />
    </div>
    );
}

export default App