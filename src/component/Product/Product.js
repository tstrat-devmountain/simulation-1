import React from "react"
import './product.css';

export default function Product(props)  {
    const { id, name, price, img } = props;
    return (
        <div className="product">
            <img className="productImg" alt={name} src={img} onError={e => props.badImage(e)}/>
            <div>
                <h2>{name}</h2>
                <h3>{price}</h3>

                <div className="productBtns">
                    <button onClick={()=>props.delete(id)}>Delete</button>
                    <button onClick={() => props.select({id, name, price, img})}>Edit</button>
                </div>
            </div>
        </div>
    )
}