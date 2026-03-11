import React from 'react'

export default function Modal({title, content, btnText, btnFunc}) {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
       <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
         <div>
            <div>{title}</div>
         </div>
       </div>
    </div>
  )
}

