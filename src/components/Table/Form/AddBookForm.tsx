import { useForm, useFieldArray } from "react-hook-form";
import { FormValues } from "@/models/add.book.props";

function AddBookForm() {
  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      publisher: "",
      genre: "",
      publicationDate: "",
      authors: [
        {
          name: "",
          lastName: "",
          birthDate: "",
          deathDate: "",
        },
      ],
      cover: "",
    },
  });
  return <div>AddBookForm</div>;
}
export default AddBookForm;
