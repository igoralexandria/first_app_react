import React from "react";
import './styles.css';
import Logo from '../../assets/logobatman.jpg';

function Footer(){
    return (
        <footer>
            <img src={Logo} id="logo" />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Igor Alexandria</span>
        </footer>
    )
}

export default Footer;