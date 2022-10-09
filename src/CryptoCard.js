import React from 'react'

const CryptoCard = ({crypto}) => {
  return (
    <div className='cryptoCard'>
        <img src={crypto.image} alt='' className='cryptoImg' />
        <h1 className="cryptoName">{crypto.name}</h1>
    </div>
  )
}

export default CryptoCard