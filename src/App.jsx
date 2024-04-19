import React, { useState, useEffect } from 'react';
import Main from './components/Main/Main';
import Loader from './components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Эмулируем задержку загрузки
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      {loading ? <Loader /> : <Main />}
    </div>
  )
}

export default App
