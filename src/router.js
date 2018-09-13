import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from "./components/Users/Users";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/404" component={ErrorPage} />
    </Router>
  );
}

export default RouterConfig;
