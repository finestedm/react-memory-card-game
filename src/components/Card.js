import React from "react";

export default function Card(props) {
    const { handleClick, id } = props;
    return (
        <img src={props.image} onClick={() => handleClick(id)} alt='car'/>
    )
}