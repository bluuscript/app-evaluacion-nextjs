import { Button } from "flowbite-react";
import { useState } from "react";
import AlertComponent from "./alert";

export default function CardEncuesta({
  _id,
  nombreEncuesta,
  fechaInicio,
  fechaTermino,
  fechaContestada,
  encuestaContestada,
}: {
  _id?: string;
  nombreEncuesta?: string;
  fechaInicio: Date;
  fechaTermino: Date;
  fechaContestada: Date;
  encuestaContestada: Boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<String>();
  const handleCopyLink = () => {
    const link = `http://localhost:3000/evaluacion?id=${_id}`; // Reemplaza con el formato del enlace real
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
      .catch((error) => {
        setError("Error al Copiar Enlace");
        setTimeout(() => {
          setError("");
        }, 500);
      });
  };

  return (
    <div className="relative h-[360px] w-[350px] rounded-lg border border-gray-300 bg-white p-8 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:text-white">
      {error && (
        <AlertComponent typeAlert="failure" message={error as string} />
      )}
      <div className="flex flex-col items-center space-y-6">
        <h2 className="h-20 overflow-hidden text-center text-2xl font-bold tracking-wide text-gray-800 dark:text-white">
          {nombreEncuesta}
        </h2>

        <div className="flex flex-col items-start space-y-4">
          <p className="text-base text-gray-600 dark:text-gray-400">
            <strong>Fecha Inicio:</strong>{" "}
            {new Date(fechaInicio).toLocaleDateString("es-CL")}
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            <strong>Fecha Término:</strong>{" "}
            {new Date(fechaTermino).toLocaleDateString("es-CL")}
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            <strong>Fecha Contestada</strong>{" "}
            {fechaContestada
              ? new Date(fechaContestada).toLocaleDateString("es-CL")
              : "Ninguna"}
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            <strong>Contestada:</strong> {encuestaContestada ? "Si" : "No"}
          </p>
        </div>

        {/* Button */}
        <div className="flex w-full justify-between">
          <Button
            onClick={handleCopyLink}
            isProcessing={copied ? true : false}
            size="sm"
            color="blue"
            pill
          >
            Copiar Enlace
          </Button>
          <Button
            href={`http://localhost:3000/evaluacion?id=${_id}`}
            size="sm"
            color="blue"
            pill
          >
            Ver Encuesta
          </Button>
        </div>
      </div>
    </div>
  );
}
