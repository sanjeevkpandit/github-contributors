import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import ContributorsList from './ContributorsList';

const Routes = props => {
  return (
    <Switch>
      <Route
        exact
        path="/contributors/:username/:repository"
        component={ ContributorsList } />

      <Redirect to="/contributors" />
    </Switch>
  );
}

export default Routes;
