import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './editarcliente.css';
import Navbar from '../Components/Navbar/navbar';

import firebase from '../Config/firebase';
import 'firebase/firestore';

function EditarCliente(props) {
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [editora, setEditora] = useState('');
  const [valor, setValor] = useState('');
  const [estoque, setEstoque] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [sucesso, setSucesso] = useState('N');
  const db = firebase.firestore();

  useEffect(() => {
    firebase.firestore().collection('clientes').doc(props.match.params.id).get().then((resultado) => {
      setNome(resultado.data().nome);
      setAutor(resultado.data().autor);
      setEditora(resultado.data().editora);
      setValor(resultado.data().valor);
      setEstoque(resultado.data().estoque);

    })

  }, [props.match.params.id])

  function AlterarCliente() {

    if (nome.length === 0) {
      setMensagem('Informe todos os campos')
    }
    else if (autor.length === 0) {
      setMensagem('Informe todos os campos')
    }
    else if (estoque !== "Sim" & estoque !== "Não") {
      setMensagem('Infome o campo de estoque corretamente (com "Sim" ou "Não").')
    } else {
      db.collection('clientes').doc(props.match.params.id).update({
        nome: nome,
        autor: autor,
        editora: editora,
        estoque: estoque,
        valor: valor
      }).then(() => {
        setMensagem('');
        setSucesso('S');
      }).catch((erro) => {
        setMensagem(erro);
        setSucesso('N');
      })

    }
  }

  return <div>
    <Navbar />
    <div className='container-fluid titulo'>

      <div className='offset-lg-3 col-lg-6'>
        <h1 className='text-center'>Editar Produto</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Código:</label>
            <input type="text" value={props.match.params.id} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Título:</label>
            <input onChange={(e) => setNome(e.target.value)} value={nome} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Autor:</label>
            <input onChange={(e) => setAutor(e.target.value)} value={autor} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Editora:</label>
            <input onChange={(e) => setEditora(e.target.value)} value={editora} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <label htmlFor="exampleInputEmail1" className="form-label">Valor:</label>
          <div className="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">R$</span>
            <input onChange={(e) => setValor(e.target.value)} value={valor} type="text" className="form-control" placeholder="Exemplo: R$30,00" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Em estoque?</label>
            <input onChange={(e) => setEstoque(e.target.value)} value={estoque} type="text" className="form-control" placeholder="Responda com: Sim ou Não " id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          {mensagem.length > 0 ? <div className="alert alert-danger mt-2" role="alert">{mensagem}</div> : null}
          {sucesso === 'S' ? <Redirect to='/app/home' /> : null}

          <div className='text-center'>
            <Link to="/app/home" className="btn btn-outline-dark btn-acao">Cancelar</Link>
            <button onClick={AlterarCliente} type="button" className="btn btn-dark btn-acao">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>;
}

export default EditarCliente;