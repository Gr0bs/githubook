import '../styles/App.scss';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Home from './page/Home'
import ProfilPage from './page/ProfilPage';
import Discover from './page/Discover'
import Login from './page/Login'
import {ReactComponent as Avatar} from '../images/Logo.svg'

function App() {

  return (
    <Router>

    {localStorage.getItem('user') === null && <Redirect to='/login' />}

        <span className='ad'> <a href="https://github.com/Gr0bs">Made By <strong>Gr0b</strong> <Avatar className='icon' /></a> </span>
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
