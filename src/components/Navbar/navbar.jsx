import './navbar.css'; 
import { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar'; 
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    //state variable to keep track of whether the user has scrolled past the navbar
    const [scrolled, setScrolled] = useState(false); 

    //using useEffect hook to run the code inside the callback function whenever the component mounts or updates 
    useEffect(() => {
        //function to handle the scroll event 
        const handleScroll = () => {
            // check to see if user has scrolled past the navbar (50px from top of page) 
            return window.scrollY > 50 ? true : false ;
        }; 

        // add scroll even listener to window object 
        window.addEventListener('scroll', handleScroll); 
        // clean up event listener when the component unmounts or updates 
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        };
    }, []);

return (

    <Navbar expand="lg" className={ scrolled ? 'scrolled' : ''} >
      <Container>

      </Container>
    </Navbar>
); 
};

export default Navbar;