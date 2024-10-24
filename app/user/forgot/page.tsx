"use client";
import { TextInput, Label, Button } from "flowbite-react";
import { IoHome } from "react-icons/io5";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import AlertComponent from "@/components/alert";

export default function ForgotPage() {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    try {
      const response: any = await axios.post("../../api/auth/forgot", {
        email: formData.get("email"),
      });
      console.log(formData.get("email"));
      return router.push("/user/login");
      response?.message
        ? (setError(true),
          currentTarget.reset(),
          setTimeout(() => {
            setError(false);
          }, 3000))
        : router.push("/inicio");
    } catch (error) {
      error instanceof AxiosError
        ? (setError(true),
          currentTarget.reset(),
          setTimeout(() => {
            setError(false);
          }, 3000))
        : (setError(true),
          currentTarget.reset(),
          setTimeout(() => {
            setError(false);
          }, 3000));
    }
  };

  return (
    <section className="relative bg-gray-50 dark:bg-gray-900">
      {error && (
        <AlertComponent typeAlert="failure" message="Usuario no existe" />
      )}
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <h1 className="text-center text-3xl font-semibold">
            ContaCasa
            <span className="flex flex-col items-center">
              <IoHome className="text-yellow-400" />
            </span>
          </h1>
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Recuperar Contraseña
              <p className="text-start text-sm font-light text-gray-500 dark:text-gray-400">
                Te enviaremos un correo con una contraseña temporal, que más
                tarde puedes cambiar en configuración de la plataforma.
              </p>
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Label htmlFor="email" value="Correo Electrónico" />
                <TextInput
                  id="email"
                  name="email"
                  placeholder="correo@gmail.com"
                  required
                  color={"warning"}
                />
              </div>
              <div className="flex items-center justify-end">
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Ya tienes cuenta?
                  <a
                    href="/user/login"
                    className="ms-2 font-medium text-yellow-400 hover:text-yellow-500 hover:underline dark:text-yellow-500 dark:hover:text-yellow-600"
                  >
                    Iniciar Sesión
                  </a>
                </p>
              </div>
              <div className="flex flex-col">
                <Button type="submit" color={"warning"} outline>
                  Enviar
                </Button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Todavía no tienes cuenta?
                <a
                  href="/user/signup"
                  className="ms-2 font-medium text-yellow-400 hover:text-yellow-500 hover:underline dark:text-yellow-500 dark:hover:text-yellow-600"
                >
                  Registrarme
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
