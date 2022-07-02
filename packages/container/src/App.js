import { mount } from 'marketing/MarketingApp';
import { useEffect, useRef } from 'react';

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <>
      <h1>testte</h1>
      <div ref={ref} />
    </>
  )
}

export default App;