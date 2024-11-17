import React , {useContext} from 'react'; 
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const Navbar=()=>{
    const {cartCount}=useContext(CartContext)

    return(
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl font-bold">shopping cart</h1>
            <div className="space-x-4">
                <Link to='/' className="text-white">Home</Link>
                <Link  to='/shop' className="text-white">shop</Link>
                <Link to='/cart' className="text-white">cart({cartCount})</Link>
            </div>
        </nav>
    )
}
export default Navbar;