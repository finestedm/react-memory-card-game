import React, { useState, useEffect } from 'react';
import ScoreDisplay from './components/ScoreDisplay';
import Cards from './components/Cards';
import Alert from './components/Alert';
import {Container, Row, Col} from 'react-bootstrap'

let numberOfRenders = 0

export default function App() {
  const [usedCards, setUsedCards] = useState([])
  const [score, setScore] = useState(0)
  const [doubleClicked, setDoubleClicked] = useState(0)
  
  function handleClick(id) {
    if (usedCards.includes(id)) {
      setDoubleClicked(doubleClicked + 1)
    } else {
      setUsedCards([...usedCards, id]);
      setScore(score + 1);
    }
  }

  useEffect(() => {
    if (numberOfRenders > 1) {
      const alert = document.getElementById('alert');
      alert.style.visibility = 'visible'
      setTimeout(() => {
        alert.style.visibility = 'hidden'
      }, 3000);
    }
    numberOfRenders++
  }, [doubleClicked]);

  return (
    <Container className="App text-center">
      <ScoreDisplay score={score} />
      <Row className="text-center justify-content-center">
        <Cards handleClick={handleClick}/>
      </Row>
      <Alert doubleClicked={doubleClicked} />
    </Container>
  );
}