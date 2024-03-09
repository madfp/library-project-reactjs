import LoginForm from "./Form/LoginForm";

import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";

function Login() {
  return (
    <section className="bg-[url(/MysticalLibrary.webp)] bg-cover bg-center w-full h-[100vh]">
      <Card className="mx-auto mt-28 w-[90%] lg:w-[35%]">
        <CardHeader className="flex flex-col ">
          <CardTitle className="text-3xl font-black">Ingresar</CardTitle>
        </CardHeader>
        <CardContent className="mb-4">
          <LoginForm />
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
