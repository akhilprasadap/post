import React, { Component } from 'react';
import Home from './Home.js';
import Update from './Update.js';
import Comment from './comment.js';
import Create from './create.js';

import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Link,NavLink,Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';


class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">                
                 
                  <Route path = "/" exact component = {Home} />        
                  <Route path = "/Comment/:id" exact component = {Comment} /> 
                  <Route path = "/Update/:id" exact component = {Update} />
                  <Route path = "/Create/" exact component = {Create} /> 
              </div>
            </Router>
        );
    }
}

export default App;