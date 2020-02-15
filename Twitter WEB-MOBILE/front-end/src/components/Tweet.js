import React, { Component } from 'react';
import like from '../like.svg'
import api from '../services/api'
import '../css/main.css'

export default class Tweet extends Component {
  handleLike = async () => {
    const { _id } = this.props.tweet;

    await api.post(`likes/${_id}`)
  }
  render() {
    const { tweet } = this.props;
    return (
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="https://www.quixada.ufc.br/wp-content/uploads/2017/10/logo.png" alt="Logo do Twitter" />
          </div>
          <li className="login100-form validate-form">
            <strong>{tweet.author}</strong>
            <p>{tweet.content}</p>
            <button type="button" onClick={this.handleLike}>
              <img src={like} alt="" srcset="" />
              {tweet.likes}
            </button>
          </li>
        </div>

      </div>



    )
  }
}
