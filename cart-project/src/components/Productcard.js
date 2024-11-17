import React , {useState,useContext} from 'react'
import {CartContext} from '../context/CartContext'

const ProductCard=({product})=>{
    const {addToCart} = useContext(CartContext)
    const [quantity, setQuantity] = useState(1);

    const Increment =()=>setQuantity(quantity+1);
    const Decrement=()=>setQuantity(quantity>1?quantity-1:1)

    return(
        <div className="border p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
            <h3 className="text-lg font-bold">{product.title}</h3>
            <p className="text-gray-600">{product.price}</p>
            <div className="flex items-center mt-2">
                <button onClick={Decrement}  className="px-2 py-1 bg-gray-200">-</button>
                <input type='number' onChange={(e)=>{setQuantity(Number(e.target.value))}} value={quantity} className="w-12 text-center mx-2 border"/>
                <button onClick={Increment} className="px-2 py-1 bg-gray-200">+</button>
            </div>
            <button onClick={()=>{addToCart(product,quantity)}}>ADD TO CART</button>
        </div>
    )
}

export default ProductCard;