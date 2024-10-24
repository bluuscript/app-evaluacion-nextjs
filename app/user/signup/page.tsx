"use client";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { TextInput, Label, Select, Button } from "flowbite-react";
import AlertComponent from "@/components/alert";
import { FcSurvey } from "react-icons/fc";

export default function SignUpPage() {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    try {
      const res = await axios.post("/api/auth/signup", {
        fullname: formData.get("fullname"),
        email: formData.get("email"),
        rol: formData.get("rolUsuario"),
        password: formData.get("password"),
      });
      router.push("/");
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
    <section className="bg-gray-50 dark:bg-gray-900">
      {error && (
        <AlertComponent
          typeAlert="failure"
          message="Contraseña y/o usuario incorrecta"
        />
      )}
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <h1 className="text-center text-3xl font-semibold">
            Encuestas
            <span className="flex flex-col items-center">
              <FcSurvey className="text-blue-400" size={100} />
            </span>
          </h1>
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Registrarse
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="fullname" value="Nombre Completo" />
                <TextInput
                  id="fullname"
                  name="fullname"
                  placeholder="Juan Vargas"
                  required
                  color="blue"
                />
              </div>
              <div>
                <Label htmlFor="email" value="Correo Electrónico" />
                <TextInput
                  id="email"
                  name="email"
                  placeholder="juan.vargas@gmail.com"
                  required
                  color="blue"
                />
              </div>
              <div>
                <Label htmlFor="rolUsuario" value="Rol" />
                <Select id="rolUsuario" name="rolUsuario" required color="blue">
                  <option value="">Seleccionar</option>
                  <option value="Usuario">Usuario</option>
                  <option value="Administrador">Administrador</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="password" value="Contraseña" />
                <TextInput
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  color="blue"
                />
              </div>

              <div className="flex items-center justify-end">
                <a
                  href="/user/forgot"
                  className="text-sm font-medium text-blue-400 hover:text-blue-500 hover:underline dark:text-blue-500 dark:hover:text-blue-600"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <div className="flex flex-col">
                <Button type="submit" color="blue" outline>
                  Registrarme
                </Button>
              </div>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                ¿Ya tienes cuenta?
                <a
                  href="/"
                  className="ms-2 font-medium text-blue-400 hover:text-blue-500 hover:underline dark:text-blue-500 dark:hover:text-blue-600"
                >
                  Iniciar Sesión
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
