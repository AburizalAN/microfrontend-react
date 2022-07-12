import { Router, Switch, Route } from 'react-router-dom';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ({ history, onSignIn }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin">
            <SignIn onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup">
            <SignUp onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}