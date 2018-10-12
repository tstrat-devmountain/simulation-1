import React, { Component } from "react"
import axios from 'axios';
import missingImage from '../../media/missing_image.png';

import Product from '../Product/Product';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            inventory: []
        }
    }

    componentDidMount = () => {
        this.fetchInventory();
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

    handleBadImage = (ev) => {
        ev.target.src = missingImage;
    }

    render() {
        const productList = this.state.inventory
            .map((p,i) => <Product 
                            key={i} 
                            {...p} 
                            badImage={this.handleBadImage}
                            delete={this.deleteProduct}/>);

        return (
            <div className="dashboard">
                {productList}
            </div>
    )}
}

export default Dashboard;