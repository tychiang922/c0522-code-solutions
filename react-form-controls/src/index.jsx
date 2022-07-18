import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state: ', this.state);
  }

  render() {
    return (
    <form>
      <label>
        Username:
        <input type='text' name='username' value={this.state.userName} onChange={this.handleUsernameChange}></input>
      </label>
      <label>
        Password:
        <input type='password' value={this.state.password} name='password' onChange={this.handlePasswordChange}></input>
      </label>
      <button onClick={this.handleSubmit}>Sign Up</button>
    </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RegistrationForm />);
