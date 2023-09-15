import React from "react";
import './styles.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/logobatman.jpg';


function Header(){

    return (
        <header>
            <Link style={{textDecoration: 'none'}} to='/'>
                <img id="logo" src={Logo} />
            </Link>
            <nav>
                <ul>                    
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                        <li>Contatos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                        <li>Comentários</li>
                    </Link>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;
