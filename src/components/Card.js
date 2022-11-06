import React from "react";
import {Container, Row, Col} from 'react-bootstrap'
import CardDiv from 'react-bootstrap/Card'

export default function Card(props) {
    const { handleClick, id } = props;
    function setMaxCardHeight() {
        return window.innerWidth < 768 ? (window.innerHeight/4)*.8 : ''
    }
    return (
        <CardDiv className='card animate' style={{ width: '100%', height: 'clamp(12rem, 20vw, 15rem', maxHeight: setMaxCardHeight() }} onClick={() => handleClick(id)}>
                <CardDiv.Img src={props.image} />
            </CardDiv>
    )
}