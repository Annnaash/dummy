import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    //fetch('student.json')
    fetch('https://dummyjson.com/products')
    .then(x=> x.json())
    .then(x=> setData(x.products))
  }, [])

  return (
    <div className="App">
      <div className='search'>Søk gjennom kategori</div>
      <input value={filter} onChange={e=>
        setFilter(e.target.value)}/>
      {
      data

      .filter(x=> x.category.includes(filter))
      .map((x, index) =>

        <div key={index}>
          <div style={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: 30, }}>

          <div className='tabell'>
            <img src={x.thumbnail}alt='telefon'/>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '50%', margin: 'auto'}}>

          <div className='row'>Titell: <div>{x.title}</div></div>
          <div className='row'>Beskrivelse: <div>{x.description}</div></div>
          <div className='row'>Pris: <div>{x.price}</div></div>
          <div className='row'>Verdi<div>{x.discountPrecentage}</div></div>
          <div className='row'>Verdi<div>{x.rating}</div></div>
          <div className='row'>Verdi<div>{x.stock}</div></div>
          <div className='row'>Firma<div>{x.brand}</div></div>
          <div className='row'>Kategori<div>{x.category}</div></div>
          </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
