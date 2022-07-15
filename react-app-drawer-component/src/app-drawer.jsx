import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick() {
    this.setState({ showMenu: true });

  }

  menu() {
    return (
      <div className='col-2 menu-bar'>
        <a className='menu' href='#'>Menu</a>
        <a className='links' href='#'>About</a>
        <a className='links' href='#'>Get Started</a>
        <a className='links' href='#'>Sign In</a>
      </div>
    );
  }

  render() {
    if (!this.state.showMenu) {
      return (
      <i onClick={this.menuClick} className="fa-solid fa-bars"></i>
      );
    } else {
      <div>
        <Modal />
        <Menu />
        <i className="fa-solid fa-bars"></i>
      </div>;
    }
  }
}

class Modal extends React.Component {
  render() {
    return (
      <div className='modal'></div>
    );
  }
}
