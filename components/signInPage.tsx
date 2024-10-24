"use client";
import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center dark:bg-gray-900 dark:text-white">
      <h2 className="mb-5 text-center text-xl font-semibold">
        Al parecer no has iniciado sesión
      </h2>
      <Button
        gradientDuoTone="purpleToBlue"
        size={"xl"}
        onClick={() => signIn()}
      >
        Iniciar Sesión
      </Button>
    </main>
  );
}
