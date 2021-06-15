import React from 'react';
import CartItem from './CartItem';

const Cart=(props)=>{
    const {products}=props;
    return(
        <div className="cart">
            {products.map((product)=> <CartItem product={product} 
                                                key={product.id}
                                                onIncQty={props.onIncQty}
                                                onDecQty={props.onDecQty}
                                                onDelete={props.onDelete}
                                                />)}
        </div>
    );
}

export default Cart;