import { z } from "zod";
/* Login form schema */
export const LoginSchema = z.object({
  email: z
    .string()
    .email({ message: "Correo incorrecto" })
    .refine(
      (val) =>
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          val
        ),
      { message: "Formato incorrecto" }
    ),
  password: z.string().min(8, { message: "Contraseña inválida" }),
});
/* Register form schema */
export const RegisterSchema = z
  .object({
    name: z.string().min(3, { message: "Ingrese un nombre válido" }),
    lastName: z.string().min(5, { message: "Ingrese un apellido válido" }),
    email: z
      .string()
      .email({ message: "Correo inválido" })
      .refine(
        (val) =>
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            val
          ),
        { message: "Formato incorrecto" }
      ),
    password: z
      .string()
      .min(8, { message: "La contraseña debe contener al menos 8 carácteres" }),
    confirmPassword: z
      .string()
      .min(8, { message: "La contraseña debe contener al menos 8 carácteres" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Las contraseñas deben de ser iguales",
        path: ["confirmPassword"],
      });
    }
  });

/* Filter form schema */
export const FilterSchema = z.object({
  filter: z.string().min(3, { message: "Ingrese al menos 3 carácteres" }),
  filterOptions: z.string().refine((value) => value !== "", {
    message: "Por favor, seleccione una opción",
  }),
});

export const authorSchema = z.object({
  name: z.string().min(3, { message: "Ingrese un nombre válido" }),
  lastName: z.string().min(5, { message: "Ingrese un apellido válido" }),
  birthDate: z.string().refine((val) => val !== "", {
    message: "Ingrese una fecha válida",
  }),
  deathDate: z.string(),
});

export const AddBookSchema = z.object({
  name: z.string().min(3, { message: "Ingrese un nombre válido" }),
  publisher: z.string().min(3, { message: "Ingrese una editorial válida" }),
  publicationDate: z.string().refine((val) => val !== "", {
    message: "Ingrese una fecha válida",
  }),
  genre: z.string().min(3, { message: "Seleccione el género" }),
  cover: z.string().refine((val) => val !== "", {
    message: "Ingrese una URL válida",
  }),
  authors: z
    .array(authorSchema)
    .min(1, { message: "Ingrese al menos un autor" }),
});
