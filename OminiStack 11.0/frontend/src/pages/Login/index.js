import React from 'react';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';
import './styles.css'

import logoImg from '../../assets/logo.svg';
import pessoasImg from '../../assets/pessoas.svg';

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Logo Bilíngua" srcset="" />
        <form>
          <h1>
            Sistema de cadastro de atividades
          </h1>

          <input type="text" placeholder="Sua ID de acesso" />

          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/registro">
            <FiLogIn size={16} color="#6605D2" />
            Solicitar código de acesso
          </Link>
        </form>
      </section>
      <img src={pessoasImg} alt="Pessoas" srcset="" />
    </div>
  )
}