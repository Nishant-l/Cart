import React from 'react';
import Cart from './cart'
import NavBar from './NavBar';
import Total from './footer'


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[
            {   price:5000,
                tital:'Phone',
                qty:1,
                img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
                id:1
            },
            {   price:1000,
                tital:'Charger',
                qty:2,
                img:'https://images.unsplash.com/photo-1586254116648-d33e0fada133?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                id:2
            },
            {   price:5000,
                tital:'EarPhone',
                qty:5,
                img:'https://images.unsplash.com/photo-1578319439584-104c94d37305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                id:3
            },
            {   price:7000,
                tital:'Headphone',
                qty:1,
                img:'https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
                id:4
            }
        ]
    }
}
handelIncreaseQty=(product)=>{
    console.log('increase quentity of',product);
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({products:products})
}
handelDecreaseQty=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty<=0){
        return;
    }else{
        products[index].qty-=1;
        this.setState({products});
    }
}
handelDelete=(id)=>{
    const {products}=this.state;
    const item=products.filter((product)=>product.id!==id);
    this.setState({products:item});
}
countTotalQty=()=>{
  const {products}=this.state;
  const count=products.reduce((acc,item)=>acc+=item.qty,0);
  console.log(count);
  return count;
}

countTotalAmount=()=>{
  const {products}=this.state;
  const total=products.reduce((acc,product)=>acc+=(product.qty*product.price),0);
  return total;
}
  render(){
    return (
      <div className="App">
        <NavBar
          count={this.countTotalQty()}
        />
        <Cart 
          products={this.state.products}
          onIncQty={this.handelIncreaseQty}
          onDecQty={this.handelDecreaseQty}
          onDelete={this.handelDelete}
        />
        <Total total={this.countTotalAmount()}/>
      </div>
    );
  }
}

export default App;
