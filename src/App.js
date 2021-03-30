import './App.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FontAwesome = require("react-fontawesome");

const App = () => {
  return (
      <div>
          {/* <FontAwesome icon={faHome} /> */}
          <FontAwesomeIcon icon={["far"]} />
          <FontAwesomeIcon icon={faHome} />
      </div>
    // <section className="timer-container">
    //     <section className="timer">
    //         <div>
    //             <span className="mdi mdi-calendar-clock timer-icon">
    //                 <h2>Countdown Timer</h2>
    //                 <p>Countdown to Demo Day</p>
    //                 <button>Hi</button>
    //             </span>
    //             <FontAwesome 
    //                 className="far fa-clock" name="clock" size="2x"/>
    //             <FontAwesome
    //     className="super-crazy-colors"
    //     name="rocket"
    //     size="2x"
    //     spin
    //     style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
    //   />

    //         </div>
    //     </section>
    // </section>
  );
}

export default App;
