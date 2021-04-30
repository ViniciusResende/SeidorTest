import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormUserData from './components/FormUserData';
import List from './components/List';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={List} />
      <Route path="/register" exact component={FormUserData} />
      <Route path="/update" exact component={FormUserData} />
    </Switch>     
  );
}

export default Routes;