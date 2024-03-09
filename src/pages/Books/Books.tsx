import { SetStateAction, useState } from "react";
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { booksData } from "@/utils/static";
import { BookProps } from "@/models/book.props";

function PublishedBooks() {
  const [books] = useState<BookProps[]>(booksData);
  const [filterValue, setFilterValue] = useState("");
  const [filterOptions, setFilterOptions] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleFilterChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterValue(e.target.value);
  };

  const handleFilterOptions = (value: string) => {
    setFilterOptions(value);
  };

  const filterBooks = (filter: string, filterOptions: string) => {
    console.log(`name:${filter} - filterOption:${filterOptions}`);
  };

  return (
    <>
      <section className="flex relative lg:static pt-16 flex-col items-center justify-center gap-3 lg:mb-0">
        {/* Desktop filter section*/}
        <div className="pt-2 pb-4 lg:pt-5 w-full fixed top-12 bg-white flex justify-center gap-2 px-4 lg:px-0">
          <Input
            value={filterValue}
            onChange={handleFilterChange}
            type="text"
            placeholder="Ingrese el valor de búsqueda..."
            className="lg:max-w-[40%]"
          />
          <Select onValueChange={(value) => handleFilterOptions(value)}>
            <SelectTrigger className="w-[40%] lg:w-[180px]">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Nombre</SelectItem>
              <SelectItem value="author">Autor</SelectItem>
              <SelectItem value="publisher">Editorial</SelectItem>
              <SelectItem value="genre">Genero</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="px-8 grid place-items-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks.length == 0 &&
            books.map((book) => (
              <BookCard
                id={book.id}
                name={book.name}
                genre={book.genre}
                key={book.name}
                coverPhoto=""
                author={book.author}
                publisher={book.publisher}
              />
            ))}
        </div>
      </section>
    </>
  );
}
export default PublishedBooks;
