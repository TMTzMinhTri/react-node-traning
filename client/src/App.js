import React from 'react';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";

import Header from './components/Header'
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
