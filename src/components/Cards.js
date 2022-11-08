import React from "react";
import Card from "./Card";
import uniqid from 'uniqid'
import {Container, Row, Col} from 'react-bootstrap'


export default function Cards(props) {
    var usedRandom = [];

    function importAll(r) {
        let images = [];
        r.keys().forEach((item) => images.push(r(item)));
        return images;
    }
    const images = importAll(require.context('../photos/', false, /\.jpg/));
    
    function getRandomOrder() {
        var randomOrder = Math.ceil(Math.random() * images.length)
        if (usedRandom.includes(randomOrder)) {
            randomOrder = getRandomOrder()
        } else {
            usedRandom.push(randomOrder)
        }
        return randomOrder
    }
    
    return (
            images.map(image => 
                <Col key={uniqid()} xs={6} md={4} lg={3} className={'p-2 order-'+getRandomOrder()} >
                    <Card id={images.indexOf(image)} image={image} handleClick={props.handleClick} />
                </Col>)
            
    )
}
