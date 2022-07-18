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
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <label>
          Password
          <div>
            <input onChange={this.handlePasswordChange} value={this.state.password} type='password' name='password'></input>
          </div>
        </label>
      </form>
    );
  }
}
