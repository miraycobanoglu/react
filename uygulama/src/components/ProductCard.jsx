import React from 'react'

const ProductCard = ({dt}) => {
  return (
    <div className='w-[200px] relative m-2 rounded-md'>
      <img className="w-full h-full rounded-md " src={dt.url} alt={dt.name} />
      <div className='absolute left-0 bottom-0 bg-indigo-600 text-white w-full p-2 rounded-b-md'>
        <h2>{dt.name}</h2>
        <p>{dt.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
