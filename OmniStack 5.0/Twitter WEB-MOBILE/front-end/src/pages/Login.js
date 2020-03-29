import React, { Component } from 'react';
import twitterLogo from '../twitter.svg'
// import { Container } from './styles';
import './Login.css';

export default class Login extends Component {
  state = {
    username: '',
  };
  handleInputChange = e => {
    this.setState({
      username: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    // Se não digitar nada ou for nulo 
    if (!username.length) return;

    localStorage.setItem('@GoTwitter:username', username);

    this.props.history.push('/timeline')

  };


  render() {
    return (
      <div className="limiter">
        <div class="container-login100">
          <div class="wrap-login100">

            <div class="login100-pic js-tilt" data-tilt>
              <img src="https://www.quixada.ufc.br/wp-content/uploads/2017/10/logo.png" alt="Logo do Twitter" />
            </div>

            <form onSubmit={this.handleSubmit} class="login100-form validate-form">
              <span class="login100-form-title">
                Fala que eu te escuto - UFCQXD
					    </span>
              <div class="wrap-input100 validate-input" data-validate="Email válido solicitado: a@bcd.xyz">
                <input
                  class="input100" type="text" name="email"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  placeholder="Nome de usuário" />
              </div>
              <span class="focus-input100"></span>
              <div class="container-login100-form-btn">
                <button type="submit" class="login100-form-btn">Entrar</button>
              </div>
              <div class="text-center p-t-136">
                <a class="txt2" href="#">
                  Criar novo usuário
							    <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
              </div>



            </form>

          </div>

        </div>

      </div>
    )
  }
}
