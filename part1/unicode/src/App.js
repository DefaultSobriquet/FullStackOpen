import { useState } from 'react'

// Displays a title (header)
const Title = ({text}) => <h1>{text}</h1>;

// Button component
const Button = ({onClick,text}) => (<button onClick={onClick}>{text}</button>);

// Row of Buttons for Good / Neutral / Bad
const ButtonRow = ({goodIncr, neutralIncr, badIncr}) => {
  return (
    <>
      <Button onClick={goodIncr} text="Good"/>
      <Button onClick={neutralIncr} text="Neutral"/>
      <Button onClick={badIncr} text="Bad"/>
    </>
  )
}

// Statistics component
const StatisticsLine = ({name, value}) => (<p>{name}: {value}</p>);

// Displays Statistics for Good / Neutral / Bad
const Statistics = ({goodNum, neutralNum, badNum}) => {
  const total = goodNum+neutralNum+badNum;
  const avgPercent = (goodNum+badNum*(-1))/(total || 1);
  const posPercent = ((goodNum)*100)/(total || 1);

  if(total === 0){
    return (
      <p>No statistics given.</p>
    )
  }

  return (
    <>
      <StatisticsLine name="Good" value={goodNum} />
      <StatisticsLine name="Neutral" value={neutralNum} />
      <StatisticsLine name="Bad" value={badNum} />
      <StatisticsLine name="All" value={total} />
      <StatisticsLine name="Average" value={avgPercent} />
      <StatisticsLine name="Positive" value={posPercent+"%"} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="Give Feedback" />
      <ButtonRow
        goodIncr={() => setGood(good+1)}
        neutralIncr={() => setNeutral(neutral+1)}
        badIncr={() => setBad(bad+1)}
      />
      <Title text="Statistics" />
      <Statistics goodNum={good} neutralNum={neutral} badNum={bad}/>
    </div>
  )
}

export default App