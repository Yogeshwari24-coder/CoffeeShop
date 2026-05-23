import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'

const BestSellerCart = ({id, img, title, des, price}) => {
  
  const dispatch = useDispatch();
  
  return (  
    <div className= 'rounded-xl flex flex-col items-center justify-center py-5 mt-5 shadow-xl/30 bg-[#2D2424] text-[#ddc6a7] shadow-black w-[350px] h-[420px]'>
        <img src={img} className='size-60 ml-5 rounded-2xl'/>
        <h1 className='mt-3 text-xl font-semibold text-[#b66444]'>{title}</h1>
        <p className='text-sm'>{des}</p>
        <div className='mt-2 flex justify-between text-[#b66444]'>
            <span className='font-semibold'>Rs {price}/-</span>
            <span className='cursor-pointer'
             onClick={() =>
                        {dispatch(addToCart({
                            id,
                            img,
                            title,
                            des,
                            price,
                        }));
                      toast.success("Item Added")}
                    }
                    >cart</span>
        </div>
    </div> 
  )
}

export default BestSellerCart
