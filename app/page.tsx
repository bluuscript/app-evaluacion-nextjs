"use client";
import { TextInput, Label, Checkbox, Button } from "flowbite-react";
import { AxiosError } from "axios";
import AlertComponent from "@/components/alert";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { FcSurvey } from "react-icons/fc";

export default function LandingPage() {
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    try {
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      res?.error
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
    <div className="relative h-screen w-screen bg-gray-50 dark:bg-gray-900">
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
            Evaluaciones
            <span className="flex flex-col items-center">
              <FcSurvey className="text-blue-400" size={100} />
            </span>
          </h1>
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Inicio de Sesión
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email" value="Correo Electrónico" />
                <TextInput
                  id="email"
                  name="email"
                  placeholder="correo@gmail.com"
                  required
                  color="blue"
                />
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
                  min={6}
                  max={6}
                />
              </div>
              <div className="flex flex-col">
                <Button type="submit" color="blue" outline>
                  Iniciar Sesión
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
