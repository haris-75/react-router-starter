import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AdminNavbar = () => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const [testcenterId, setTestcenterId] = useState(getRandomInt(50));
  useEffect(() => setTestcenterId(getRandomInt(50)), [testcenterId]);
  return (
    <>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='/'>
          <img
            alt=''
            src='/psi-logo.svg'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />
          RSaaS
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav className='justify-content-end' style={{ width: '100%' }}>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/testcenter/alerts'>Alerts</Nav.Link>
            <Nav.Link href='/testcenter/schedules'>Schedule</Nav.Link>
            <Nav.Link href={`/testcenter/${testcenterId}/sessions`}>
              Sessions
            </Nav.Link>
            <Nav.Link href='/testcenter/all'>All</Nav.Link>
            <NavDropdown title='Settings' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.2'>Profile</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Options</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.1'>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
