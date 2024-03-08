import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useParams } from "react-router-dom";

function Book() {
  {
    /* 
      Obtener por medio del id del libro,  
      la iformacion del libro y los comentarios
    */
  }
  const { NombreLibro } = useParams();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-8 mt-8">
      <Card className="">
        <CardHeader>
          <img
            src="/BookCover.webp"
            alt="Book cover"
            className="w-[80%] mx-auto rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <h1 className="text-xl font-black">Book id:{NombreLibro}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum,
            cupiditate quos sunt ullam accusantium doloribus impedit minus
            culpa, voluptatem laboriosam aspernatur. Saepe eius consequatur
            praesentium, esse cum nam mollitia expedita!
          </p>
        </CardContent>
        <CardFooter>
          <span className="mx-auto text-xl font-black">
            Informacion adicional del libro
          </span>
        </CardFooter>
      </Card>
      <div className="space-y-8">
        <div>
          <h2>Comentario 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo
            minus excepturi quas iste amet, molestiae modi. Laborum perferendis
            rerum incidunt quod, ratione repudiandae possimus fuga nemo atque
            magni aliquid.
          </p>
        </div>
        <div>
          <h2>Comentario 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo
            minus excepturi quas iste amet, molestiae modi. Laborum perferendis
            rerum incidunt quod, ratione repudiandae possimus fuga nemo atque
            magni aliquid.
          </p>
        </div>
        <div>
          <h2>Comentario 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nemo
            minus excepturi quas iste amet, molestiae modi. Laborum perferendis
            rerum incidunt quod, ratione repudiandae possimus fuga nemo atque
            magni aliquid.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Book;
