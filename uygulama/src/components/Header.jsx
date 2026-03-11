import React from 'react'
import { MdPostAdd } from 'react-icons/md'
import { modalFunc } from '../redux/modalSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl"> REACT UYGULAMA </div>
      <div className="flex items-center gap-4">
        <div>
            <select className="cursor-pointer" name="" id="">
                <option value="asc">artan</option>
                <option value="desc">azalan</option>
            </select>
        </div>
        <div>
            <input className="h-10 px-2 border border-gray-300 rounded" type="text" placeholder='arama yapınız...' />
        </div>
        <div onClick={() => dispatch(modalFunc())} className="bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer">
            <MdPostAdd/>
        </div>
      </div>
    </div>
  )
}

export default Header
