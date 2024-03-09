import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { BookProps } from "@/models/book.props";
import AddBookForm from "./Form/AddBookForm";
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
          <DialogTitle>Ingrese la informacion relevante del libro</DialogTitle>
          <DialogDescription>
            Es necesario que se asegure que la informacion del libro sea la
            correcta
          </DialogDescription>
        </DialogHeader>
        <AddBookForm />
      </DialogContent>
    </Dialog>
  );
}
export default AddBook;
