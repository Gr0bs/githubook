import '../styles/App.scss';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './page/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
