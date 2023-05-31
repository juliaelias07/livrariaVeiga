import React from "react";

/*Capa do site*/
function Fetuares() {
    return <section id="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 feature-box">
                    <i className="icon fas fa-heart fa-2x"></i>
                    <h3 className="Titulo">Fácil de usar</h3>
                    <p>Com o objetivo de facilitar e organizar nossas vendas e nossos atendimentos!</p>
                </div>
                <div className="col-lg-4 feature-box">
                    <i className='icon fas fa-globe-americas fa-2x'></i>
                    <h3 className="Titulo">De onde estiver</h3>
                    <p>Gerencie o estoque de livros de onde quer que você esteja.</p>
                </div>
                <div className="col-lg-4 feature-box">
                    <i className='icon fas fa-columns fa-2x'></i>
                    <h3 className="Titulo">Cresça seu negócio</h3>
                    <p>A tecnologia do nosso sistema vem para somar e ser aliada na expansão do nosso negócio.</p>
                </div>
            </div>
        </div>


    </section>;
}

export default Fetuares;