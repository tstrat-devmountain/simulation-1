import React, { Component } from "react"
import axios from 'axios';

import Product from '../Product/Product';

class Dashboard extends Component {
constructor() {
        super()
        this.state= {
            products: []
        };
    }

    componentDidMount() {

        axios.get('/api/inventory/')
        .then(res => this.setState({
            products: res.data
        }))
        
    }


    render() {
        const productList = this.state.products
            .map((p,i) => <Product key={i} name={p.name} price={p.price} img={p.img}/>);

        return (
            <div>
                Dashboard
                {productList}
            </div>
    )}
}

export default Dashboard;