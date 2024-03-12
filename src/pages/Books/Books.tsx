import { useState } from "react";
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { booksData } from "@/utils/static";
import { BookProps } from "@/models/book.props";

function PublishedBooks() {
  const [books] = useState<BookProps[]>(booksData);
  const [filterValue, setFilterValue] = useState("");

  const searchedBooks = books.filter((book) => {
    return book.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <>
      <section className="flex relative lg:static pt-16 flex-col items-center justify-center gap-3 lg:mb-0">
        {/* Desktop filter section*/}
        <div className="pt-2 pb-4 lg:pt-5 w-full fixed top-12 bg-white flex justify-center gap-2 px-4 lg:px-0">
          <Input
            value={filterValue}
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
            type="text"
            placeholder="Nombre del libro..."
            className="lg:max-w-[30%]"
          />
        </div>
        <div
          className={`px-8 grid place-items-center gap-8 grid-cols-1 ${
            searchedBooks.length > 0
              ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : ""
          }`}
        >
          {searchedBooks.length > 0 ? (
            searchedBooks.map((book) => (
              <BookCard
                id={book.id}
                name={book.name}
                genre={book.genre}
                key={book.name}
                coverPhoto=""
                author={book.author}
                publisher={book.publisher}
              />
            ))
          ) : (
            <div className="mt-32 text-center">
              <h2 className="text-2xl font-bold text-center">
                No se encontraron libros
              </h2>
              <p>
                No se encontraron libros con el nombre ingresado, por favor
                intente con otro nombre.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
export default PublishedBooks;
