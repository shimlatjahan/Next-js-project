//  src/app/books/[id]/page.tsx

import ReadButton from "@/components/BooksDetails/ReadButton";
import WishlistButton from "@/components/BooksDetails/wishlist";
import { IBook } from "@/booktypes";
import Image from "next/image";

interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  try {
    const response = await fetch(
      "http://localhost:3000/booksData.json",
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch books data");
    }

    const data: IBook[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const BookDetailsPage = async ({
  params,
}: IBookDetailsPageProps) => {
  const { id } = await params;

  const booksData = await getBooks();

  const book = booksData.find(
    (b) => String(b.bookId) === String(id)
  );

  // Book not found
  if (!book) {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-red-500">
          Book not found
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 md:px-6 lg:py-14">

      {/* Main Card */}
      <div className="card overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-xl transition duration-300 hover:shadow-2xl lg:card-side">

        {/* Book Image */}
        <figure className="relative flex min-h-[350px] items-center justify-center bg-gradient-to-br from-slate-100 via-white to-indigo-100 p-8 sm:p-12 lg:min-h-[500px] lg:w-1/2">

          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />

          <Image
            src={book.image}
            alt={book.bookName}
            width={800}
            height={800}
            className="relative z-10 max-h-[420px] w-full object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
          />

        </figure>

        {/* Book Details */}
        <div className="card-body justify-center gap-5 p-6 sm:p-10 lg:w-1/2 lg:p-12">

          {/* Badge */}
          <div>
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
              Book Details
            </span>
          </div>

          {/* Book Name */}
          <h2 className="text-3xl font-extrabold leading-tight text-base-content sm:text-4xl">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="text-base text-base-content/70">
            <strong className="text-base-content">
              Author:
            </strong>{" "}
            {book.author}
          </p>

          {/* Book Type */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-100">
              📚 {book.bookName}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-base-200" />

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-base-content">
              About This Book
            </h3>

            <p className="text-base leading-8 text-base-content/70">
              {book.category}
            </p>
          </div>

          {/* Buttons */}
          <div className="card-actions mt-4">
            <ReadButton book={book} />
            <WishlistButton book={book} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default BookDetailsPage;