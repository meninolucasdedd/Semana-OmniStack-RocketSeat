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
      <div className="login-wrapper">
        <img src={twitterLogo} alt="Logo do Twitter" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Nome de usuário" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    )
  }
}
