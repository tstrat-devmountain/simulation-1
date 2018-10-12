import React from "react"
import './product.css';

export default function Product(props)  {
    console.log(props.img);
    return (
        <div className="product">
            
                <img className="productImg" alt={props.name} src={props.img} onError={e => props.badImage(e)}/>
            
            {/* {props.children} */}
            <div>
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}