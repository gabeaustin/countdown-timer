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
                if (days < 10) {
                    setTimerDays(`0${days}`);
                } else {
                    setTimerDays(days);    

                };

                if (hours < 10) {
                    setTimerHours(`0${hours}`);
                } else {
                    setTimerHours(hours);
                };

                if (minutes < 10) {
                    setTimerMinutes(`0${minutes}`);
                } else {
                    setTimerMinutes(minutes);
                };
                
                if (seconds < 10) {
                    setTimerSeconds(`0${seconds}`);
                } else {
                    setTimerSeconds(seconds);
                };
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
                    <div className="col-md-3"></div>
                    <div className="timerIconAndText pt-6 col-md-4">
                        <div>
                            <FontAwesomeIcon icon={faClock} className="timer-icon" />
                            <div>
                                <h1 className="mainText my-3 mb-4">Countdown to Demo Day!</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>

                <div className="timerDaysCountdownContainer row">
                    <div className="col-md-2"></div>
                    <div className="timerDaysCountdown col-md-7 d-flex p-2 mx-5 bd-highlight border border-white">
                        <section className="m-auto">
                            <p className="dateNum text-center">{ timerDays }</p>
                            <div className="dateWords text-center">Days</div>
                        </section>
                        
                        <section>
                            <p className="dateNum text-center">{ timerHours }</p>
                            <div className="dateWords text-center">Hours</div>
                        </section>
                        
                        <section>
                            <p className="dateNum text-center">{ timerMinutes }</p>
                            <div className="dateWords text-center">Minutes</div>
                        </section>
                        
                        <section>
                            <p className="dateNum text-center">{ timerSeconds }</p>
                            <div className="dateWords text-center">Seconds</div>
                        </section>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                
                <div className="buttonContainer text-center m-4">
                    <button id="mainButton" type="button" class="btn btn-warning">Want To Attend?</button>
                </div>
                
            </section>
            <section>
            </section>

            <footer>
                <div>HAKJDKLAJFKLAJLDJL;JD</div> {/* put link to demo call here */}
            </footer>
        </section>
    </div>
  );
}

export default App;
