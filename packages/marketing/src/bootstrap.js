import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { UNSAFE_NavigationContext } from "react-router-dom";
import App from './App';

const mount = (el, { onNavigate, defaultHistory } = { onNavigate: null, defaultHistory: null }) => {
  const history = defaultHistory || createMemoryHistory();
  
  if (onNavigate) {
    history.listen(onNavigate);
  }

  const root = ReactDOM.createRoot(el);
  root.render(<App history={history} onNavigate={onNavigate} />);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('marketing-dev-root') 
  
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
  
}

export { mount }