import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import List from './components/List';
import Form from './components/Form';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Kanban App</h1>
        </header>
        <div className="row mt-5">
          <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
          </div>
          <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
