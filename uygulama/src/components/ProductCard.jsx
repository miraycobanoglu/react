import React from 'react'
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { deleteDataFunc } from '../redux/dataSlice';

const ProductCard = ({dt}) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='w-[200px] relative m-2 rounded-md'>
      <img className="w-full h-50 object-cover rounded-md " src={dt.url} alt={dt.name} />
      <div className='absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2 rounded-b-md'>
        <h2>{dt.name}</h2>
        <p>{dt.price}</p>
      </div>
      <div onClick={()=> setOpenEdit(!openEdit)} className='absolute top-2 right-2'>
        <BsThreeDots className='bg-indigo-600 rounded-md cursor-pointer' size={24} color='white'/>
      </div>
      { 
      openEdit &&
       <div className='bg-indigo-600 border-white text-white absolute top-9 right-0 rounded-md px-1'>
        <div onClick={()=> dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer'>sil</div>
        <div className='cursor-pointer'>güncelle</div>
      </div>
      }
  
    </div>
  )
}

export default ProductCard;
