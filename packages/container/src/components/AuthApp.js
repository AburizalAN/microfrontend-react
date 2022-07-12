import { mount } from 'auth/AuthApp';
import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = () => {
  const ref = useRef();
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    })

    history.listen(onParentNavigate)
  }, [])

  return (
    <div ref={ref} />
  )
}

export default AuthApp;