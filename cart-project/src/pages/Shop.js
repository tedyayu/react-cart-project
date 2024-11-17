import React , {useEffect, useState} from 'react'
import {fetchProducts} from '../api/fetchProduct'
import ProductCard from '../components/Productcard'


const Shop=()=>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const getProducts=async ()=>{
            const data=await fetchProducts();
            setProducts(data)
        };
        getProducts()
    },[])

    return(
        <div>
            {products.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;