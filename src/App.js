import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import data from './components/data.js'

function App() {
  const [count , setCount] = useState(0); 
  const [text , setText] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault()

    let amount = parseInt(count);
    if(count <= 0)
    {
      alert("Ayyo ! you know that you wrote negative input 😵");
      amount =1;
    }
    if(amount > 8)
    {
      alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
      amount = 8;
    }
    setText(data.slice(0,amount))
  }
  return (
    <>
    <section className='container'>
    <h2>TIRED OF BORING LOREM IPSUM? </h2>
    <form onSubmit={handleSubmit}>
      <input
      type = 'number'
      name='amount'
      id='amount'
      value={count}
      onChange={(e) =>{
        setCount(e.target.value)
      }}
      />
      <button className='btn'>Generate</button>
    </form>
    <article>
      {
        text.map((item , index) =>{
          return <p key={index}>{item}</p>
        })
      }
    </article>
    </section>

    
    </>
  );
}

export default App;
