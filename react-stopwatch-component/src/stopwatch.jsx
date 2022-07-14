import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      play: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.play) {
      this.setState({ play: true });
      this.setState({ timer: 0 });
      this.timerID = setInterval(
        () => this.setState(state => ({
          timer: state.timer + 1
        })),
        1000
      );
    } else {
      this.setState({ play: false });
      clearInterval(this.timerID);
    }
  }

  render() {
    if (!this.state.play) {
      return <div>
        <div className='row'>
          <div className='timer'>
            <p>{this.state.timer}</p>
          </div>
        </div>
        <div className='row'>
          <i onClick={this.handleClick} className='fa-solid fa-play'></i>
        </div>
      </div>;
    } else {
      return <div>
        <div className='row'>
          <div className='timer'>
            <p>{this.state.timer}</p>
          </div>
        </div>
        <div className='row'>
          <i onClick={this.handleClick} className='fa-solid fa-pause'></i>
        </div>
      </div>;
    }
  }
}
