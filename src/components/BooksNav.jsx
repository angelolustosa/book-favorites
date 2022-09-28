import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BooksNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <Link className='nav-link' to="/login">login</Link>
                    <Link className='nav-link' to="/books">books</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
