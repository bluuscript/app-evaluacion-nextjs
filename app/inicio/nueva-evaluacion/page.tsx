"use client";
import { SideBar, SidebarItem } from "@/components/sidebar";
import { FaHome } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { RiSurveyLine, RiSurveyFill } from "react-icons/ri";
import { useSession, signOut } from "next-auth/react";
import { UserSession } from "@/lib/types";
import SignInPage from "@/components/signInPage";
import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Label, Datepicker, Select, TextInput, Button } from "flowbite-react";

export default function InicioPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = useState<boolean>(false);

  const user: UserSession = session?.user as UserSession;
  const userId = user && user._id;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    const opciones1 = formData.get("opciones1") as any;
    const opcionesEncuesta1 = opciones1
      ? opciones1.split(",") || opciones1.spli(", ")
      : [];
    const opciones2 = formData.get("opciones2") as any;
    const opcionesEncuesta2 = opciones2
      ? opciones2.split(",") || opciones2.split(", ")
      : [];
    const opciones3 = formData.get("opciones3") as any;
    const opcionesEncuesta3 = opciones3
      ? opciones3.split(", ") || opciones3.split(", ")
      : [];
    const opciones4 = formData.get("opciones4") as any;
    const opcionesEncuesta4 = opciones4 ? opciones4.split(", ") : [];
    const opciones5 = formData.get("opciones5") as any;
    const opcionesEncuesta5 = opciones5 ? opciones5.split(", ") : [];
    const opciones6 = formData.get("opciones6") as any;
    const opcionesEncuesta6 = opciones6 ? opciones6.split(", ") : [];
    const opciones7 = formData.get("opciones7") as any;
    const opcionesEncuesta7 = opciones7 ? opciones7.split(", ") : [];
    const opciones8 = formData.get("opciones8") as any;
    const opcionesEncuesta8 = opciones8 ? opciones8.split(", ") : [];
    const opciones9 = formData.get("opciones9") as any;
    const opcionesEncuesta9 = opciones9 ? opciones9.split(", ") : [];
    const opciones10 = formData.get("opciones10") as any;
    const opcionesEncuesta10 = opciones10 ? opciones10.split(", ") : [];
    const opciones11 = formData.get("opciones11") as any;
    const opcionesEncuesta11 = opciones11 ? opciones11.split(", ") : [];
    const opciones12 = formData.get("opciones12") as any;
    const opcionesEncuesta12 = opciones12 ? opciones12.split(", ") : [];
    const opciones13 = formData.get("opciones13") as any;
    const opcionesEncuesta13 = opciones13 ? opciones13.split(", ") : [];
    const opciones14 = formData.get("opciones14") as any;
    const opcionesEncuesta14 = opciones14 ? opciones14.split(", ") : [];
    const opciones15 = formData.get("opciones15") as any;
    const opcionesEncuesta15 = opciones15 ? opciones15.split(", ") : [];
    const opciones16 = formData.get("opciones16") as any;
    const opcionesEncuesta16 = opciones16 ? opciones16.split(", ") : [];
    const opciones17 = formData.get("opciones17") as any;
    const opcionesEncuesta17 = opciones17 ? opciones17.split(", ") : [];
    const opciones18 = formData.get("opciones18") as any;
    const opcionesEncuesta18 = opciones18
      ? opciones18.split(", ") || opciones18.split(",")
      : [];
    const opciones19 = formData.get("opciones19") as any;
    const opcionesEncuesta19 = opciones19 ? opciones19.split(",") : [];
    const opciones20 = formData.get("opciones20") as any;
    const opcionesEncuesta20 = opciones20 ? opciones20.split(",") : [];

    try {
      const response = await axios.post("../../api/auth/nueva-evaluacion", {
        userId: formData.get("userId"),
        nombreEncuesta: formData.get("nombreEncuesta"),
        fechaInicio: formData.get("fechaInicio"),
        fechaTermino: formData.get("fechaTermino"),
        fechaCreacion: new Date(),
        fechaContestada: null,
        encuestaContestada: false,
        pregunta1: {
          id: "pregunta1",
          pregunta: formData.get("pregunta1"),
          opciones: opcionesEncuesta1,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta1"),
          puntaje: formData.get("puntaje1"),
          correcta: false,
        },
        pregunta2: {
          id: "pregunta2",
          pregunta: formData.get("pregunta2"),
          opciones: opcionesEncuesta2,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta2"),
          puntaje: formData.get("puntaje2"),
          correcta: false,
        },
        pregunta3: {
          id: "pregunta3",
          pregunta: formData.get("pregunta3"),
          opciones: opcionesEncuesta3,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta3"),
          puntaje: formData.get("puntaje3"),
          correcta: false,
        },
        pregunta4: {
          id: "pregunta4",
          pregunta: formData.get("pregunta4"),
          opciones: opcionesEncuesta4,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta4"),
          puntaje: formData.get("puntaje4"),
          correcta: false,
        },
        pregunta5: {
          id: "pregunta5",
          pregunta: formData.get("pregunta5"),
          opciones: opcionesEncuesta5,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta5"),
          puntaje: formData.get("puntaje5"),
          correcta: false,
        },
        pregunta6: {
          id: "pregunta6",
          pregunta: formData.get("pregunta6"),
          opciones: opcionesEncuesta6,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta6"),
          puntaje: formData.get("puntaje6"),
          correcta: false,
        },
        pregunta7: {
          id: "pregunta7",
          pregunta: formData.get("pregunta7"),
          opciones: opcionesEncuesta7,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta7"),
          puntaje: formData.get("puntaje7"),
          correcta: false,
        },
        pregunta8: {
          id: "pregunta8",
          pregunta: formData.get("pregunta8"),
          opciones: opcionesEncuesta8,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta8"),
          puntaje: formData.get("puntaje8"),
          correcta: false,
        },
        pregunta9: {
          id: "pregunta9",
          pregunta: formData.get("pregunta9"),
          opciones: opcionesEncuesta9,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta9"),
          puntaje: formData.get("puntaje9"),
          correcta: false,
        },
        pregunta10: {
          id: "pregunta10",
          pregunta: formData.get("pregunta10"),
          opciones: opcionesEncuesta10,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta10"),
          puntaje: formData.get("puntaje10"),
          correcta: false,
        },
        pregunta11: {
          id: "pregunta11",
          pregunta: formData.get("pregunta11"),
          opciones: opcionesEncuesta11,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta11"),
          puntaje: formData.get("puntaje11"),
          correcta: false,
        },
        pregunta12: {
          id: "pregunta12",
          pregunta: formData.get("pregunta12"),
          opciones: opcionesEncuesta12,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta12"),
          puntaje: formData.get("puntaje12"),
          correcta: false,
        },
        pregunta13: {
          id: "pregunta13",
          pregunta: formData.get("pregunta13"),
          opciones: opcionesEncuesta13,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta13"),
          puntaje: formData.get("puntaje13"),
          correcta: false,
        },
        pregunta14: {
          id: "pregunta14",
          pregunta: formData.get("pregunta14"),
          opciones: opcionesEncuesta14,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta14"),
          puntaje: formData.get("puntaje14"),
          correcta: false,
        },
        pregunta15: {
          id: "pregunta15",
          pregunta: formData.get("pregunta15"),
          opciones: opcionesEncuesta15,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta15"),
          puntaje: formData.get("puntaje15"),
          correcta: false,
        },
        pregunta16: {
          id: "pregunta16",
          pregunta: formData.get("pregunta16"),
          opciones: opcionesEncuesta16,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta16"),
          puntaje: formData.get("puntaje16"),
          correcta: false,
        },
        pregunta17: {
          id: "pregunta17",
          pregunta: formData.get("pregunta17"),
          opciones: opcionesEncuesta17,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta17"),
          puntaje: formData.get("puntaje17"),
          correcta: false,
        },
        pregunta18: {
          id: "pregunta18",
          pregunta: formData.get("pregunta18"),
          tipo: formData.get("tipoRespuesta18"),
          opciones: opcionesEncuesta18,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta18"),
          puntaje: formData.get("puntaje18"),
          correcta: false,
        },
        pregunta19: {
          id: "pregunta19",
          pregunta: formData.get("pregunta19"),
          opciones: opcionesEncuesta19,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta19"),
          puntaje: formData.get("puntaje19"),
          correcta: false,
        },
        pregunta20: {
          id: "pregunta20",
          pregunta: formData.get("pregunta20"),
          opciones: opcionesEncuesta20,
          respuesta: "",
          respuestaCorrecta: formData.get("respuestaCorrecta20"),
          puntaje: formData.get("puntaje20"),
          correcta: false,
        },
      });
      return router.push("/inicio/mis-evaluaciones");
    } catch (error) {
      if (error) {
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
    }
  };

  if (session)
    return (
      <main className="h-screen w-screen overflow-auto dark:bg-slate-900">
        <SideBar fullname={user.fullname} rol={user.rol} email={user.email}>
          <SidebarItem
            icon={<FaHome size={20} />}
            text="Inicio"
            location="/inicio"
          />
          <SidebarItem
            icon={<RiSurveyLine size={20} />}
            text="Nueva Evaluación"
            location="/inicio/nueva-evaluacion"
            active
          />
          <SidebarItem
            icon={<RiSurveyFill size={20} />}
            text="Mis Evaluaciones"
            location="/inicio/mis-evaluaciones"
          />
          <SidebarItem
            icon={<VscSignOut />}
            text="Cerrar Sesión"
            location="#"
            onClick={() => signOut()}
          />
        </SideBar>
        <div className="flex flex-col items-center">
          <h2 className="m-6 text-center text-4xl font-semibold dark:text-white">
            Nueva Evaluación
          </h2>
          <form
            className="mb-6 flex w-[500px] flex-col rounded border p-10 shadow"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <Label htmlFor="nombreEncuesta" value="Nombre Encuesta" />
              <TextInput
                id="nombreEncuesta"
                name="nombreEncuesta"
                color="blue"
                placeholder="Evaluación de Prueba"
                required
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="fechaInicio" value="Fecha Inicio" />
              <Datepicker
                id="fechaInicio"
                name="fechaInicio"
                color="blue"
                required
              />
            </div>
            <div className="mb-3">
              <Label htmlFor="fechaTermino" value="Fecha Termino" />
              <Datepicker
                id="fechaTermino"
                name="fechaTermino"
                color="blue"
                required
              />
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta1" value="Pregunta Nº 1" />
                <TextInput
                  id="pregunta1"
                  name="pregunta1"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                  required
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones1" value="Opciones" />
                <TextInput
                  id="opciones1"
                  name="opciones1"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                  required
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta1"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta1"
                  name="respuestaCorrecta1"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                  required
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje1" value="Puntaje" />
                <TextInput
                  id="puntaje1"
                  name="puntaje1"
                  type="number"
                  placeholder="Ej.: 1"
                  color="blue"
                  required
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta2" value="Pregunta Nº 2" />
                <TextInput
                  id="pregunta2"
                  name="pregunta2"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones2" value="Opciones" />
                <TextInput
                  id="opciones2"
                  name="opciones2"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta2"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta2"
                  name="respuestaCorrecta2"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje2" value="Puntaje" />
                <TextInput
                  id="puntaje2"
                  name="puntaje2"
                  type="number"
                  placeholder="Ej.: 2"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta3" value="Pregunta Nº 3" />
                <TextInput
                  id="pregunta3"
                  name="pregunta3"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones3" value="Opciones" />
                <TextInput
                  id="opciones3"
                  name="opciones3"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta3"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta3"
                  name="respuestaCorrecta3"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje3" value="Puntaje" />
                <TextInput
                  id="puntaje3"
                  name="puntaje3"
                  type="number"
                  placeholder="Ej.: 3"
                  color="blue"
                />
              </div>
            </div>
            {/* TODO                                            
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta4" value="Pregunta Nº 4" />
                <TextInput
                  id="pregunta4"
                  name="pregunta4"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones4" value="Opciones" />
                <TextInput
                  id="opciones4"
                  name="opciones4"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="respuestaCorrect4" value="Respuesta Correcta" />
                <TextInput
                  id="respuestaCorrecta4"
                  name="respuestaCorrecta4"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje4" value="Puntaje" />
                <TextInput
                  id="puntaje4"
                  name="puntaje4"
                  type="number"
                  placeholder="Ej.: 4"
                  color="blue"
                />
              </div>
            </div>
             <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta5" value="Pregunta Nº 5" />
                <TextInput
                  id="pregunta5"
                  name="pregunta5"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones5" value="Opciones" />
                <TextInput
                  id="opciones5"
                  name="opciones5"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta1"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta5"
                  name="respuestaCorrecta5"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje5" value="Puntaje" />
                <TextInput
                  id="puntaje5"
                  name="puntaje5"
                  type="number"
                  placeholder="Ej.: 5"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta6" value="Pregunta Nº 6" />
                <TextInput
                  id="pregunta6"
                  name="pregunta6"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones6" value="Opciones" />
                <TextInput
                  id="opciones6"
                  name="opciones6"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta6"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta6"
                  name="respuestaCorrecta6"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje6" value="Puntaje" />
                <TextInput
                  id="puntaje6"
                  name="puntaje6"
                  type="number"
                  placeholder="Ej.: 6"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta7" value="Pregunta Nº 7" />
                <TextInput
                  id="pregunta7"
                  name="pregunta7"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones7" value="Opciones" />
                <TextInput
                  id="opciones7"
                  name="opciones7"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta7"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta7"
                  name="respuestaCorrecta7"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje7" value="Puntaje" />
                <TextInput
                  id="puntaje7"
                  name="puntaje7"
                  type="number"
                  placeholder="Ej.: 7"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta8" value="Pregunta Nº 8" />
                <TextInput
                  id="pregunta8"
                  name="pregunta8"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones8" value="Opciones" />
                <TextInput
                  id="opciones8"
                  name="opciones8"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta8"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta8"
                  name="respuestaCorrecta8"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje8" value="Puntaje" />
                <TextInput
                  id="puntaje8"
                  name="puntaje8"
                  type="number"
                  placeholder="Ej.: 8"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta9" value="Pregunta Nº 9" />
                <TextInput
                  id="pregunta9"
                  name="pregunta9"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones9" value="Opciones" />
                <TextInput
                  id="opciones9"
                  name="opciones9"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta9"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta9"
                  name="respuestaCorrecta9"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje9" value="Puntaje" />
                <TextInput
                  id="puntaje9"
                  name="puntaje9"
                  type="number"
                  placeholder="Ej.: 9"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta10" value="Pregunta Nº 10" />
                <TextInput
                  id="pregunta10"
                  name="pregunta10"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones10" value="Opciones" />
                <TextInput
                  id="opciones10"
                  name="opciones10"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta10"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta10"
                  name="respuestaCorrecta10"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje10" value="Puntaje" />
                <TextInput
                  id="puntaje10"
                  name="puntaje10"
                  type="number"
                  placeholder="Ej.: 10"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta11" value="Pregunta Nº 11" />
                <TextInput
                  id="pregunta11"
                  name="pregunta11"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones11" value="Opciones" />
                <TextInput
                  id="opciones11"
                  name="opciones11"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta8"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta11"
                  name="respuestaCorrecta11"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje11" value="Puntaje" />
                <TextInput
                  id="puntaje11"
                  name="puntaje11"
                  type="number"
                  placeholder="Ej.: 11"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta12" value="Pregunta Nº 12" />
                <TextInput
                  id="pregunta12"
                  name="pregunta12"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones12" value="Opciones" />
                <TextInput
                  id="opciones12"
                  name="opciones12"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta12"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta12"
                  name="respuestaCorrecta12"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje12" value="Puntaje" />
                <TextInput
                  id="puntaje12"
                  name="puntaje12"
                  type="number"
                  placeholder="Ej.: 12"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta13" value="Pregunta Nº 13" />
                <TextInput
                  id="pregunta13"
                  name="pregunta13"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones13" value="Opciones" />
                <TextInput
                  id="opciones13"
                  name="opciones13"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta13"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta13"
                  name="respuestaCorrecta13"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje13" value="Puntaje" />
                <TextInput
                  id="puntaje13"
                  name="puntaje13"
                  type="number"
                  placeholder="Ej.: 13"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta14" value="Pregunta Nº 14" />
                <TextInput
                  id="pregunta14"
                  name="pregunta14"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones14" value="Opciones" />
                <TextInput
                  id="opciones14"
                  name="opciones14"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta14"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta14"
                  name="respuestaCorrecta14"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje14" value="Puntaje" />
                <TextInput
                  id="puntaje14"
                  name="puntaje14"
                  type="number"
                  placeholder="Ej.: 14"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta15" value="Pregunta Nº 15" />
                <TextInput
                  id="pregunta15"
                  name="pregunta15"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones15" value="Opciones" />
                <TextInput
                  id="opciones15"
                  name="opciones15"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta15"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta15"
                  name="respuestaCorrecta15"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje15" value="Puntaje" />
                <TextInput
                  id="puntaje15"
                  name="puntaje15"
                  type="number"
                  placeholder="Ej.: 15"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta16" value="Pregunta Nº 16" />
                <TextInput
                  id="pregunta16"
                  name="pregunta16"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones16" value="Opciones" />
                <TextInput
                  id="opciones16"
                  name="opciones16"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta8"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta16"
                  name="respuestaCorrecta16"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje16" value="Puntaje" />
                <TextInput
                  id="puntaje16"
                  name="puntaje16"
                  type="number"
                  placeholder="Ej.: 16"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta17" value="Pregunta Nº 17" />
                <TextInput
                  id="pregunta17"
                  name="pregunta17"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones17" value="Opciones" />
                <TextInput
                  id="opciones17"
                  name="opciones17"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta17"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta17"
                  name="respuestaCorrecta17"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje17" value="Puntaje" />
                <TextInput
                  id="puntaje17"
                  name="puntaje17"
                  type="number"
                  placeholder="Ej.: 17"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta18" value="Pregunta Nº 18" />
                <TextInput
                  id="pregunta18"
                  name="pregunta18"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="tipoRespuesta18" value="Tipo de Respuesta" />
                <Select
                  id="tipoRespuesta18"
                  name="tipoRespuesta18"
                  color="blue"
                >
                  <option value="">Seleccionar</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                  <option value="textarea">Textarea</option>
                </Select>
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones18" value="Opciones" />
                <TextInput
                  id="opciones18"
                  name="opciones18"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta18"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta18"
                  name="respuestaCorrecta18"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje18" value="Puntaje" />
                <TextInput
                  id="puntaje18"
                  name="puntaje18"
                  type="number"
                  placeholder="Ej.: 18"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border bg-blue-400 p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta19" value="Pregunta Nº 19" />
                <TextInput
                  id="pregunta19"
                  name="pregunta19"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones19" value="Opciones" />
                <TextInput
                  id="opciones19"
                  name="opciones19"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrect19"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta19"
                  name="respuestaCorrecta19"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje19" value="Puntaje" />
                <TextInput
                  id="puntaje19"
                  name="puntaje19"
                  type="number"
                  placeholder="Ej.: 19"
                  color="blue"
                />
              </div>
            </div>
            <div className="mb-6 rounded border p-10 shadow-xl">
              <div className="mb-3">
                <Label htmlFor="pregunta20" value="Pregunta Nº 20" />
                <TextInput
                  id="pregunta20"
                  name="pregunta20"
                  color="blue"
                  placeholder="¿ Que opinas de... ?"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="opciones20" value="Opciones" />
                <TextInput
                  id="opciones20"
                  name="opciones20"
                  color="blue"
                  placeholder="Ej.: Amarillo, Rojo, Azul, Verde"
                />
              </div>
              <div className="mb-3">
                <Label
                  htmlFor="respuestaCorrecta20"
                  value="Respuesta Correcta"
                />
                <TextInput
                  id="respuestaCorrecta20"
                  name="respuestaCorrecta20"
                  placeholder="Ej.: Rojo o Ninguna"
                  color="blue"
                />
              </div>
              <div className="mb-3">
                <Label htmlFor="puntaje20" value="Puntaje" />
                <TextInput
                  id="puntaje20"
                  name="puntaje20"
                  type="number"
                  placeholder="Ej.: 20"
                  color="blue"
                />
              </div>
            </div> */}
            <input type="hidden" name="userId" value={userId} />
            <Button type="submit" color="blue" outline>
              Guardar
            </Button>
          </form>
        </div>
      </main>
    );
  return <SignInPage />;
}
