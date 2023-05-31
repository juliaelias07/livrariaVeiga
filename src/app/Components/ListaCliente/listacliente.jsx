import React from 'react';
import { Link } from 'react-router-dom'
import './listacliente.css';

function ListaClientes(props) {




    return <table className="table table-hover table-bordered">
        <thead>
            <tr className="table-secondary">
                <th scope="col">Código</th>
                <th scope="col">Título</th>
                <th scope="col">Autor</th>
                <th scope="col">Editora</th>
                <th scope="col">Preço</th>
                <th scope="col">Em estoque?</th>
                <th scope="col" className='col-acao'></th>
            </tr>
        </thead>
        <tbody>

            {
                props.arrayClientes.map((cliente) => {
                    return <tr key={cliente.id}>
                        <th scope="row">{cliente.id}</th>
                        <td>{cliente.nome}</td>
                        <td>{cliente.autor}</td>
                        <td>{cliente.editora}</td>
                        <td>{cliente.valor}</td>
                        <td>{cliente.estoque}</td>
                        <td>
                            <Link to={'/app/editarcliente/' + cliente.id}><i className="fas fa-edit icone-acao black"></i></Link>
                            <Link to='#' onClick={() => props.clickDelete(cliente.id)}><i className='far fa-trash-alt icone-acao red'></i></Link>
                        </td>
                    </tr>
                })
            }


        </tbody>
    </table>
}

export default ListaClientes;