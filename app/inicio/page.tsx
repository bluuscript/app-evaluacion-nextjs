"use client";
import { SideBar, SidebarItem } from "@/components/sidebar";
import { FaHome } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { RiSurveyLine, RiSurveyFill } from "react-icons/ri";
import { SiLimesurvey } from "react-icons/si";
import { useSession, signOut } from "next-auth/react";
import { UserSession } from "@/lib/types";
import SignInPage from "@/components/signInPage";

export default function InicioPage() {
  const { data: session } = useSession();

  const user: UserSession = session?.user as UserSession;
  const userId = user && user._id;
  if (session)
    return (
      <main className="h-screen w-screen overflow-auto dark:bg-slate-900">
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
        <div className="ms-28 flex h-screen flex-col items-center justify-center"></div>
      </main>
    );
  return <SignInPage />;
}
