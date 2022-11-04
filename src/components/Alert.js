import AlertDiv from 'react-bootstrap/Alert'
import {Container, Row, Col} from 'react-bootstrap'
import React, { useState } from 'react';

export default function Alert(props) {

    return (
        <Row id='alert' style={{visibility: 'hidden'}} className="text-center p-2" ><AlertDiv variant='danger'>This image was already selected before</AlertDiv></Row>
    )
}

