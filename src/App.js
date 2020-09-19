import React from 'react'
import './App.css'

import Route from './routes'
import JokesProvider from './contexts/jokes'

function App() {
  return (
    <div className="App">
      <JokesProvider >
        <Route />
      </JokesProvider>
    </div>
  );
}

export default App;
