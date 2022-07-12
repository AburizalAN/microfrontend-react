import { mount } from 'auth/AuthApp';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn, isSignedIn }) => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    if (isSignedIn) {
      history.push('/')
    } else {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname: nextPathname }) => {
          if (history.location.pathname !== nextPathname) {
            history.push(nextPathname);
          }
        },
        onSignIn
      })
      history.listen(onParentNavigate)
    };
  }, [isSignedIn])

  return (
    <div ref={ref} />
  )
}

export default AuthApp;