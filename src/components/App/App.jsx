import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import Header from '../Header/Header';
import HomePage from '../../pages/HomePage/HomePage';
import PetPage from '../../pages/PetPage/PetPage';
import './App.css';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/pets/:petId" component={PetPage} />
      <Route path="/pets" exact component={PetsPage} />
      <Redirect to="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
