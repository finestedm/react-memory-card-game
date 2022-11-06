import React from "react";
import { Navbar, Container } from 'react-bootstrap'
import { IoCarSportSharp } from "react-icons/io5";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand>
                    <IoCarSportSharp />
                    Motorsport card game
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}