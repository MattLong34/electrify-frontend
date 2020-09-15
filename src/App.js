import React from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about/" component={About} />      
      </Switch>
    </div>
  );
}

export default App;