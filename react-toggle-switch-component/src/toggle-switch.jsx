import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: true };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
  }

  render() {
    if (this.state.isToggled) {
      return <div onClick={this.toggle} className='row'>
      <div className='card green-back'>
      <div className='switch right'></div>
      </div>
      <p>ON</p>
    </div>;
    } else {
      return <div onClick={this.toggle} className='row'>
        <div className='card gray-back'>
      <div className='switch left'></div>
    </div>
    <p>OFF</p>
    </div>;
    }
  }
}
