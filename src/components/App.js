import '../styles/App.scss';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './page/Home'
import ProfilPage from './page/ProfilPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/user/:username">
            <ProfilPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
