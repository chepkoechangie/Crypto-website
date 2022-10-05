import React, { useEffect, useState } from 'react';
import './App.css';
import Coin from './Coin';
// import Navbar from './Navbar';
// import Home from './Components/Home'; 
import Button from 'react-bootstrap/Button';

function App() {
  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  useEffect(() => {
    fetch(' https://salty-depths-82016.herokuapp.com/crypto')
    .then(res=> res.json())
    .then(data =>setCoins(data))
    .catch(error=>console.log(error))
  }, [])
  const handleChange = e =>{
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()
    )
    )
