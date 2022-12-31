import { useState } from 'react';

const nextAnec = (index, setIndex, anecLen) => setIndex((index+1)%anecLen);

const voteAnec = (votes, setVote, currIndex) => {
  const votesCopy = votes.slice(0);
  votesCopy[currIndex]++;
  setVote(votesCopy);
}

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>;

const Anecdote = ({text, voteCount}) => {
  return (
    <>
      <p>{text}</p>
      <p>{voteCount} votes</p>
    </>
  );
}

const mostPopIndex = (votes) => {
  let index = 0;
  for(let i = 0; i < votes.length; i++){
    if(votes[index] < votes[i]) index = i;
  }
  return index;
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const topIdx = mostPopIndex(votes);

  return (
    <div>
      <h3>Anecdote of the Day</h3>
      <Anecdote text={anecdotes[selected]} voteCount={votes[selected]} />
      <Button text="Vote" onClick={() => voteAnec(votes, setVotes, selected)} />
      <Button text="Next Anecdote" onClick={() => nextAnec(selected, setSelected, anecdotes.length)} />
      <h3>Most Popular Anecdote</h3>
      <Anecdote text={anecdotes[topIdx]} voteCount={votes[topIdx]} />
    </div>
  );
}

export default App;