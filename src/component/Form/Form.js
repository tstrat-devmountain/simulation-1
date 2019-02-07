import React, { Component } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';
import missingImage from '../../media/missing_image.png';
import './form.css';
class Form extends Component {
    constructor() {
        super()
        this.state= {
            id: undefined,
            img : '',
            name: '',
            price: 0
        };
    }

    componentDidMount = () => {
        if (this.props.match.params.id) {
            axios.get(`/api/product/${this.props.match.params.id}`)
            .then(res => {
                const { id, img, name, price } = res.data;
                this.setState({
                    id,
                    img,
                    name,
                    price
                })
            })
            
        }
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
        axios.post('/api/product', this.state)
        .then(() => {
            this.props.history.push('/')
        })
        this.clearInput();
    }

    editData = (id) => {
        axios.put(`/api/product/${id}`, this.state)
        .then(() => {
            this.setState({ selected: {}});
        }
    )
        this.clearInput();
    }
    

    render() {
        const { img, name, price } = this.state;
        const id = this.state.id > 0 ? this.state.id : undefined;
        const submitBtn = id ? 
            <Link to='/'><button onClick={()=>this.editData(id)}>Save Changes</button></Link>:
            <Link to='/'><button onClick={()=> this.postData() }>Add to Inventory</button></Link>;
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