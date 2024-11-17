import React , {createContext, useState} from 'react'

export const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartItems,setCartItem]=useState([]);

    const AddToCart= (product,quanitity)=>{
        const existingItem=cartItems.find(item=>item.id===product.id)
        if(existingItem){
            setCartItem(cartItems.map(item=>
                item.id===product.id?{...item,quanitity:item.quanitity+quanitity}:item
            ))
        }else{
            setCartItem([...cartItems,{...product,quanitity}])
        }
    }

    const cartCount=cartItems.reduce((acc,item)=>acc+item.quanitity,0)

    return(
        <CartContext.Provider value={{cartItems,AddToCart,cartCount}}>
            {children}
        </CartContext.Provider>
    )
}

