import React, { useState, useEffect } from 'react';
import ScoreDisplay from './components/ScoreDisplay';
import Cards from './components/Cards';
import Alert from './components/Alert';
import { Container, Row, Col, Stack } from 'react-bootstrap'
import Header from './components/Header'


export default function App() {
  const [usedCards, setUsedCards] = useState([])
  const [score, setScore] = useState(0)
  const [tutorialDiscarded, setTutorialDiscarded] = useState(false)

  function handleClick(id) {
    const cards = document.querySelectorAll('.card')
    if (usedCards.includes(id)) {
      cards.forEach(card => card.classList.add('animate'))
      setTimeout(() => {
        setUsedCards([]);
        flashScore()
        setScore(score - score);
      }, 250);
    } else {
      cards.forEach(card => card.classList.add('animate'))
      setTimeout(() => {
        setUsedCards([...usedCards, id]);
        setScore(score + 1);
      }, 250);
    }
  }

  useEffect(() => {
    if (tutorialDiscarded) {
      const cards = document.querySelectorAll('.card')
      setTimeout(() => {
        cards.forEach(card => card.classList.remove('animate'))
        
      }, 500);
    }
  }, [tutorialDiscarded, score]);

  function flashScore() {
    const score = document.getElementById('score')
    const scoreFixed = document.getElementById('score-fixed')
    score.classList.add('flash-danger')
    scoreFixed.classList.add('flash-danger')
    setTimeout(() => {
      score.classList.remove('flash-danger')
      scoreFixed.classList.remove('flash-danger')
    }, 750);
  }

  async function discardTutorial() {
    const tutorial = document.getElementById('tutorial')
    tutorial.classList.remove('top-50')
    tutorial.classList.add('hidden')
    setTimeout(() => {
      setTutorialDiscarded(true)
    }, 750);
  }

  useEffect(() => {
    const alert = document.getElementById('tutorial');
    alert.style.visibility = 'visible'
  }, []);

  return (
    <Stack className='p-0 '>
      <Header />
      <div className='backdrop container-fluid' />
      <Container className="App  text-center p-0">
        {!tutorialDiscarded && <Alert discardTutorial={discardTutorial} tutorialDiscarded={tutorialDiscarded} />}
        <ScoreDisplay score={score} />
        <Row className="justify-content-center align-items-center m-0">
          <Cards handleClick={handleClick}/>
        </Row>
      </Container>
    </Stack>
  );
}