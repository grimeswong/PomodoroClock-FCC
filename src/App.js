import React from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Pomodoro Clock</h1>
        <div className="break-wrapper">
          <div id="break-label">Break Length</div>
          <button id="break-decrement">Break Decrement</button>
          <div id="break-length">5</div>
          <button id="break-increment">Break Increment</button>
        </div>
        <div className="session-wrapper">
          <div id="session-label">Session Length</div>
          <button id="session-decrement">Session Decrement</button>
          <div id="session-length">25</div>
          <button id="session-Increment">Session Increment</button>
        </div>
        <div className="timer-wrapper">
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
