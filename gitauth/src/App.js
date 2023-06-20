import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './Components/LoginPage/Login';
import ReposPage from './Components/RepoList/RepoList';
import RepoDetailsPage from './Components/RepoDetails/RepoDetails';


const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
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
  );
};

export default App;
