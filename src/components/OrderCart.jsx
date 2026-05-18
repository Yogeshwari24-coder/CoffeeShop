import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, increaseQty, decreaseQty } from '../redux/cartSlice'
import { toast } from 'react-toastify'

const OrderCart = ({id, img, title, des,quantity, price}) => {

    const dispatch = useDispatch();

  return (
    <div key={id}
    className='bg-white rounded-xl p-4 flex justify-between items-center'>

        <div className='flex gap-4 items-center'>

            <img
            src={img}
            alt=""
            className='w-20 h-20 rounded-xl object-cover'/>

            <div>

                <h1 className='font-bold text-xl'>
                     {title}
                </h1>

                <h2>
                     ₹ {price}
                </h2>

             </div>

        </div>

        <div className='flex items-center gap-3'>

            <button
                 onClick={() =>
                    dispatch(decreaseQty(id))
                }
                className='bg-black text-white px-3 py-1 rounded'>
                 -
            </button>

            <span className='font-bold'>
                {quantity}
            </span>

            <button
                 onClick={() =>
                     dispatch(increaseQty(id))
                }
                className='bg-black text-white px-3 py-1 rounded'>
                                                +
            </button>

            <button
                 onClick={() =>
                     {dispatch(removeItem(id));
                        toast.success("Item Deleted")
                     }
                 }
                className='bg-red-500 text-white px-3 py-1 rounded'>
                 Delete
            </button>

        </div>

    </div>
  )
}

export default OrderCart
