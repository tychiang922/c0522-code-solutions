import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: this.state.isClicked + 1 });
  }

  render() {
    if (this.state.isClicked < 4) {
      return <button onClick={this.handleClick} className="darkpurple">Hot Button</button>;
    } else if (this.state.isClicked < 7) {
      return <button onClick={this.handleClick} className="lightpurple">Hot Button</button>;
    } else if (this.state.isClicked < 10) {
      return <button onClick={this.handleClick} className="red">Hot Button</button>;
    } else if (this.state.isClicked < 13) {
      return <button onClick={this.handleClick} className="orange">Hot Button</button>;
    } else if (this.state.isClicked < 16) {
      return <button onClick={this.handleClick} className="yellow">Hot Button</button>;
    } else if (this.state.isClicked >= 16) {
      return <button onClick={this.handleClick} className="white">Hot Button</button>;
    }
  }
}
