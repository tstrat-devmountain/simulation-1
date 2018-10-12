import React, { Component } from "react"
import missingImage from '../../media/missing_image.png';

import Product from '../Product/Product';

class Dashboard extends Component {

    handleBadImage = (ev) => {
        ev.target.src = missingImage;
    }

    render() {
        const productList = this.props.inventory
            .map((p,i) => <Product 
                            key={i} 
                            {...p} 
                            badImage={this.handleBadImage}
                            select={this.props.select}
                            delete={this.props.delete}/>);

        return (
            <div className="dashboard">
                {productList}
            </div>
    )}
}

export default Dashboard;