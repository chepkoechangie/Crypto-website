import React, {useState, useEffect} from "react";
import CryptoCollection from "./CryptoCollection";

function Home() {
    const [coins,setCoins] = useState([]);
    // const [search,setSearch] = useState('');
    useEffect(() => {
      fetch('https://guarded-caverns-85444.herokuapp.com/crypto')
      .then(res=> res.json())
      .then(data =>setCoins(data))
      .catch(error=>console.log(error))
    }, [])
  return <h1>
    <CryptoCollection Cryptos={coins} />
  </h1>;
}

export default Home;