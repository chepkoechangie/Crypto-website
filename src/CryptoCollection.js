import React from 'react';
import CryptoCard from './CryptoCard';

const CryptoCollection = ({Cryptos}) => {

  const displayCryptos = Cryptos.map(crypto => {
    return <CryptoCard key={crypto.id} crypto={crypto} />
  } )
  return (
    <div className='grid grid-rows-3 grid-flow-col gap-7 h-fit ml-5 mr-5'>
      {displayCryptos}
    </div>
  )
}


export default CryptoCollection
