import './navbar.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo1.png';
import navIcon1 from '../../assets/images/linkedin.svg';
import navIcon2 from '../../assets/images/github.svg';
import navIcon3 from '../../assets/images/instagram.svg';

const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);

        };

    }, []);

   return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''} >
            <Container>
                <Navbar.Brand>
                    <Link to="/"> {/* Use Link if you're routing on logo click */}
                        <img src={logo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"> {/* Changed ul to Nav and ms-auto to me-auto for Bootstrap alignment */}
                        <Nav.Link as={NavLink} to="/" activeClassName="active-link">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about" activeClassName="active-link">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/photography" activeClassName="active-link">Photography</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/jovanna-jimenez-profile24/"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="https://github.com/jovanna24"><img src={navIcon2} alt="Github" /></a>
                        <a href="https://www.instagram.com/jovanna_g24/"><img src={navIcon3} alt="Instagram" /></a>
                    </div>
                    <Link to="/contact"><button className="vvd" type="button"><span>Let&apos;s Connect!</span></button></Link>
                </span>
            </Container>
        </Navbar>
    );
};

export default NavBar;