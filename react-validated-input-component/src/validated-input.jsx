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
        <i className="fa-solid fa-xmark incorrect"></i>
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
        <p className="incorrect">A password is required.</p>
      );
    } else if (props.charLength <= 8) {
      return (
        <p className="incorrect">Your password is too short.</p>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <form>
        <label>
          <p className="title">Password</p>
          <div className="row">
            <input onChange={this.handlePasswordChange} value={this.state.password} type='password' name='password'></input>
            <this.iconHandler charLength={this.state.passwordLength} />
          </div>
            <this.errorMsgHandler charLength={this.state.passwordLength} />
        </label>
      </form>
    );
  }
}
