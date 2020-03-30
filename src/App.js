import React, { useState } from 'react';
import './styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faPlay, faPause, faSync} from '@fortawesome/free-solid-svg-icons'

function App() {

  let [sessionLength, setSessionLength] = useState(25);
  let [breakLength, setBreakLength] = useState(5);
  let [playCountDown, setPlayCountDown] = useState(false);
  let [timer, setTimer] = useState(25);

  const sessionSet = (e) => {
    console.log(e.target.value);
    if(e.target.value === "up" && sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      if(playCountDown === false) {
        setTimer(sessionLength + 1);
      }
    }
    if(e.target.value === "down" && sessionLength > 0) {
      setSessionLength(sessionLength - 1);
      if(playCountDown === false) {
        setTimer(sessionLength - 1);
      }
    }
  }

  const breakSet = (e) => {
    console.log(e.target.value);
    if(e.target.value === "up" && breakLength < 60) {
      setBreakLength(breakLength + 1);
    }
    if(e.target.value === "down" && breakLength > 0) {
      setBreakLength(breakLength - 1);
    }
  }

  const play = () => {
    console.log("play");
    console.log(playCountDown);
    setPlayCountDown(!playCountDown);
    if(playCountDown) {
      setInterval(() => {
        console.log("Time is ticking")
      }, 3000)
    }
  }


  return (
    <div className="App">
      <div className="wrapper">
        <h1>Pomodoro Clock</h1>
        <div className="setting-wrapper">
          <div className="control-wrapper">
            <div id="session-label">Session Length</div>
            <div className="control">
              <button id="session-decrement" onClick={(e) => sessionSet(e)} value="down"><FontAwesomeIcon className="icon" icon={faChevronDown} size="lg" /></button>
              <div id="session-length">{sessionLength}</div>
              <React.Fragment>
              <button id="session-Increment" onClick={(e) => sessionSet(e)} value="up"><FontAwesomeIcon className="icon" icon={faChevronUp} size="lg" /></button>
              </React.Fragment>
            </div>
          </div>
          <div className="control-wrapper">
            <div id="break-label">Break Length</div>
            <div className="control">
              <button id="break-decrement" onClick={(e) => breakSet(e)} value="down" ><FontAwesomeIcon icon={faChevronDown} size="lg" /></button>
              <div id="break-length">{breakLength}</div>
              <button id="break-increment" onClick={(e) => breakSet(e)} value="up" ><FontAwesomeIcon icon={faChevronUp}  size="lg" /></button>
            </div>
          </div>
        </div>

        <div className="countdown-wrapper">
          <div id="timer-label">Session</div>
          <div id="time-left">{timer}:00</div>
          <button id="start_stop" onClick={play}><FontAwesomeIcon icon={faPlay} size="lg" /> | <FontAwesomeIcon icon={faPause} size="lg" /></button>
          <button id="reset"><FontAwesomeIcon icon={faSync} size="lg" /> Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
