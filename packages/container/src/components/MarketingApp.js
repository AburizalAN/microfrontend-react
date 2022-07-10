import { mount } from 'marketing/MarketingApp';
import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Test = styled.div`
  color: red;
`

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <>
      <Test>Test test There</Test>
      <div ref={ref} />
    </>
  )
}

export default MarketingApp;