import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import WorkDetail from './components/WorkDetail';
import Navi from './components/Navi';

function App() {
  return (
    <HashRouter>
      <Navi />
      <Route path="/" exact={true} component={Main} />
      <Route path="/work/:id" component={WorkDetail} />
      <div>© 2021, Designed & Coded by Yang Jicheol</div>
    </HashRouter>
  );
}

export default App;
