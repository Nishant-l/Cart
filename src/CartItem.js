import React from 'react';

const CartItem = (props) => {

        const{qty,tital,price,id}=props.product;
        const{onDelete,onIncQty,onDecQty}=props;
        console.log('rendered----------------------------');
        // console.log(this.props);
        return(
            <div className='cart-item'>
                <div className="left-block">
                    <img style={style.image} src={props.product.img}/>
                </div>
                <div className="right-block">
                   <div style={{fontSize:25}}>{tital}</div> 
                   <div style={{color:'#777'}}>Rs {price}</div> 
                   <div style={{color:'#777'}}>Qty: {qty}</div>
                   <div className="cart-item-actions">
                       <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png" onClick={()=>{onIncQty(props.product)}}/>
                       <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" onClick={()=>{onDecQty(props.product)}}/>
                       <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/1214/1214428.png" onClick={()=>{onDelete(id)}}/>
                   </div> 
                </div>

            </div>
        );
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