import React from "react";
import { Navbar, Container } from 'react-bootstrap'
import { IoCarSportSharp } from "react-icons/io5";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand className='d-flex align-items-center'>
                        <h3 className='mb-2 me-2'><IoCarSportSharp /></h3>
                        <h3>Motorsport card game</h3>
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}