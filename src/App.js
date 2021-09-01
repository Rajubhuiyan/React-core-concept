import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from 'browserslist';

function App() {
  const products = [
    {name: 'PhotoShop', Price: '$99.99'},
    {name: 'Illustrator', Price: '$89.99'},
    {name: 'Premeire', Price: '$200.99'},
    {name: 'indesign', Price: '$200.99'},
  ]
  const cats = ['Thomas', 'Butch', 'Tospi','Toddles', 'Jerry']
 
  return (
    <div className="App">
    <header className="App-header">
      <p>My React App</p>
      <Counter></Counter>
      <Users></Users>

      <ul>
      {
        cats.map(cat=> <li>{cat}</li>)
      }
      {
        products.map(product => <li>{product.name}</li>)
      }
        <li>{cats[0]}</li>
        <li>{cats[1]}</li>
        <li>{cats[2]}</li>
      </ul>

      <Product products={products[0]}></Product>
      <Product products={products[1]}></Product>
      <Product products={products[2]}></Product>

      <Person name='Thomas' proff='Hunting Cat'></Person>
      <Person name='Butch' proff='Fajil giri kora'></Person>
    </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'float',
    margin:'10px'
  }
  const {name, Price} = props.products;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{Price}</h1>
      <button>BuyNOW</button>
    </div>
  )
}

function Person(props) {
  return (
    <div style={{border:'2px solid red', margin:'10px', width:'400px'}}>
      <h1>My Name : {props.name}</h1>
      <p>Profession : {props.proff}</p>
    </div>
  )
}

export default App;
