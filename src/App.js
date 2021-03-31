import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date("April 16, 2021 11:00:00").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);    
            };

            // NEED HELP HERE
            if (setTimerSeconds(seconds) < 10) {
                setTimerSeconds(`0${seconds}`);
            };
        }, 1000);

    };

    // componendDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });

  return (
    <div>
        <section className="timer-container">
            <section className="timer">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="timerIconAndText border border-warning justify-content-md-center pt-5 col-md-4">
                        <span>
                            <FontAwesomeIcon icon={faClock} className="timer-icon" />
                            <h2 className="countdownTimer">Demo Day Is Coming</h2>
                            <p>Countdown to Innovate Birmingham's Cohort 13 Spring Demo Day</p>
                        </span>
                    </div>
                    <div className="col-md-4"></div>
                </div>

                <div className="timerDaysCountdownContainer row border border-default">
                    <div className="col-md-3"></div>
                    <div className="timerDaysCountdown border border-white pt-2 col-md-6 mx-auto">
                        <section className="mx-auto">
                            <p>{ timerDays }</p>
                            <p>Days</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{ timerHours }</p>
                            <p>Hours</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{ timerMinutes }</p>
                            <p>Minutes</p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{ timerSeconds }</p>
                            <p>Seconds</p>
                        </section>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </section>
            
            <footer>
                <div>HAKJDKLAJFKLAJLDJL;JD</div> {/* put link to demo call here */}
            </footer>
        </section>
    </div>
  );
}

export default App;
