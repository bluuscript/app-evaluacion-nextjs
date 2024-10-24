"use client";

import { Suspense, useState, useEffect, FormEvent } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getEncuestas } from "@/lib/data/getData";
import { Encuesta, UserSession } from "@/lib/types";
import {
  Spinner,
  Table,
  Label,
  Radio,
  Checkbox,
  Textarea,
  Button,
} from "flowbite-react";
import axios, { AxiosError } from "axios";
import AlertComponent from "@/components/alert";

export default function EncuestaPage() {
  const [encuesta, setEncuesta] = useState<Array<Encuesta>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Wrap useSearchParams in a Suspense fallback
  const searchParams = useSearchParams();
  const idEncuesta = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      if (!idEncuesta) return;

      try {
        setLoading(true);
        const response = await getEncuestas({ id: idEncuesta });
        const data = response.data;
        setEncuesta(data);
      } catch (error) {
        console.error("Error fetching encuestas:", error);
        setError("Error al cargar la encuesta. Por favor, intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [idEncuesta]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const respuestaPregunta1 = formData.get("respuestaPregunta1");
      const respuestaCorrecta1 = encuesta[0]?.pregunta1?.respuestaCorrecta;
      const esCorrecta1 = respuestaPregunta1 === respuestaCorrecta1;
      const pregunta1 = {
        id: "pregunta1",
        pregunta: encuesta
          .map((encuesta) => encuesta.pregunta1.pregunta)
          .join(", "),
        tipo: encuesta.map((encuesta) => encuesta.pregunta1.tipo).join(", "),
        opciones: encuesta.map((encuesta) => encuesta.pregunta1.opciones),
        respuesta: respuestaPregunta1,
        respuestaCorrecta: encuesta
          .map((encuesta) => encuesta.pregunta1.respuestaCorrecta)
          .join(", "),
        puntaje: encuesta
          .map((encuesta) => encuesta.pregunta1.puntaje)
          .join(","),
        correcta: esCorrecta1,
      };
      const response = await axios.post(
        "../../api/auth/actualizar-evaluacion",
        {
          idEncuesta,
          fechaContestada: new Date(),
          encuestaContestada: true,
          pregunta1: pregunta1,
        },
      );
      window.location.href = `evaluacion?id=${idEncuesta}`;
    } catch (error) {
      if (error instanceof AxiosError) {
        setError("Error al enviar la encuesta. Intenta nuevamente.");
      } else {
        setError("Ocurrió un error inesperado.");
      }
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <Suspense fallback={<Spinner size="xl" />}>
      <main className="relative h-screen w-screen overflow-auto dark:bg-slate-900">
        {error && <AlertComponent typeAlert="failure" message={error} />}
        <section>
          {loading ? (
            <div className="flex h-screen flex-col items-center justify-center">
              <Spinner size="xl" />
            </div>
          ) : encuesta.length > 0 ? (
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <h2 className="m-6 text-center text-4xl font-semibold dark:text-white">
                {encuesta[0].nombreEncuesta}
              </h2>
              <Table>
                <Table.Head>
                  <Table.HeadCell>Pregunta</Table.HeadCell>
                  <Table.HeadCell>Respuesta</Table.HeadCell>
                  <Table.HeadCell>Puntaje</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {encuesta[0].pregunta1.pregunta ? (
                    <Table.Row key="pregunta1">
                      <Table.Cell>
                        <Label
                          value={encuesta[0].pregunta1.pregunta as string}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        {encuesta[0].pregunta1.opciones.length > 0
                          ? encuesta[0].pregunta1.opciones.map(
                              (opcion, index) => (
                                <div
                                  className="flex flex-row items-center gap-2"
                                  key={`pregunta${index}`}
                                >
                                  <Radio
                                    id={`pregunta1-opcion-${index}`}
                                    name="respuestaPregunta1"
                                    value={opcion as string}
                                    disabled={encuesta[0].encuestaContestada}
                                    defaultChecked={
                                      encuesta[0].encuestaContestada &&
                                      encuesta[0].pregunta1.respuesta === opcion
                                    }
                                  />
                                  <Label
                                    htmlFor={`pregunta1-opcion-${index}`}
                                    value={opcion as string}
                                  />
                                </div>
                              ),
                            )
                          : ""}
                      </Table.Cell>
                      <Table.Cell>{encuesta[0].pregunta1.puntaje}</Table.Cell>
                    </Table.Row>
                  ) : (
                    ""
                  )}
                  {encuesta[0].pregunta2.pregunta ? (
                    <Table.Row key="pregunta2">
                      <Table.Cell>
                        <Label
                          value={encuesta[0].pregunta2.pregunta as string}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        {encuesta[0].pregunta2.opciones.length > 0
                          ? encuesta[0].pregunta2.opciones.map(
                              (opcion, index) => (
                                <div
                                  className="flex flex-row items-center gap-2"
                                  key={`pregunta${index}`}
                                >
                                  <Radio
                                    id={`pregunta1-opcion-${index}`}
                                    name="respuestaPregunta2"
                                    value={opcion as string}
                                    disabled={encuesta[0].encuestaContestada}
                                    defaultChecked={
                                      encuesta[0].encuestaContestada &&
                                      encuesta[0].pregunta2.respuesta === opcion
                                    }
                                  />
                                  <Label
                                    htmlFor={`pregunta1-opcion-${index}`}
                                    value={opcion as string}
                                  />
                                </div>
                              ),
                            )
                          : ""}
                      </Table.Cell>
                      <Table.Cell>{encuesta[0].pregunta1.puntaje}</Table.Cell>
                    </Table.Row>
                  ) : (
                    ""
                  )}
                  {encuesta[0].pregunta3.pregunta ? (
                    <Table.Row key="pregunta1">
                      <Table.Cell>
                        <Label
                          value={encuesta[0].pregunta3.pregunta as string}
                        />
                      </Table.Cell>
                      <Table.Cell>
                        {encuesta[0].pregunta3.opciones.length > 0
                          ? encuesta[0].pregunta3.opciones.map(
                              (opcion, index) => (
                                <div
                                  className="flex flex-row items-center gap-2"
                                  key={`pregunta${index}`}
                                >
                                  <Radio
                                    id={`pregunta1-opcion-${index}`}
                                    name="respuestaPregunta1"
                                    value={opcion as string}
                                    disabled={encuesta[0].encuestaContestada}
                                    defaultChecked={
                                      encuesta[0].encuestaContestada &&
                                      encuesta[0].pregunta3.respuesta === opcion
                                    }
                                  />
                                  <Label
                                    htmlFor={`pregunta1-opcion-${index}`}
                                    value={opcion as string}
                                  />
                                </div>
                              ),
                            )
                          : ""}
                      </Table.Cell>
                      <Table.Cell>{encuesta[0].pregunta3.puntaje}</Table.Cell>
                    </Table.Row>
                  ) : (
                    ""
                  )}
                </Table.Body>
              </Table>
              <div className="my-5">
                <Button type="submit" size="xl" outline>
                  Enviar
                </Button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center">
              <p className="text-center font-semibold">
                No registra ninguna encuesta
              </p>
            </div>
          )}
        </section>
      </main>
    </Suspense>
  );
}
