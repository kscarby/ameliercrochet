import React, { useState, useEffect } from 'react'


import '../styles/ProductCard.css';

const NewProducts = () => {

  const [products, setProducts] = useState ([]);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: 450,
    width: 350,
    border: 'none' ,
    outline: 0
  };

  useEffect (() => {

    fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then(products=>setProducts(products));

  }, [])

 console.log (products);

  return (
    <div className='app'>
      {products.map(item => (

      <div key = {item.id} className='card-newproduct'>
        <p className='new-p'>Lançamento</p>
          <img className='img-newproduct' src={item.image}></img>
          
          <div className='card-price'>
            <h1>{item.title}</h1>
            <h2>R$ {item.price}</h2>
            <p>R$ {item.price} à vista com desconto ou 3x {((item.price)/3).toFixed(2)} Sem juros</p>
            <div className='card-buy'>
              <button className='button-buy'>Comprar</button>
            </div>
          </div>
      </div>
      ))}
    </div>
  )
}

export default NewProducts