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
      return <div className='card green-back'>
      <div onClick={this.toggle} className='switch right'></div>
    </div>;
    } else {
      return <div className='card gray-back'>
      <div onClick={this.toggle} className='switch left'></div>
    </div>;
    }
  }
}
