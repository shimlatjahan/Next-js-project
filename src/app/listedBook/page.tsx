
"use client";

import { useContext, useState } from "react";

import { IBook } from "@/booktypes";

import ListedBooksCard from "@/components/shared/listedBooksCard";

import { BooksContext } from "@/context/BooksProvider";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<
    "rating" | "pages" | "year"
  >("rating");

  // Check if BooksProvider is available
  if (!context) {
    return (
      <p className="text-center text-red-500 mt-10">
        BooksProvider is missing.
      </p>
    );
  }

  // Get books from context
  const {
    readBooks = [],
    wishlist = [],
  } = context;

  // Sorting function
  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort(
        (a, b) => b.rating - a.rating
      );
    } else if (sortBy === "pages") {
      sortedBooks.sort(
        (a, b) => b.totalPages - a.totalPages
      );
    } else if (sortBy === "year") {
      sortedBooks.sort(
        (a, b) =>
          b.yearOfPublishing - a.yearOfPublishing
      );
    }

    return sortedBooks;
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto py-[20px]">

      {/* Page Heading */}
      <h2 className="my-7 bg-amber-100 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h2>

      <div className="text-center">

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as
                | "rating"
                | "pages"
                | "year"
            )
          }
          className="select select-success"
        >
          <option disabled value="">
            Sort by
          </option>

          <option value="rating">
            Rating
          </option>

          <option value="year">
            Publish year
          </option>

          <option value="pages">
            Number of pages
          </option>
        </select>

      </div>

      {/* Tabs */}
      <div className="tabs tabs-lift">

        {/* Read Books Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />

        {/* Read Books Content */}
        <div className="tab-content bg-base-100 border-base-300 p-6 space-y-6">

          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                />
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No read books found
            </p>
          )}

        </div>

        {/* Wishlist Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wishlist Books (${wishlist.length})`}
          defaultChecked
        />

        {/* Wishlist Content */}
        <div className="tab-content bg-base-100 border-base-300 p-6">

          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: IBook) => {
              return (
                <ListedBooksCard
                  key={book.bookId}
                  book={book}
                />
              );
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No wishlist books found
            </p>
          )}

        </div>

      </div>
    </div>
  );
};

export default ListedBooks;