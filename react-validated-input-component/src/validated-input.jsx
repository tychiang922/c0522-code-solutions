import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordLength: 0
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
      passwordLength: event.target.value.length
    });
  }

  iconHandler(props) {
    if (props.charLength <= 8) {
      return (
        <i className="fa-solid fa-xmark"></i>
      );
    } else {
      return (
        <i className="fa-solid fa-check"></i>
      );
    }
  }

  errorMsgHandler(props) {
    if (props.charLength === 0) {
      return (
        <p>Please input a password</p>
      );
    } else if (props.charLength <= 8) {
      return (
        <p>Password must be longer then 8 characters.</p>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <form>
        <label>
          Password
          <div>
            <input onChange={this.handlePasswordChange} value={this.state.password} type='password' name='password'></input>
            <iconHandler charLength={this.state.passwordLength} />
            <this.errorMsgHandler charLength={this.state.passwordLength} />
          </div>
        </label>
      </form>
    );
  }
}
