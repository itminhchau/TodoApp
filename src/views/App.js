import logo from './logo.svg';
import './App.scss';
import ListtoDo from './todo/ListToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './router/Nav';
import Home from './router/Home';
import ListUser from './getapi/ListUser';
import DetailUser from './getapi/DetailUser';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo" >
              <ListtoDo />
            </Route>
            <Route path="/user" exact >
              <ListUser />
            </Route>
            <Route path="/user/:id" exact >
              <DetailUser />
            </Route>

          </Switch>
        </header>

        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
