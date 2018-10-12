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
      inventory:[],
      selected: {}
    }
    this.submit = this.submit.bind(this);
    this.fetchInventory = this.fetchInventory.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
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

  deleteProduct = (id) => {
    axios.delete(`/api/product/${id}`)
    .then(() => 
        this.fetchInventory()
    );
  }

  selectProduct = (product) => {
    this.setState({
      selected: product
    })
  }

  editProduct = (id, edits) => {
    axios.put(`/api/product/${id}`, edits)
    .then(() => {
      this.setState({ selected: {}})
      this.fetchInventory();
      }
    )
  }

  render() {
    console.log({selected: this.state.selected});
    return (
      <div className="App">
        <Header />
        <main>
          <Dashboard inventory={this.state.inventory} delete={this.deleteProduct} select={this.selectProduct}/>
          <Form selected={this.state.selected} submit={this.submit} edit={this.editProduct}/>
        </main>
      </div>
    );
  }
}

export default App;
