import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Context/auth";
import './navbar.css';

function Navbar() {

    const { setLogado } = useContext(AuthContext);

    function Logout() {
        setLogado(false);
        localStorage.removeItem("logado");
    }

    return <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/app/home">
                <img className="Imagem" align='left' src="/img/logoNova.png" alt="" height="60" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/app/home" className="nav-link" aria-current="page">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/app/novocliente" className="nav-link" aria-current="page">Novo Registro</Link>
                    </li>
                    <li className="nav-item">
                        <a href="/app" onClick={Logout} className="nav-link logout" aria-current="page">Sair</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}

export default Navbar;