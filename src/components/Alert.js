import AlertDiv from 'react-bootstrap/Alert'
import {Container, Row, Col, Button} from 'react-bootstrap'
import React, { useState } from 'react';

export default function Alert(props) {
    return (
        <AlertDiv variant='info' id='tutorial' onClose={() => props.discardTutorial()} dismissible className='position-absolute top-50 start-50 translate-middle text-start' >
            <Col className=''>To get a point click <b>only</b> on images you haven't clicked before. If you select same picture twice the score will reset.</Col>
        </AlertDiv>
        )
}

