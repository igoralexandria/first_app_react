import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";


function Contato() {
    return (
        <>
            <Header />
            <div id="title-contact">
                <h1>Contato</h1>
            </div>
            <div className="box1">
                <div className="box2">
                    <forms className="forms">
                        <input id="nome" type="text" name="nome" placeholder="Nome Completo" />
                        <input id="email" type="email" name="email" placeholder="E-mail" />
                        <input id="telefone" type="tel" name="telefone" placeholder="Telefone" />
                        <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem"></textarea>
                        <button className="button">Enviar</button>
                    </forms>
                    <div className="box-contact">
                        <h1>Fale Conosco:</h1>
                        <div className="contact-us">
                            <h2 className="title-contact">E-mail:</h2>
                            <FontAwesomeIcon icon={faEnvelope} /><span className="span">myemail@gmail.com</span>
                            <h2 className="title-contact">Telefone:</h2>
                            <FontAwesomeIcon icon={faPhone} /><span className="span">(88) 9 8888 8888</span>
                            <h2 className="title-contact">Redes Sociais:</h2>
                            <FontAwesomeIcon icon={faInstagram} /><span className="span">@1gor.alexandria</span>
                            <FontAwesomeIcon icon={faLinkedin} /><span className="span">Igor Alexandria</span>
                        </div>                    
                    </div>
                </div>
            </div>
            

            <Footer />
        </>
    )
}

export default Contato;
