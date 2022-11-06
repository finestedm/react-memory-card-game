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
        const scoreFixed = document.getElementById('high-score-fixed')
        score.classList.add('flash-success')
        scoreFixed.classList.add('flash-success')
        setTimeout(() => {
          score.classList.remove('flash-success')
          scoreFixed.classList.remove('flash-success')
        }, 750);
      }

    useEffect(() => {
        checkHighScore()
      }, [props.score]);

    return (
        <Row>
            <Col className='score-display justify-content-center d-none d-sm-flex'>
                <h3 className='text-light' id='score'>Score: {props.score}</h3><h3 className='text-light' id='high-score'>, High Score: {highScore}</h3>
            </Col>

            <Col className='score-display d-inline d-sm-none position-fixed start-50 translate-middle bottom-0 text-end align-items-center p-2 bg-dark' style={{'--bs-bg-opacity': '.75'}}>
                <p className='text-light m-0' id='score-fixed'>Score: {props.score}</p><p className='text-light m-0' id='high-score-fixed'> High Score: {highScore}</p>
            </Col>

        </Row>
    )
}