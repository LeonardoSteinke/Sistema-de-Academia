import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';

function DefaultLayout() {
    const { pathname } = useLocation();
    const history = useHistory();

    return (
        <>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastros</Link>
                </li>
                <li>
                    <Link to="/alunos">Alunos</Link>
                </li>
                <li>
                    <Link to="/horarios">Horários</Link>
                </li>
                <li>
                    <Link to="/vendas">Vendas</Link>
                </li>
                <li>
                    <Link to="/compras">Compras</Link>
                </li>
                <li>
                    <Link to="/caixa">Caixa</Link>
                </li>
                <li>
                    <Link to="/sistema">Sistema</Link>
                </li>
            </ul>
        </>
    );
}

export default DefaultLayout;