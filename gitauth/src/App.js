import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './Components/LoginPage/Login';
import ReposPage from './Components/RepoList/RepoList';
import RepoDetailsPage from './Components/RepoDetails/RepoDetails';
import Navbar from './Components/Navbar/Navbar';
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [darkMode, setDarkMode] = useState(false);



  const handleModeToggle = () => {
    if (darkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
    setDarkMode(!darkMode);
  };



  return (
    <>
      <Navbar darkMode={darkMode} handleModeToggle={handleModeToggle} />
      <Router>
        <Switch>
          <Route exact path="/">
            {isAuthenticated ? <Redirect to="/repos" /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/repos" component={ReposPage} />
          <Route path="/repos/:owner/:repoName" component={RepoDetailsPage} />
          <Route path="*">
            <h1>404 - Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
