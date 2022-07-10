import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <MarketingApp />
    </Router>
  )
}

export default App;