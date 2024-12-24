import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from '../../components/CartProduct';

const Cart = () => {


  const cart = useSelector((store) => store.cart)
  
  
  

    return (
        <>
        <div className='flex justify-between'>
            <div>
            {
                cart.map((item) => (
                    <CartProduct key={item.product.id} cartItem={item} />
                ))
            }
            </div>
        </div>
        </>
    );
}

export default Cart;
