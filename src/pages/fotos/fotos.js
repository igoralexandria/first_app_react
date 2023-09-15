import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';


function Fotos() {
    return (
        <>
            <Header />
            <hr color="red" />
            <h1>Conheça a Equipe Batman</h1>
            <div className="images-container">
                <div className="images-content">
                    <div className="image banner-1">Robert Pattison - Batman</div>
                    <div className="image banner-2">Zoe Kravitz - Mulher Gato</div>
                    <div className="image banner-3">Jeffrey Wright - Gordon</div>
                    <div className="image banner-4">Dick Grayson - Robin</div>
                    <div className="image banner-5">Henry Cavill - Super Man</div>
                    <div className="image banner-6">Chadwick Boseman - Pantera Negra</div>
                    <div className="image banner-7">Ezra Miller - Flash</div>
                    <div className="image banner-8">Chris Evans - Capitão América</div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Fotos;
