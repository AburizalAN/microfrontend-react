import { mount } from 'marketing/MarketingApp';
import { useEffect, useRef } from 'react';

const MarketingApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <>
      <h1>Test test There</h1>
      <div ref={ref} />
    </>
  )
}

export default MarketingApp;