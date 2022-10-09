import React from 'react';
import CryptoCard from './CryptoCard';

const CryptoCollection = ({Cryptos}) => {

  const displayCryptos = Cryptos.map(crypto => {
    return <CryptoCard key={crypto.id} crypto={crypto} />
  } )
  return (
    <div className='collection'>
      {displayCryptos}
    </div>
  )
}


export default CryptoCollection
