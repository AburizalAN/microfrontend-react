import { mount } from 'marketing/MarketingApp';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

const Test = styled.div`
  color: red;
`

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    })

    history.listen(onParentNavigate);
  }, [])

  return (
    <>
      <Test>Test test There</Test>
      <div ref={ref} />
    </>
  )
}

export default MarketingApp;