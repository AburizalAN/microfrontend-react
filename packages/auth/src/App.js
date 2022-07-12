import { Router, Switch, Route } from 'react-router-dom';
import { useEffect, useContext } from 'react';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ({ history}) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  )
}