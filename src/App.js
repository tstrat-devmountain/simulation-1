import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state={
      inventory:[]
    }
    this.submit = this.submit.bind(this);
    this.fetchInventory = this.fetchInventory.bind(this);
  }

  componentDidMount() {
    this.fetchInventory();
  }

  submit = (product) => {
    axios.post('/api/product', product)
    .then(() => {
        this.fetchInventory();
    })
  }

  fetchInventory = () => {
    axios.get('/api/inventory/')
    .then(res => this.setState({
        inventory: res.data
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard inventory={this.state.inventory}/>
          <Form submit={this.submit}/>
        </main>
      </div>
    );
  }
}

export default App;
