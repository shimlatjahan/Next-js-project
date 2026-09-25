import { IBook } from '@/booktypes';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import BookCard from './BookCard';

interface IListedBookCardProps {
    book: IBook
}


const ListedBooksCard = ({book}:IListedBookCardProps) => {
    return (
       <div 
        className="group flex w-full  gap-7 justify-center items-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Book Image */}
      <div className="relative  h-[300px] w-[300px] shrink-0 overflow-hidden rounded-xl bg-slate-100 ">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="250px"
          className="object-contain p-2 transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Book Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">

        <div>
          <h2 className="line-clamp-2 text-lg font-bold text-slate-800">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            By {book.author}
          </p>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {book.category}
          </p>
        </div>

        {/* Button */}
        <Link
          href={`/books/${book.bookId}`}
          className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
        >
          View Details
          <span>→</span>
        </Link>

      </div>
    </div>
    );
};

export default ListedBooksCard;