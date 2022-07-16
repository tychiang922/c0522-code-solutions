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

  modal(props) {
    return (
      <div>
        <div onClick={props.onClose} className={`modal ${props.show ? 'show' : ''}`}>
        </div>
        <div className={`modal-content ${props.show ? 'fly' : ''}`}>
          <div className='col-2 menu-bar'>
            <h1>Menu</h1>
            <div className='row'>
              <a onClick={props.onClose} className='links' href='#'>About</a>
            </div>
            <div className='row'>
              <a onClick={props.onClose} className='links' href='#'>Get Started</a>
            </div>
            <div className='row'>
              <a onClick={props.onClose} className='links' href='#'>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <i onClick={this.menuClick} className="fa-solid fa-bars"></i>
        <this.modal onClose={() => this.setState({ showMenu: false })} show={this.state.showMenu}/>
      </div>
    );
  }
}
