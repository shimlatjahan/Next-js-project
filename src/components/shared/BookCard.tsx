"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookCard = ({ book }) => {
  if (!book) return null; // ✅ extra safety

  return (
    <div
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-slate-100 sm:h-80">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-600 shadow-sm">
          {book.category}
        </span>

        {/* Rating */}
        <div className="absolute right-4 top-4 rounded-full bg-slate-900/85 px-3 py-1 text-sm font-semibold text-white">
          <span className="text-yellow-400">★</span> {book.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="line-clamp-2 text-xl font-bold text-slate-800">
          {book.bookName}
        </h2>
        <p className="mt-2 text-sm text-slate-500">By {book.author}</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-indigo-50 px-2 py-1 text-xs text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <div className="mt-4 flex justify-between border-y border-slate-100 py-4">
          <div>
            <p className="text-xs text-slate-400">Pages</p>
            <p className="font-semibold text-slate-700">{book.totalPages}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400">Published</p>
            <p className="font-semibold text-slate-700">{book.yearOfPublishing}</p>
          </div>
        </div>

        {/* Button */}
        <Link href={`/books/${book.bookId}`}><button className="mt-5 w-full rounded-xl bg-indigo-600
         py-3 font-semibold text-white transition hover:bg-indigo-700">
          View Details →
        </button></Link>
      </div>
    </div>
  );
};

export default BookCard;
