import React from 'react';

class CartItem extends React.Component{

    increaseQuentity=()=>{
        
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1,
            }
        },()=>{console.log(this.state);});
        
    }
    decreaseQuentity=()=>{
        console.log('decreasing');
        const {qty} = this.state;
        if(qty<=0)
            return;
        this.setState((prevState)=>{     
            return{
                qty:prevState.qty-1,
            }
        })
    }

    render(){
        const{qty,tital,price}=this.props.product;
        console.log('rendered----------------------------');
        console.log(this.props);
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