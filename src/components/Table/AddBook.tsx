import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookProps } from "@/models/book.props";

function AddBook({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<BookProps[]>>;
}) {
  return (
    <Dialog>
      <DialogTrigger className="bg-black text-white py-2 px-4 rounded">
        Nuevo
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ingrese la inforacion relevante del libro</DialogTitle>
          <DialogDescription>
            Es necesario que se asegure que la informacion del libro sea la
            correcta
          </DialogDescription>
        </DialogHeader>
        {/* nombre */}
        {/* autores - nombre - apellido - nacimiento- fallecimiento*/}
        {/* Genero */}
        {/* fecha de publicacion */}
        {/* Imagen del libro */}
        {/* Editorial */}
      </DialogContent>
    </Dialog>
  );
}
export default AddBook;
