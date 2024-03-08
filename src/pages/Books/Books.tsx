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
    console.log(filter, filterOptions);
  };

  return (
    <>
      <section className="relative flex flex-col items-center justify-center gap-3 mb-40 lg:mb-0">
        <div className="w-full flex flex-wrap justify-center gap-2">
          <Input
            value={filterValue}
            onChange={handleFilterChange}
            type="text"
            placeholder="Filtrar por nombre o autor del libro..."
            className="lg:max-w-[40%]"
          />
          <Select onValueChange={(value) => handleFilterOptions(value)}>
            <SelectTrigger className="w-[85%] lg:w-[180px]">
              <SelectValue placeholder="Filtros de busqueda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Nombre</SelectItem>
              <SelectItem value="author">Autor</SelectItem>
              <SelectItem value="publisher">Editorial</SelectItem>
              <SelectItem value="genre">Genero</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => filterBooks(filterValue, filterOptions)}>
            Buscar
          </Button>
        </div>
        <div className="lg:mt-8 px-4 sm:px-8">
          <div className="grid place-items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
            {filteredBooks.length > 0 &&
              books.map((book) => (
                <BookCard
                  id={book.id}
                  name={book.name}
                  genre={book.genre}
                  key={book.title}
                  coverPhoto=""
                  author={book.author}
                  publisher={book.publisher}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default PublishedBooks;
