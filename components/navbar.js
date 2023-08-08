'use client'

import Link from 'next/link'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavigationMenu() {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Metrics UI</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav>
            <Nav.Item><Nav.Link as={Link} href='/'>Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={Link} href='/visits'>Visits</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationMenu