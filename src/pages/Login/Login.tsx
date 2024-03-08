import LoginForm from "./Form/LoginForm";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

function Login() {
  return (
    <section className="bg-[url(/MysticalLibrary.webp)] bg-cover bg-center w-full h-[100vh]">
      <Card className="mx-auto mt-20 w-[90%] lg:w-[35%] bg-opacity-90">
        <CardHeader className="flex flex-col ">
          <h1 className="text-3xl font-black mb-2">Ingresar</h1>
        </CardHeader>
        <CardContent className="mb-4">
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
