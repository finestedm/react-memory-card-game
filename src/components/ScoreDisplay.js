import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

export default function ScoreDisplay(props) {
    const [highScore, setHighScore] = useState(0)

    function checkHighScore() {
        if (highScore < props.score) {
            setHighScore(props.score)
            flashScore()
        }
    }

    function flashScore() {
        const score = document.getElementById('high-score')
        score.classList.add('flash-success')
        setTimeout(() => {
          score.classList.remove('flash-success')
        }, 500);
      }

    useEffect(() => {
        checkHighScore()
      }, [props.score]);

    return (
        <Row>
            <Col className='d-flex justify-content-center'>
                <h3 id='score'>Score: {props.score}</h3><h3 id='high-score'>, High Score: {highScore}</h3>
            </Col>
        </Row>
    )
}