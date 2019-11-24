import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ListTodo from "./components/ListTodo";
import EditTodo from "./components/EditTodo";
import CreateTodo from "./components/CreateTodo";

class App extends Component {
  render(){
    return(
      <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Brand</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">CreateTodo</Link>
                </li>
              </ul>
            </div>
          </nav>
        <Route exact path="/" component={ListTodo} />
        <Route exact path="/edit/:id" component={EditTodo} />
        <Route exact path="/create" component={CreateTodo} />
      </Router>
    )
  }
}

export default App;
