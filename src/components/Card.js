import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import CardDiv from 'react-bootstrap/Card'

export default function Card(props) {
    const { handleClick, id } = props;
    return (
            <CardDiv style={{ width: '100%', height: 'clamp(12rem, 20vw, 15rem' }} onClick={() => handleClick(id)}>
                <CardDiv.Img src={props.image} />
            </CardDiv>
    )
}