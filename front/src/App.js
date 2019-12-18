import React from 'react';
import './App.css';
import { useState } from 'react';
import {ContextHook} from './components/useContext'

function App() {
  const [ranking, setranking] = useState(initialState)
    return (


    <ContextHook.Provider value={{ranking, setRanking}}>
        <div className="app">
        <Router/>
        </div>
    </ContextHook.Provider>
  );
}

export default App;
