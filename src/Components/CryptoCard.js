import React from 'react'

const CryptoCard = ({crypto}) => {
  return (
    <div className='cryptoCard'>
        <img src={crypto.image} alt='' className='cryptoImg' />
        <h1 className="cryptoName">{crypto.name}</h1>
        <h4 className="cryptoPrice">
            {crypto.price_change_percentage_24h}
        </h4>
    </div>
  )
}

export default CryptoCard