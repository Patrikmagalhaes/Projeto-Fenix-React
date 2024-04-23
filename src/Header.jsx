import React, { useState } from 'react';
import {
    Offcanvas, OffcanvasHeader, OffcanvasBody, Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink,
    Button
} from 'reactstrap';
import './Header.css'
import MenuIcon from './assets/images/menuIcon.png'
import PhoenixLoo from './assets/images/phoenix.png'
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <header  >
            <Navbar  expand="md " className='container bg-transparent' >
                <img className='menu' src={PhoenixLoo}alt="" />
                <h1 >Projeto Fênix</h1>
                    <img onClick={toggle} className="d-md-none menu"src={MenuIcon}alt="" />
                <Offcanvas isOpen={isOpen} toggle={toggle} direction="end" scrollable className="d-md-none">
                    <OffcanvasHeader toggle={toggle}>
                        Menu
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">Sobre o Projeto</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Conquistas e Eventos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contato</NavLink>
                            </NavItem>
                        </Nav>
                    </OffcanvasBody>
                </Offcanvas>
                <Collapse isOpen={!isOpen} navbar className="d-none d-md-block">
                    <Nav className="mr-auto justify-end" navbar>
                        <NavItem>
                            <NavLink href="#">Sobre o Projeto</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Conquistas e Eventos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contato</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;
