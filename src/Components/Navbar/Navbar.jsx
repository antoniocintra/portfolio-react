import "./Navbar.css";
import logo from "../../assets/logo-removebg.png";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import { useRef } from "react";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar" id="home">
      <img src={logo} className="logo" alt="logo from portfolio" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <a href="#home">
          <li>Início</li>
        </a>
        <a href="#about">
          <li>Sobre</li>
        </a>
        <a href="#projects">
          <li>Portfolio</li>
        </a>
        <a href="#footer">
          <li>Contatos</li>
        </a>
      </ul>
      <a href=" https://wa.me/5511997166116" target="_blank">
        <div className="nav-connect">Fale comigo</div>
      </a>
    </div>
  );
};

export default Navbar;
