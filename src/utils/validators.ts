import { z } from "zod";

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

export const FilterSchema = z.object({
  filter: z.string().min(3, { message: "Ingrese al menos 3 carácteres" }),
  filterOptions: z.string().refine((value) => value !== "", {
    message: "Por favor, seleccione una opción",
  }),
});
