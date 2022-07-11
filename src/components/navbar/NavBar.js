import React from 'react'
import './NavBar.scss'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar className='site-nav ' expand='lg'>
      <Container fluid className='navbar-container'>
        <Navbar.Brand href='/'>
          {/* <img src="/images/logo.png" alt="" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' className='bg-light' />
        <Navbar.Collapse id='navbarScroll ' className='justify-content-end'>
          <Nav style={{ maxHeight: 'auto' }} navbarScroll>
            <Nav.Link href='#project'>Projects</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#connect'>Connect</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
