import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit = (product) => {
    axios.post('/api/product', product)
    .then(res => {
        console.log("success!", res.data);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard />
          <Form submit={this.submit}/>
        </main>
      </div>
    );
  }
}

export default App;
