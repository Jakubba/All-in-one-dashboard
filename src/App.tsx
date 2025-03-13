import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import { HomePage } from './pages/HomePage';
import { Opening } from './components/Opening/Opening';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return <>{loading ? <Opening /> : <HomePage />}</>;
}

export default App;
