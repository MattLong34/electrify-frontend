import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme'
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import TestHeader from './components/TestHeader'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <TestHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/" component={About} />      
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;