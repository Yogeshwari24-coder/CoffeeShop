import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import OrderCart from '../components/OrderCart';
import BestSellerCart from '../components/BestSellerCart';
import Contact from './Contact';
import { toast } from 'react-toastify';

import {
  setInput,
  openCart,
  closeCart, 
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem
} from '../redux/cartSlice';
import Categories from './Categories';


const Shop = () => {

const dispatch = useDispatch();

const input = useSelector((state) => state.cart.input);
const cate = useSelector((state) => state.cart.cate);
const showCart = useSelector((state) => state.cart.showCart);
const cartItems = useSelector((state) => state.cart.cartItems);



let subtotal = cartItems.reduce((total,item)=>total+item.quantity*item.price,0)
let deliveryFee = 20;
let taxes = subtotal*0.5/100;
let total = Math.floor(subtotal + deliveryFee + taxes);

    return (
        <div className='bg-[#dcd0bf] min-h-[100vh] relative sticky'>

            {/* Navbar */}

            <div className='flex justify-evenly px-3 gap-5 h-20 items-center'>

                <h1 className='lg:text-2xl text-lg font-bold text-[#2D2424]'>
                    Coffee Shop.
                </h1>

                <div className='border-2 border-[#2D2424] w-150 h-10 rounded-2xl px-5 flex gap-2 items-center justify-center'>

                    <input
                        type="text"
                        placeholder='Search your coffee'
                        onChange={(e) =>
                            dispatch(setInput(e.target.value))
                        }
                        value={input}
                        className='outline-none h-full w-full text-sm'
                    />

                    <FaSearch />
                </div>

                <div
                    className='text-[#2D2424] text-2xl relative w-22 h-15 cursor-pointer flex items-center gap-2 justify-center'
                    onClick={() => dispatch(openCart())}
                >
                    Cart

                    <FaCartShopping />

                    <span className='absolute top-1 right-0 text-sm'>
                        {cartItems.length}
                    </span>
                </div>
            </div>

            {/* Cart Sidebar */}

            <AnimatePresence>

                {showCart && (

                    <motion.div
                        className='lg:w-2/4 w-full h-full absolute top-0 right-0 bg-[#2D2424] flex flex-col items-center py-6 px-5'
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.7 }}
                    >

                        <RxCross2
                            className='absolute top-7 right-7 text-2xl text-[#dcd0bf] cursor-pointer'
                            onClick={() => dispatch(closeCart())}
                        />

                       <div className='flex flex-col gap-5 mt-10 w-full'>

                            {cartItems.length === 0 ? (

                                <h1 className='text-white text-center'>
                                    No Orders Yet
                                </h1>

                            ) : (

                                <>
                                    {cartItems.map((item) => (

                                        <OrderCart
                                        key={item.id}
                                        id={item.id}
                                        img={item.img}
                                        title={item.title}
                                        price={item.price}
                                        quantity={item.quantity}
                                        />

                                    ))}

                                    <div className='text-white border-t-2 p-5 text-xl'>
                                        <div className='flex justify-between px-2'>
                                        <span>Subtotal</span>
                                        <span>{subtotal}/-</span>
                                        </div>

                                        <div className='flex justify-between px-2'>
                                        <span>Taxes</span>
                                        <span>{taxes}/-</span>
                                        </div>

                                        <div className='flex justify-between px-2'>
                                        <span>Delivery Fee</span>
                                        <span>{deliveryFee}/-</span>
                                        </div>

                                        <div className='flex justify-between bg-[rgba(0,0,0,0.4)] px-2 rounded-lg h-8 mt-5'>
                                        <span>Total</span>
                                        <span>Rs {total}/-</span>
                                        </div>
                                        <button className='bg-[rgba(0,0,0,0.4)] h-10 w-full mt-5 cursor-pointer rounded-xl'
                                        onClick={()=>toast.success("Order Placed")}>Place Order</button>
                                    </div>
                                    </>
                                
                            )}

                            
                        </div>

                        

                    </motion.div>
                )}

            </AnimatePresence>

            {/* Products */}

            <div className='md:flex flex-wrap justify-center gap-10 border-b-2 border-amber-950 py-10 items-center mt-5'>

                {cate.map((item) => (

                    <div key={item.id}>

                        <BestSellerCart
                            {...item}
                        />

                    </div>
                ))}

            </div>

            <Contact />

        </div>
    )
}

export default Shop