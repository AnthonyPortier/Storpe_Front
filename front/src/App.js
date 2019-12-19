import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { useState } from 'react';
import {ContextHook} from './components/useContext'
import Router from './components/Router'
import MatchPage from './components/1_matchPage/MatchPage'

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
