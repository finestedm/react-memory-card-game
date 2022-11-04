import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'

export default function ScoreDisplay(props) {
    return (
        <Row>
            <Col>
                {props.score}
            </Col>
        </Row>
    )
}