import React from "react";
import BookCard from "@/components/shared/BookCard";
import { IBook } from "@/booktypes";

interface IBookCardProps{
    book: IBook
}


const getBooks = async (): Promise<IBookCardProps[]> => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
};

const Books = async () => {
  const booksData = await getBooks();

  if (!booksData || booksData.length === 0) {
    return <p className="text-center text-red-500">No books found!</p>;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-slate-800">
          Discover Your Favorite Books
        </h1>
        <p className="mt-3 text-slate-500">
          Explore our collection of All books.
        </p>
      </div>

      {/* Books Grid */}
     <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {booksData.map((book:IBookCardProps) => (
    <BookCard key={book.bookId} book={book} />
  ))}
</div>

    </section>
  );
};

export default Books;
