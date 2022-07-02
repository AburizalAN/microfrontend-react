import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/pricing" element={<Pricing />}/>
          <Route path="/" element={<Landing />}/>
        </Routes>
      </Router>
    </div>
  )
}