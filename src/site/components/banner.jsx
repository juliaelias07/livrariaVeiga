import React from "react";

/*Capa do site*/
function Banner() {
    return <section id="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="tituloBanner">A melhor plataforma de estoque oferecida pela Livraria Veiga!</h1>
                    <h5 >Acesse para gerenciar nossos produtos em um único lugar.</h5>
                    <a href="/app/novaconta" className="btn btn-outline-danger btn-lg btn-banner">Criar uma conta</a>
                    <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
                </div>
                <div className="col-lg-6">
                    <a href="/">
                        <img src="img/container.png" alt="Livraria Veiga" />
                    </a>
                </div>
            </div>
        </div>


    </section>;
}

export default Banner;