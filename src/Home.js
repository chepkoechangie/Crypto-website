import React, {useState, useEffect} from "react";
import CryptoCollection from "./Components/CryptoCollection";
import Search from "./Components/Search";

function Home() {
    const [coins,setCoins] = useState([]);
    const [search, setSearch] = useState('');
    // const [search,setSearch] = useState('');
    useEffect(() => {
      fetch('https://guarded-caverns-85444.herokuapp.com/crypto')
      .then(res=> res.json())
      .then(data =>setCoins(data))
      .catch(error=>console.log(error))
    }, [])
    const visibleCryptos = coins.filter(coin=>{
        return coin.name.toLowerCase().includes(search.toLowerCase())
      })
  return <h1>
    <Search setSearch={setSearch} search={search} />

    <CryptoCollection Cryptos={visibleCryptos} />
  </h1>;
}

export default Home;