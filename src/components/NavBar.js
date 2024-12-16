import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Offcanvas,
    OffcanvasHeader,
    OffcanvasBody,
    Nav,
    NavItem,
    NavLink,
    Collapse,
} from "reactstrap";
import "../styles/NavBar.css";

const NavBar = () => {
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);
    return (
        <React.Fragment>
            <Navbar expand="lg" sticky="top" color="dark" dark>
                <NavbarBrand href="/" className="nav-logo">
                    <img alt="logo" src="/assets/nav-logo.svg" />
                </NavbarBrand>
                <NavbarToggler onClick={toggleOffcanvas} />
                <Collapse navbar>
                    <Nav className="ms-auto align-items-center" navbar>
                        <NavItem>
                            <NavLink href="/" className="nav-font">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/games" className="nav-font">
                                Games
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" className="nav-font">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/support" className="nav-font">
                                Support
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog" className="nav-font">
                                Blog
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Offcanvas
                isOpen={offcanvasOpen}
                toggle={toggleOffcanvas}
                direction="end"
            >
                <OffcanvasHeader toggle={toggleOffcanvas}>
                    Juwa
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Nav vertical>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/games">Games</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/support">Support</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                    </Nav>
                </OffcanvasBody>
            </Offcanvas>
        </React.Fragment>
    );
};

export default NavBar;
