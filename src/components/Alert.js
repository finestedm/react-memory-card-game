import AlertDiv from 'react-bootstrap/Alert'
import {Container, Row, Col, Button} from 'react-bootstrap'
import React, { useState } from 'react';

export default function Alert(props) {
    console.log(props)
    return (
        <AlertDiv variant='info' id='tutorial' className='justify-content-center row mt-2 position-absolute top-50 start-50 translate-middle' >
            <Col xs={1}></Col>
            <Col xs={10}>To get a point click <b>only</b> on images you haven't clicked before. If you select same picture twice <div className='text-danger'>the score will reset.</div></Col>
            <Col xs={1}><Button className='btn-close' onClick={(e) => props.discardTutorial()} /></Col>
        </AlertDiv>
        )
}

