import React from 'react';
import Cart from './cart'
import NavBar from './NavBar';


class App extends React.Component {
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
      </div>
    );
  }
}

export default App;
