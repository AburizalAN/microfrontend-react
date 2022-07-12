import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import AuthApp from './components/AuthApp';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthApp} />
        <Route path="/" component={MarketingApp} />
      </Switch>
    </Router>
  )
}

export default App;