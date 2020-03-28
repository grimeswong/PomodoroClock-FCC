import React from 'react';
import './styles/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faPlay, faPause, faStop, faSync} from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Pomodoro Clock</h1>
        <div className="setting-wrapper">
          <div className="control-wrapper">
            <div id="session-label">Session Length</div>
            <div className="control">
              <button id="session-decrement"><FontAwesomeIcon icon={faChevronDown} size="lg"/></button>
              <div id="session-length">25</div>
              <button id="session-Increment"><FontAwesomeIcon icon={faChevronUp} size="lg" /></button>
            </div>
          </div>
          <div className="control-wrapper">
            <div id="break-label">Break Length</div>
            <div className="control">
              <button id="break-decrement"><FontAwesomeIcon icon={faChevronDown} size="lg" /></button>
              <div id="break-length">5</div>
              <button id="break-increment"><FontAwesomeIcon icon={faChevronUp}  size="lg" /></button>
            </div>
          </div>
        </div>

        <div className="countdown-wrapper">
          <div id="timer-label">Session</div>
          <div id="time-left">mm:ss</div>
          <button id="start_stop"><FontAwesomeIcon icon={faPlay} size="lg" /> | <FontAwesomeIcon icon={faPause} size="lg" /></button>
          <button id="reset"><FontAwesomeIcon icon={faSync} size="lg" /> Reset</button>
        </div>

      </div>
    </div>
  );
}

export default App;
