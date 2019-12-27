import * as React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC<{ username: string }> = ({ username }) => (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">My Brand</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav activeKey="/" className="mr-auto">
                    <Nav.Link href="/">Challenge</Nav.Link>
                    <Nav.Link href="/other">Other</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        <FontAwesomeIcon icon={faUser} /> {username}
                     </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);


export default Header;