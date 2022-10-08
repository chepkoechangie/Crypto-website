import React, { useEffect, useState } from 'react';
import CryptoCollection from './Components/CryptoCollection';
//import Navbar from './Navbar';
//import Home from './Components/Home'; 


function App() {
  const [coins,setCoins] = useState([]);
  // const [search,setSearch] = useState('');

  useEffect(() => {
    fetch('https://guarded-caverns-85444.herokuapp.com/crypto')
    .then(res=> res.json())
    .then(data =>setCoins(data))
    .catch(error=>console.log(error))
  }, [])
  // const handleChange = e =>{
  //   setSearch(e.target.value)
  //}
  // const filteredCoins = coins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()
  //   )
  //   )
  //   console.log(filteredCoins);

    return (
      <>
      <CryptoCollection Cryptos={coins} />
      </>
    );
  }
  
  
  
  export default App;