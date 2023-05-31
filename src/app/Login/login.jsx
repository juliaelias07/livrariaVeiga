import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './login.css';
import { AuthContext } from '../Context/auth';

import firebase from '../Config/firebase';
import 'firebase/auth';


function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [sucesso, setSucesso] = useState('');
  const { setLogado } = useContext(AuthContext);

  function LoginUsuario() {
    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(function (firebaseUser) {
        localStorage.setItem("logado", "S");
        setLogado(true);
        setSucesso('S');
      })
      .catch(function (error) {
        localStorage.setItem("logado", "N");
        setLogado(false);
        setSucesso('N');
      });
  }

  function alterarEmail(event) {
    setEmail(event.target.value);
  }

  function alterarSenha(event) {
    setSenha(event.target.value);
  }

  return <div className="d-flex align-items-center text-center form-container">
    <form className="form-signin">
      <a href="/">
        <img className="mb-4" src="/img/perfil.png" alt="" width="72" height="57" />
      </a>
      <h1 className="h3 mb-3 fw-normal">Login</h1>

      <div className="form-floating">
        <input onChange={alterarEmail} type="email" className="form-control" id="floatingInput" placeholder="E-mail" />
        <label htmlFor="floatingInput">E-mail</label>
      </div>

      <div className="form-floating">
        <input onChange={alterarSenha} type="password" className="form-control" id="floatingPassword" placeholder="Senha" />
        <label fohtmlFor="floatingPassword">Senha</label>
      </div>

      <Link to="/app/resetsenha" className="link">Esqueci minha senha</Link>
      <button onClick={LoginUsuario} className="w-100 btn btn-lg btn-primary" type="button">Acessar</button>

      {sucesso === 'N' ? <div className="alert alert-danger mt-2" role="alert">E-mail ou senha inválida.</div> : null}
      {sucesso === 'S' ? <Redirect to='/app/home' /> : null}

      <div className="login-links mt-5">
        <p className="texto">Não possui cadastro?</p>
        <Link to="/app/novaconta" className="mx-3">Criar uma conta</Link>
      </div>

      <p className="mt-5 mb-3 text-muted">&copy; Desenvolvido por Livraria Veiga</p>
    </form>
  </div>
}

export default Login;