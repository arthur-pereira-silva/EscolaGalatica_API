import React, { Component } from "react";
import "./CrudCursos.css";
import Main from "../template/Main";

const title = "Cursos Profissionalizantes da Escola Galática";
const Cursos = [
    {'codCurso': 19, 'nome': 'Construção de Mechas'},
    {'codCurso': 28, 'nome': 'Fiscalização de Planetas'},
    {'codCurso': 39, 'nome': 'Engenharia de Sistemas Solares'},
    {'codCurso': 59, 'nome': 'Programador de Espaço-Tempo'}
];

export default function CrudCursos(){




    renderTable()
        return(
            <div className="listagem">
            <table className="listaCursos" id="tblListaCursos">
                <thead>
                    <tr className="cabecTabela">
                        <th className="tabTituloNome">Nome</th>
                        <th className="tabTituloCurso">Curso</th>
                    </tr>
                </thead>
                <tbody>
                    {Cursos.map(
                        (curso) =>
                        <tr key={curso.id}>
                        <td>
                            {curso.nome}
                        </td>
                        <td>
                            {curso.codCurso}
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        )


    render()
        return(
            <Main title={title}>
                {this.renderTable()}
            </Main>
        )
}