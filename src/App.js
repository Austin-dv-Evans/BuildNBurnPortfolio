import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './components/'
import './App.css';
import Resume from './components/Resume'
import { Route } from "react-router-dom"


function App() {
  return (
    <>
    <CssBaseline />
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    </>
  );
}

export default App;
