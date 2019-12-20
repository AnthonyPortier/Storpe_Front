import React from 'react';
import './App.css';
import { useState } from 'react';
import {ContextHook} from './components/useContext'
import Router from './components/Router'

function App() {
  const [ranking, setRanking] = useState()
    return (
    
    <ContextHook.Provider value={{ranking, setRanking}}>
        <div className="app">
          <Router/>
        </div>
    </ContextHook.Provider>
  );
}

export default App;
