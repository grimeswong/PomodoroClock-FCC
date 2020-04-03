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
      timer: 1500,
      break: false,
      intervalId: "",
    }
  }

  sessionSet = (e) => {
    console.log(e.target.value);
    if(this.state.playCountDown === false) {
      if(e.target.value === "up" && this.state.sessionLength < 60) {
        this.setState({sessionLength: this.state.sessionLength + 1});
        this.setState({timer: (this.state.sessionLength + 1) * 60});
      }
      if(e.target.value === "down" && this.state.sessionLength > 1) {
        this.setState({sessionLength: this.state.sessionLength - 1});
        this.setState({timer: (this.state.sessionLength - 1) * 60});
      }
    }
  }

  breakSet = (e) => {
    console.log(e.target.value);
    if(this.state.playCountDown === false) {
      if(e.target.value === "up" && this.state.breakLength < 60) {
        this.setState({breakLength: this.state.breakLength + 1});
      }
      if(e.target.value === "down" && this.state.breakLength > 1) {
        this.setState({breakLength: this.state.breakLength - 1});
      }
    }
  }

  reset = () => {
    console.log(`Reset intervalId = ${this.state.intervalId}`);
    clearInterval(this.state.intervalId);
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      playCountDown: false,
      timer: 1500,
      break: false,
      intervalId: "",
    })
    console.log(`After Reset intervalId = ${this.state.intervalId}`);
  }

  play = async () => {
    console.log("play");
    await this.setState({playCountDown: !this.state.playCountDown}); // wait for the setState finish before start the next step
    console.log(this.state.playCountDown);
    if(this.state.playCountDown) {
      let tempId = setInterval(this.timeTicker, 1000);
      this.setState({
        intervalId: tempId
      })
      console.log(`Play intervalId = ${this.state.intervalId}`);
    } else {
      console.log(`Stop intervalId = ${this.state.intervalId}`);
      clearInterval(this.state.intervalId);
      console.log("Time is stopped");
    }
  }

  timeTicker = async () => {
    if(this.state.timer > 0) {
      this.setState({timer: this.state.timer - 1})
      console.log("Time is ticking");
    } else {
      console.log("Timer is zero now!!!")
      if(this.state.break === false) {
        this.setState({
          timer: this.state.breakLength * 60,
          break: true,
        })
      } else {
        this.setState({
          timer: this.state.sessionLength * 60,
          break: false,
        })
      }
    }
  }

  displayClock = () => {
    let minutes = Math.floor(this.state.timer / 60)
    let seconds = this.state.timer % 60
    let display = `${minutes<10?"0"+minutes:minutes}:${seconds<10?"0" + seconds:seconds}`
    return display
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    document.head.appendChild(script);
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
                <button id="session-increment" onClick={(e) => this.sessionSet(e)} value="up"><FontAwesomeIcon className="icon" icon={faChevronUp} size="lg" /></button>
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

          <div className={this.state.break?"timer-wrapper break-colour":" timer-wrapper session-colour"}>
            <div id="timer-label">{this.state.break?"Break":"Session"}</div>
            <div id="time-left">{this.displayClock()}</div>
            <button id="start_stop" onClick={this.play}><FontAwesomeIcon icon={faPlay} size="lg" /> | <FontAwesomeIcon icon={faPause} size="lg" /></button>
            <button id="reset" onClick={this.reset}><FontAwesomeIcon icon={faSync} size="lg" /> Reset</button>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
