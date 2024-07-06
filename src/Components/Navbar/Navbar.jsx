import './Navbar.css';
import logo from '../../assets/logo-removebg.png'


const Navbar = () => {
    return(
        <div className='navbar'>
            <img src= {logo} alt="logo from portfolio" />
            <ul className="nav-menu">
                <a href='#home'><li>Início</li></a>
                <a href='#about'><li>Sobre</li></a>
                <a href='#projects'><li>Portfolio</li></a>
               <a href='#footer'><li>Contatos</li></a>
            </ul>
            <div className='nav-connect' href = ''>Fale comigo</div>
        </div>
    )
}

export default Navbar;