import React from "react";
import Card from "./Card";
import uniqid from 'uniqid'


export default function Cards(props) {
    function importAll(r) {
        let images = [];
        r.keys().forEach((item) => images.push(r(item)));
        return images;
    }
    const images = importAll(require.context('../photos/', false, /\.jpg/));

    return (
        images.map(image => <Card id={images.indexOf(image)} image={image} handleClick={props.handleClick}/>)
    )
}
