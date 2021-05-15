import '../styles/App.scss';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './page/Home'
import ProfilPage from './page/ProfilPage';
import Discover from './page/Discover'
import Login from './page/Login'


function App() {

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <>
            <Navbar />
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path="/user/:username">
                <ProfilPage />
              </Route>
              <Route exact path="/discover">
                <Discover />
              </Route>
          </>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
