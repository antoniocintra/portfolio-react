import './Navbar.css';
import logo from '../../assets/logo-removebg.png'

const Navbar = () => {
    return(
        <div className='navbar'>
            <img src= {logo} alt="logo from portfolio" />
            <ul className="nav-menu">
                <li>Início</li>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Portfolio</li>
                <li>Contatos</li>
            </ul>
            <div className='nav-connect'>Fale comigo</div>
        </div>
    )
}

export default Navbar;