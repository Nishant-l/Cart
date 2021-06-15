import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {   price:5000,
                    tital:'phone',
                    qty:1,
                    img:'',
                    id:1
                },
                {   price:1000,
                    tital:'charger',
                    qty:2,
                    img:'',
                    id:2
                },
                {   price:500,
                    tital:'earphone',
                    qty:5,
                    img:'',
                    id:3
                },
                {   price:4,
                    tital:'simCard',
                    qty:1,
                    img:'',
                    id:4
                }
            ]
        }
    }
    // constructor(){
    //     super();
    //     this.state={
            
    //     }
    // }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=> <CartItem product={product} key={product.id}/>)}
            </div>
        );
    }
}

export default Cart;