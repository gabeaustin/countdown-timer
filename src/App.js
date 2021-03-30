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
                        <button>Hi</button>
                    </span>
                </div>
            </section>
        </section>
    </div>
  );
}

export default App;
