import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/template/Main';
import CrudAluno from './components/CrudAluno/CrudAluno';
import CrudCursos from './components/CrudCursos/CrudCursos';
export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="Bem Vindo!">
                        <div>Mano o carômetro não está pronto, me dá um tempo a mais pra fazer namoral</div>
                    </Main>}
            />
            <Route path='/alunos' element={<CrudAluno />} />
            <Route path='/cursos' element={<CrudCursos />} />
            <Route path="/carometro" element={
                <Main title="Eita!">
                    <div>Página em Construção</div>
                </Main>} />
            <Route path="*" element={
                <Main title="Bem Vindo!">
                    <div>Não tem nada aqui, volta pro lugar daonde tu veio</div>
                </Main>} />
        </Routes>
    )
}