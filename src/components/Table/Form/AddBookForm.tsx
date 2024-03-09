import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AddBookSchema } from "@/utils/validators";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

interface author {
  name: string;
  deathDate: string;
  birthDate: string;
}

function AddBookForm() {
  const form = useForm<z.infer<typeof AddBookSchema>>({
    resolver: zodResolver(AddBookSchema),
    defaultValues: {
      name: "",
      genre: "",
      publisher: "",
      publicationDate: "",
      cover: "",
      authors: [
        {
          name: "",
          lastName: "",
          birthDate: "",
          deathDate: "",
        },
      ],
    },
  });

  function validateDates(authors: author[]) {
    let valid = true;
    authors.map((author: author) => {
      if (author.deathDate !== "" && author.deathDate < author.birthDate) {
        valid = false;
      }
    });
    return valid;
  }

  function onSubmit(data: z.infer<typeof AddBookSchema>) {
    if (validateDates(data.authors)) {
      toast({
        title: "Datos enviados:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
      form.reset();
      fields.map((_, index) => {
        if (index !== 0) {
          remove(index);
        }
      });
    } else {
      alert(
        "Las fechas de muerte no pueden ser menores a las fechas de nacimiento"
      );
    }
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "authors",
  });

  const handleRemove = (index: number) => {
    remove(index);
  };

  const handleAppend = () => {
    append({ name: "", lastName: "", birthDate: "", deathDate: "" });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 max-h-[70vh] overflow-y-scroll px-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre del libro:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese el nombre del libro..."
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="genre"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Géneros</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Género del libro" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="misterio">Misterio</SelectItem>
                  <SelectItem value="ciencia ficción">
                    Ciencia ficción
                  </SelectItem>
                  <SelectItem value="romance">Romance</SelectItem>
                  <SelectItem value="terror">Terror</SelectItem>
                  <SelectItem value="accion">Acción</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cover"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Portada:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese la URL de la portada del libro..."
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="publisher"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Editorial:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese la editorial del libro..."
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="publicationDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de publicación:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese la fecha de publicación del libro..."
                  type="date"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {fields.map(({ name }, index) => (
          <div key={index} className="flex flex-col my-4 p-3 border rounded-md">
            <FormField
              control={form.control}
              name={`authors.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del autor:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingrese el nombre del autor..."
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`authors.${index}.lastName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apellido del autor:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingrese el apellido del autor..."
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`authors.${index}.birthDate`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha de nacimiento:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingrese la fecha de nacimiento del autor..."
                      type="date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`authors.${index}.deathDate`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Muerte del autor:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Ingrese la fecha de fallecimiento del autor..."
                      type="date"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {index > 0 && (
              <Button
                className="mt-2"
                type="button"
                onClick={() => handleRemove(index)}
              >
                Eliminar Campo
              </Button>
            )}
          </div>
        ))}
        <div className="grid grid-cols-2 gap-2">
          <Button type="button" onClick={handleAppend}>
            Agregar autor
          </Button>
          <Button type="submit">Guardar libro</Button>
        </div>
      </form>
    </Form>
  );
}

export default AddBookForm;
