import React, { useState, useEffect } from 'react';
import ScoreDisplay from './components/ScoreDisplay';
import Cards from './components/Cards';
import Alert from './components/Alert';
import {Container, Row, Col} from 'react-bootstrap'


export default function App() {
  const [usedCards, setUsedCards] = useState([])
  const [score, setScore] = useState(0)
  const [tutorialDiscarded, setTutorialDiscarded] = useState(false)

  function handleClick(id) {
    if (usedCards.includes(id)) {
      setUsedCards([]);
      flashScore()
      setScore(score - score);
    } else {
      setUsedCards([...usedCards, id]);
      setScore(score + 1);
    }
  }

  function flashScore() {
    const score = document.getElementById('score')
    score.classList.add('flash-danger')
    setTimeout(() => {
      score.classList.remove('flash-danger')
    }, 500);
  }

  function discardTutorial() {
    const tutorial = document.getElementById('tutorial')
    tutorial.classList.add('hidden')
  }

  useEffect(() => {
    const alert = document.getElementById('tutorial');
    alert.style.visibility = 'visible'
  }, []);

  return (
    <Container className="App text-center">
      {!tutorialDiscarded && <Alert discardTutorial={discardTutorial} tutorialDiscarded={tutorialDiscarded} />}
      <ScoreDisplay score={score} />
      <Row className="text-center justify-content-center">
        <Cards handleClick={handleClick}/>
      </Row>
    </Container>
  );
}