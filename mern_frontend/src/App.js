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
        <div className="container">
          <h1>hello</h1>
        </div>
        <Route exact path="/" component={ListTodo} />
        <Route exact path="/edit/:id" component={EditTodo} />
        <Route exact path="/create" component={CreateTodo} />
      </Router>
    )
  }
}

export default App;
