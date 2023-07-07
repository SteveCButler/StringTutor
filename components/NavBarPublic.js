/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Nav } from 'react-bootstrap';
// import { signIn } from '../utils/auth';
import logo from '../assets/StringTutors.png';

export default function NavBarPublic() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bg pt-2" id="main-nav" style={{ height: '5em' }} variant="dark">
      <div id="nav-image">
        <Link passHref href="/">
          <Navbar.Brand id="nav-brand">
            <Image src={logo} width="150" height="50" />
          </Navbar.Brand>
        </Link>
      </div>

      <div id="nav-links">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-5 mt-3 ">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/instructorProfiles">
              <Nav.Link>Instructors</Nav.Link>
            </Link>
            <Link passHref href="/resources">
              <Nav.Link>Resources</Nav.Link>
            </Link>
            <Link passHref href="/studentSignupPage">
              <Nav.Link>SignUp</Nav.Link>
            </Link>
            {/* <Link passHref href="/">
              <Nav.Link className="me-5" onClick={signIn}>Sign In</Nav.Link>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
