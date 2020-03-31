import React, { Component } from 'react';
import './styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faPlay, faPause, faSync} from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      playCountDown: false,
      timer: 25
    }
  }

  sessionSet = (e) => {
    console.log(e.target.value);
    if(e.target.value === "up" && this.state.sessionLength < 60) {
      this.setState({sessionLength: this.state.sessionLength + 1});
      if(this.state.playCountDown === false) {
        this.setState({timer: this.state.sessionLength + 1});
      }
    }
    if(e.target.value === "down" && this.state.sessionLength > 0) {
      this.setState({sessionLength: this.state.sessionLength - 1});
      if(this.state.playCountDown === false) {
        this.setState({timer: this.state.sessionLength - 1});
      }
    }
  }

  breakSet = (e) => {
    console.log(e.target.value);
    if(e.target.value === "up" && this.state.breakLength < 60) {
      this.setState({breakLength: this.state.breakLength + 1});
    }
    if(e.target.value === "down" && this.state.breakLength > 0) {
      this.setState({breakLength: this.state.breakLength - 1});
    }
  }

  play = async () => {
    console.log("play");
    await this.setState({playCountDown: !this.state.playCountDown}); // wait for the setState finish before start the next step
    console.log(this.state.playCountDown);
    if(this.state.playCountDown) {
      this.countDown = setInterval(this.timeTicker, 2000);
    } else {
      clearInterval(this.countDown);
      console.log("Time is stopped");
    }
  }

  timeTicker = () => {
    console.log("Time is ticking");
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1>Pomodoro Clock</h1>
          <div className="setting-wrapper">
            <div className="control-wrapper">
              <div id="session-label">Session Length</div>
              <div className="control">
                <button id="session-decrement" onClick={(e) => this.sessionSet(e)} value="down"><FontAwesomeIcon className="icon" icon={faChevronDown} size="lg" /></button>
                <div id="session-length">{this.state.sessionLength}</div>
                <button id="session-Increment" onClick={(e) => this.sessionSet(e)} value="up"><FontAwesomeIcon className="icon" icon={faChevronUp} size="lg" /></button>
              </div>
            </div>
            <div className="control-wrapper">
              <div id="break-label">Break Length</div>
              <div className="control">
                <button id="break-decrement" onClick={(e) => this.breakSet(e)} value="down" ><FontAwesomeIcon icon={faChevronDown} size="lg" /></button>
                <div id="break-length">{this.state.breakLength}</div>
                <button id="break-increment" onClick={(e) => this.breakSet(e)} value="up" ><FontAwesomeIcon icon={faChevronUp}  size="lg" /></button>
              </div>
            </div>
          </div>

          <div className="timer-wrapper">
            <div id="timer-label">Session</div>
            <div id="time-left">{this.state.timer}:00</div>
            <button id="start_stop" onClick={this.play}><FontAwesomeIcon icon={faPlay} size="lg" /> | <FontAwesomeIcon icon={faPause} size="lg" /></button>
            <button id="reset"><FontAwesomeIcon icon={faSync} size="lg" /> Reset</button>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
