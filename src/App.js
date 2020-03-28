import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Pomodoro Clock</h1>
        <div className="setting-wrapper">
          <div className="control-wrapper">
            <div id="session-label">Session Length</div>
            <div className="control">
              <button id="session-decrement">Down</button>
              <div id="session-length">25</div>
              <button id="session-Increment">Up</button>
            </div>
          </div>
          <div className="control-wrapper">
            <div id="break-label">Break Length</div>
            <div className="control">
              <button id="break-decrement">Down</button>
              <div id="break-length">5</div>
              <button id="break-increment">Up</button>
            </div>
          </div>
        </div>

        <div className="countdown-wrapper">
          <div id="timer-label">Session</div>
          <div id="time-left">mm:ss</div>
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>

      </div>
    </div>
  );
}

export default App;
