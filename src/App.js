import './App.css';
import { faHome, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  return (
    <div className="container">
        <section className="timer-container">
            <section className="timer">
                <div>
                    <span>
                        <FontAwesomeIcon icon={faClock} />
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
