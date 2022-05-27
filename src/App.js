import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/login/signin"
import Forgot from './components/login/forgot';
import CalendarEve from './components/eventCalendar/eventCalendar';
import Signup from './components/login/signup';
import Error from './components/error';
import Tracker from './components/tracker/tracker';
import Home from './components/homePage/homePage';
import Booking from './components/booking/booking';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/forgot" component={Forgot} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/calendar" component={CalendarEve} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tracker" component={Tracker} />
          <Route exact path="**" component={Error} />
          <Signin />
          <Signup />
          <Forgot />
          <Home />
          <CalendarEve />
          <Tracker />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
