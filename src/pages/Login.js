import React from 'react';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {

  validateUsername = username => {
    const regex = /^\w+$/;
    const maxLength = 20;

    if (!username.match(regex) || username.length > maxLength) return false;

    return true;
  }

  submit = e => {
    e.preventDefault();
    console.log(e.target.username.value);
    if (this.validateUsername(e.target.username.value)) {
      Cookies.set('_session', e.target.username.value);
      console.log(Cookies.get());
      this.props.history.push('/');
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <div>
            <input type='text' name='username' placeholder='username'/>
          </div>
          <button className="submitBtn">Login</button>
        </form>
      </div>
    );
  }
}


export default withRouter(Login);