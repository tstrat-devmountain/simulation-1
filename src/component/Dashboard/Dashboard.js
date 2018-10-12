import React, { Component } from "react"
import axios from 'axios';
import missingImage from '../../media/missing_image.png';

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

    handleBadImage = (ev) => {
        ev.target.src = missingImage;
    }

    render() {
        const productList = this.state.products
            .map((p,i) => <Product key={i} name={p.name} price={p.price} img={p.img} badImage={this.handleBadImage}/>);

        return (
            <div className="dashboard">
                {productList}
            </div>
    )}
}

export default Dashboard;