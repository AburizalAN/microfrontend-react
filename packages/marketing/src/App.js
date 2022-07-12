import { Router, Switch, Route } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default ({ history}) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  )
}