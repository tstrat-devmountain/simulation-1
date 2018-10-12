import React from "react"
import './product.css';

export default function Product(props)  {
    return (
        <div className="product">
            
                <img className="productImg" alt={props.name} src={props.img} onError={e => props.badImage(e)}/>
                        <div>
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}