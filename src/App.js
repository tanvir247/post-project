import React from 'react'
import './App.css';
import AllPost from './Component/allPost/AllPost';
import SinglePost from './Component/singlePost/SinglePost';
import Header from './Component/Header/Header';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Header></Header>
        <Switch>
        
          <Route path="/" exact>
            <AllPost></AllPost>
          </Route>
          <Route path="/allPost">
            <AllPost></AllPost>
          </Route>
          <Route path="/singlePost/:singlePostId">
            <SinglePost></SinglePost>

          </Route>
          
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
