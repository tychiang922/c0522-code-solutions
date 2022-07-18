import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleMsg() {
    if (this.state.password.length === 0 || this.state.password.length <= 8) {
      return (
      <div className='inline'>
        <i className="fa-solid fa-xmark"></i>
        <p>A password is required</p>
      </div>
      );
    } else {
      return (
      <div className='inline'>
        <i className="fa-solid fa-check"></i>
      </div>
      );
    }
  }

  render() {
    return (
      <form>
        <label>
          Password
          <div>
            <input onChange={this.handlePasswordChange} value={this.state.password} type='password' name='password'></input>
            <this.handleMsg />
          </div>
        </label>
      </form>
    );
  }
}
