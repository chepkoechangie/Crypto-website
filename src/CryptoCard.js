import React from 'react'

const CryptoCard = ({crypto}) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img src={crypto.image} alt='' className='h-40 max-w-none mt-10 pl-10' />
        <h1 className="mt-10 ml-10">{crypto.name}</h1>
    </div>
  )
}

export default CryptoCard