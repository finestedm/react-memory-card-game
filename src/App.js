import React, { useState } from 'react';
import Card from './components/Card';
import ScoreDisplay from './components/ScoreDisplay';
import Cards from './components/Cards';

export default function App() {
  const [usedCards, setUsedCards] = useState([])
  const [score, setScore] = useState(0)

  function handleClick(id) {
    if (usedCards.includes(id)) {
      console.log('no point')
    } else {
      setUsedCards([...usedCards, id]);
      setScore(score + 1);
    }
  }

  return (
    <div className="App">
      {/* <Card handleClick={handleClick} id={'1'} />
      <Card handleClick={handleClick} id={'2'} /> */}
      <ScoreDisplay score={score} />
      <Cards handleClick={handleClick}/>

    </div>
  );
}