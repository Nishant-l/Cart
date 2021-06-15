import React from 'react';

class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            price:999,
            tital:'phone',
            qty:1,
            img:''
        }
    }

    increaseQuentity=()=>{
        console.log(this.state);
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1,
            }
            
        });
    }
    decreaseQuentity=()=>{
        console.log('decreasing');
        this.setState((prevState)=>{
            if(prevState.qty>0){
                return{
                    qty:prevState.qty-1,
                }
            }else{
                return;
            }
        })
    }

    render(){
        const{qty,tital,price}=this.state;
        return(
            <div className='cart-item'>
                <div className="left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                   <div style={{fontSize:25}}>{tital}</div> 
                   <div style={{color:'#777'}}>Rs {price}</div> 
                   <div style={{color:'#777'}}>Qty: {qty}</div>
                   <div className="cart-item-actions">
                       <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png" onClick={this.increaseQuentity}/>
                       <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" onClick={this.decreaseQuentity}/>
                       <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/1214/1214428.png"/>
                   </div> 
                </div>

            </div>
        );
    }
}

const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;