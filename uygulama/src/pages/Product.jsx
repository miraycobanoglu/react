import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal';
import Input from '../components/input';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { createDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';

const Product = () => {
  const modal = useSelector((state) => state.modal.value);
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({name:"", price:"", url:""})
    
  const onChangeFunc = (e, type) => {
        if(type === "url"){
            setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
         }else{
            setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
         }

     }  

     console.log(data, "data");

  const buttonFunc = () => {
    const newProduct = { ...productInfo, id: data.length + 1 };
    dispatch(createDataFunc(newProduct));
    dispatch(modalFunc());
  };
  const contentModal = (
    <>
      <Input type={"text"} placeholder={"ürün ekle"} name={"name"} id={"name"} onChange={e=> onChangeFunc(e, "name")} />
      <Input type={"text"} placeholder={"fiyat ekle"} name={"price"} id={"price"} onChange={e=> onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"resim seç"} name={"url"} id={"url"} onChange={e=> onChangeFunc(e, "url")} />
      <Button onClick={buttonFunc} btnText={"Oluştur"} />
    </>
  );
  return (
    <div>
      <div className='flex items-center flex-wrap mt-4'>
        {
          data?.map((dt,i) => ( 
          <ProductCard key={i} dt={dt} /> 
        ))
        }
      </div>

        {modal && <Modal content={contentModal} title={"ürün oluştur"}/>}
    </div>
  )
}

export default Product
