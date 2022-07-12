import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth">
            <AuthLazy isSignedIn={isSignedIn} onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/" component={MarketingLazy} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App;