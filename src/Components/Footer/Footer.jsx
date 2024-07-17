import "./Footer.css";
import logo from "../../assets/logo-removebg.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import githubIcon from "../../assets/icons/github.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left" id="footer">
        <img src={logo} alt="logo from portfolio" />
        <ul className="footer-menu">
          <a href="#home">
            <li>Início</li>
          </a>
          <a href="#about">
            <li>Sobre</li>
          </a>
          <a href="#projects">
            <li>Portfolio</li>
          </a>
          <li>Contatos</li>
        </ul>
      </div>
      <div className="icons-area">
        <a href="https://www.linkedin.com/in/antoniocintraferraz/" target="_blank">

        <img src={linkedinIcon} alt="linkedin icon" />
        </a>
        <a href="https://github.com/antoniocintra" target="_blank">
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
