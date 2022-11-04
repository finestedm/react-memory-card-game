import AlertDiv from 'react-bootstrap/Alert'
import {Container, Row, Col} from 'react-bootstrap'
import React, { useState } from 'react';

export default function Alert(props) {

    return (
        <Row id='alert' style={{visibility: 'hidden'}} className="text-center"><AlertDiv variant='danger'>This image was already selected before</AlertDiv></Row>
    )
}

