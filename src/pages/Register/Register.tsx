import RegisterForm from "./Form/RegisterForm";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
function Register() {
  return (
    <section className="bg-[url(/FantasyLibrary.webp)] bg-cover bg-center w-full pb-4">
      <Card className="mx-auto mt-12 w-[90%] lg:w-[35%]">
        <CardHeader className="flex flex-col ">
          <CardTitle className="text-3xl font-black">Registrarme</CardTitle>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </section>
  );
}
export default Register;
