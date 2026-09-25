'use client';


import { IBook } from '@/booktypes';
import React, { useContext } from 'react';
import Books from '../homepage/books';
import { BooksContext } from '@/context/BooksProvider';
import { toast } from 'react-toastify';





const WishlistButton = ({book}:{book:IBook}) => {

const {Wishlist,setWishlist} = useContext(BooksContext)

    const handleAddWishlist =()=>{
setWishlist([...Wishlist,book])
toast.success(`You have read "${book.bookName}"`)
    }
    return (
       
            <button  className="btn w-full rounded-xl border-0 bg-indigo-600
             text-base font-semibold text-white shadow-lg shadow-indigo-200
              transition duration-300 hover:scale-[1.02] hover:bg-indigo-700 sm:w-auto 
              sm:px-10" onClick={()=> handleAddWishlist()}>
              Add to Wishlist
            </button>
            
    );
};

export default WishlistButton;