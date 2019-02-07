import React from "react"
import { Link } from 'react-router-dom';
import './product.css';


export default function Product(props)  {
    const { id, name, price, img } = props;
    return (
        <div className="product">
            <img className="productImg" alt={name} src={img} onError={e => props.badImage(e)}/>
            <div>
                <h2>{name}</h2>
                <h3>$ {currency(price)}</h3>

                <div className="productBtns">
                    <button onClick={()=>props.delete(id)}>Delete</button>
                    <Link to={`/edit/${id}`}><button>Edit</button></Link>
                </div>
            </div>
        </div>
    )
}

function currency(num) {
    return new Intl.NumberFormat('en-In', { minimumFractionDigits:2 }).format(num);
}