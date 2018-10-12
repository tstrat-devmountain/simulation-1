import React, { Component } from "react"

import missingImage from '../../media/missing_image.png';
import './form.css';
class Form extends Component {
    constructor() {
        super()
        this.state= {
            img : '',
            name: '',
            price: 0
        };
    }

    updateImgUrl = (e) => this.setState({img: e.target.value});
    updateProductName = (e) => this.setState({name: e.target.value});
    updatePrice = (e) => this.setState({price: parseFloat(e.target.value || 0, 10)});
    
    clearInput = () => this.setState({
        img: '',
        name: '',
        price: 0
    })

    postData = () => {
        this.props.submit(this.state);
        this.clearInput();
    }
    

    render() {
        const { img, name, price } = this.state;
        const submitBtn = this.props.edit ? 
            <button onClick={()=>{}}>Edit</button>:
            <button onClick={()=> this.postData() }>Add to Inventory</button>;
            
        return (
            <div className="form">
                <img className="formImg" src={img} onError={e => {e.target.src = missingImage}} alt="displayed" />
                <h2>Image URL:</h2>
                <input placeholder="Enter image URL" value={img} onChange={this.updateImgUrl}/>
                <h2>Product Name:</h2>
                <input placeholder="Enter a product name" value={name} onChange={this.updateProductName} />
                <h2>Price:</h2>
                <input type="number" step="0.01" placeholder="Enter a price" value={price || ''} onChange={this.updatePrice} />
                <div className="buttonControls">
                    <button onClick={this.clearInput}>Cancel</button>
                    {submitBtn}
                </div>
            </div>
    )}
}

export default Form;