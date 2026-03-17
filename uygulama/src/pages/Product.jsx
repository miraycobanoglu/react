import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'
import Modal from '../components/Modal';
import Input from '../components/input';
import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import { createDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';
import { useParams, useLocation } from 'react-router-dom';
import { updateDataFunc } from '../redux/dataSlice';

const Product = () => {
  const modal = useSelector((state) => state.modal.value);
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  const { id } = useParams();  // /update/:id parametresinden id al
  const location = useLocation();  // Query parameter kontrolü için
  const navigate = useNavigate();
  let loc = id || location?.search.split("=")[1];  // id varsa use, yoksa query param
  const [productInfo, setProductInfo] = useState({name:"", price:"", url:""})
    
  const onChangeFunc = (e, type) => {
        if(type === "url"){
            setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
         }else{
            setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
         }

     }  
    
   useEffect(() => {
     if (loc) {
       const product = data.find(item => item.id == loc);
       if (product) {
         setProductInfo(product);
       }
     }
   }, [loc]);

     console.log(id, "update id");

  const buttonFunc = () => {
    const newProduct = { ...productInfo, id: data.length + 1 };
    dispatch(createDataFunc(newProduct));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    const updatedProduct = { ...productInfo, id: loc };
    dispatch(updateDataFunc(updatedProduct));
    dispatch(modalFunc());
    navigate("/");
  };

  const contentModal = (
    <>
      <Input type={"text"} placeholder={"ürün ekle"} name={"name"} id={"name"} onChange={e=> onChangeFunc(e, "name")} />
      <Input type={"text"} placeholder={"fiyat ekle"} name={"price"} id={"price"} onChange={e=> onChangeFunc(e, "price")} />
      <Input type={"file"} placeholder={"resim seç"} name={"url"} id={"url"} onChange={e=> onChangeFunc(e, "url")} />
      <Button onClick={id ? buttonUpdateFunc : buttonFunc} btnText={id ? "ürün güncelle" : "ürün oluştur"} />
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

        {modal && <Modal content={contentModal} title={id ? "ürün güncelle" : "ürün oluştur"}/>}
    </div>
  )
}

export default Product
