"use client";
import { SideBar, SidebarItem } from "@/components/sidebar";
import { FaHome } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { RiSurveyLine, RiSurveyFill } from "react-icons/ri";
import { SiLimesurvey } from "react-icons/si";
import { useSession, signOut } from "next-auth/react";
import { UserSession } from "@/lib/types";
import SignInPage from "@/components/signInPage";
import { getEncuestas } from "@/lib/data/getData";
import { useState, useEffect } from "react";
import { Encuesta } from "@/lib/types";
import CardEncuesta from "@/components/cardEncuesta";
import { Spinner } from "flowbite-react";

export default function EvaluacionPage() {
  const { data: session } = useSession();
  const [encuestas, setEncuestas] = useState<Array<Encuesta>>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const user: UserSession = session?.user as UserSession;
  const userId = user && user._id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true when fetching data
        const response = await getEncuestas({ userId: userId });
        const data = response.data;
        setEncuestas(data);
      } catch (error) {
        console.error("Error fetching encuestas:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    if (userId) {
      fetchData(); // Fetch data only if userId is present
    }
  }, [userId]); // Use only userId as the dependency

  if (session) {
    return (
      <main className="relative h-screen w-screen overflow-auto bg-gray-100 dark:bg-slate-900">
        <SideBar fullname={user.fullname} rol={user.rol} email={user.email}>
          <SidebarItem
            icon={<FaHome size={20} />}
            text="Inicio"
            location="/inicio"
            active
          />
          <SidebarItem
            icon={<RiSurveyLine size={20} />}
            text="Nueva Evaluación"
            location="/inicio/nueva-evaluacion"
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
        <div className="mb-5 ms-32 flex flex-col items-center">
          <h2 className="m-6 text-center text-4xl font-semibold dark:text-white">
            Mis Evaluaciones
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading ? (
              <div className="flex h-screen w-screen flex-col items-center justify-center">
                <Spinner size="xl" />
              </div>
            ) : (
              encuestas &&
              encuestas.map((encuesta) => (
                <CardEncuesta
                  key={encuesta._id as string}
                  _id={encuesta._id as string}
                  nombreEncuesta={encuesta.nombreEncuesta as string}
                  fechaInicio={encuesta.fechaInicio}
                  fechaTermino={encuesta.fechaTermino}
                  fechaContestada={encuesta.fechaContestada}
                  encuestaContestada={encuesta.encuestaContestada}
                />
              ))
            )}
          </div>
        </div>
      </main>
    );
  }
  return <SignInPage />;
}
