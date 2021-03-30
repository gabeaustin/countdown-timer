import React, { useRef, useState } from "react";

import './App.css';
// import { faHome, faClock } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new("April 16, 2021 00:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        }, 1000);
    };

  return (
    <div className="container">
        <section className="timer-container">
            <section className="timer">
                <div>
                    <span>
                        <FontAwesomeIcon icon={faClock} className="timer-icon" />
                        <h2>Countdown Timer</h2>
                        <p>Countdown to Demo Day</p>
                    </span>
                </div>
                <div>
                    <section>
                        <p>14</p>
                        <p><small>Days</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>14</p>
                        <p><small>Hours</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>14</p>
                        <p><small>Minutes</small></p>
                    </section>
                    <span>:</span>
                    <section>
                        <p>14</p>
                        <p><small>Seconds</small></p>
                    </section>
                </div>
            </section>
        </section>
    </div>
  );
}

export default App;
