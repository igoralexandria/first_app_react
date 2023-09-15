import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,  } from '@fortawesome/free-solid-svg-icons';

function Comentarios() {
    return (
        <>
            <Header />
            <h1>Comentários</h1>
            <div className="comment-container">
                <div className="comment-content">
                    <div className="user comment-1">
                        <div className="block-text">
                            <span id="name-title">Igor Alexandria</span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="user comment-2">
                        <div className="block-text">
                            <span id="name-title">Mateus Batista</span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="user comment-3">
                        <div className="block-text">
                            <span id="name-title">José Carlos</span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="user comment-4">
                        <div className="block-text">
                            <span id="name-title">Sandro Ospina</span><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="text">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Comentarios;
