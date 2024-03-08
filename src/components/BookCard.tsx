import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookProps } from "@/models/book.props";

function BookCard({
  name,
  cover,
  id,
  genre,
  publisher,
  author,
}: BookCardProps) {
  return (
    <Card className="p-2 lg:p-4 w-[300px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <img
          alt="Card background"
          className="object-cover object-center mb-4 rounded-xl"
          src="/BookCover.webp"
          width={300}
        />
        <CardTitle className="max-w-[90%] text-lg whitespace-nowrap overflow-hidden text-ellipsis">
          {name}
        </CardTitle>
        <CardDescription>{genre}</CardDescription>
      </CardHeader>
      <CardContent className="overflow-visible py-2">{}</CardContent>
      <CardFooter>
        <Link
          to={`/libros/${id}`}
          className="py-2 w-full text-center mx-auto bg-blue-400 text-white rounded-lg"
        >
          Ver más
        </Link>
      </CardFooter>
    </Card>
  );
}
export default BookCard;
