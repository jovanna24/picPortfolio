import './footer.css'; 
import navIcon1 from '../../assets/images/linkedin.svg';
import navIcon2 from '../../assets/images/github.svg';
import navIcon3 from '../../assets/images/instagram.svg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/jovanna-jimenez-profile24/"><img src={navIcon1} alt="LinkedIn" /></a>
        <a href="https://github.com/jovanna24"><img src={navIcon2} alt="Github" /></a>
        <a href="https://www.instagram.com/jovanna_g24/"><img src={navIcon3} alt="Instagram" /></a>
      </div>
      <p>Copyright 2025. All Rights Reserved</p>
    </footer>
  );
}

export default Footer;