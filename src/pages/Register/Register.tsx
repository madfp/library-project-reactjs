import RegisterForm from "./Form/RegisterForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
function Register() {
  return (
    <section className="bg-[url(/FantasyLibrary.webp)] bg-cover bg-center w-full pb-4">
      <Card className="mx-auto mt-12 w-[90%] lg:w-[35%] bg-opacity-90">
        <CardHeader className="flex flex-col ">
          <h1 className="text-3xl font-black mb-2">Registrarme</h1>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
