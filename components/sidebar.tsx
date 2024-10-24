"use client";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { createContext, useContext, useState } from "react";
import { DarkThemeToggle } from "flowbite-react";
import { MouseEventHandler } from "react";
import { FcSurvey } from "react-icons/fc";

type SideBarContextType = {
  expanded: boolean;
};

const SideBarContext = createContext<SideBarContextType>({ expanded: false });

export function SideBar({
  children,
  fullname,
  rol,
  email,
}: {
  children: any;
  fullname: string;
  rol: string;
  email: string;
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside className="absolute z-10 h-screen">
      <nav className="flex h-full flex-col border-r bg-white shadow-md dark:border-slate-500 dark:bg-slate-900">
        <div className="flex items-center justify-between p-4 pb-2">
          <h1
            className={`overflow-hidden text-center text-sm font-semibold transition-all dark:text-white ${
              expanded ? "w-32" : "w-0"
            } `}
          >
            Encuestas{" "}
            <span className="flex flex-col items-center">
              <FcSurvey size={30} />
            </span>
          </h1>
          <DarkThemeToggle className="mx-2 px-2" />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        <SideBarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SideBarContext.Provider>

        <div className="flex border-t p-3 dark:border-slate-500">
          <img
            className="size-10 rounded-md"
            src={`https://ui-avatars.com/api/?name=${fullname}?background=c7d2fe&color=3730a3&bold=true`}
            alt="Logo Usuario"
          />
          <div
            className={`flex items-center justify-between overflow-hidden transition-all ${
              expanded ? "ml-3 w-52" : "w-0"
            }`}
          >
            <div className="flex flex-col leading-4">
              <h4 className="font-semibold dark:text-white">{fullname}</h4>
              <span className="text-xs text-gray-600">{email}</span>
              <span className="text-xs text-gray-600">Rol: {rol}</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  location,
  onClick,
}: {
  icon: any;
  text: string;
  location: string;
  active?: boolean;
  alert?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const { expanded } = useContext(SideBarContext);
  return (
    <a
      className={`group relative my-1 flex cursor-pointer items-center 
        rounded-md px-3 py-2 font-medium transition-colors
        ${
          active
            ? "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-400"
            : "text-gray-600 hover:bg-blue-50"
        }`}
      href={location}
      onClick={onClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "ml-3 w-52" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 size-2 rounded bg-blue-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {!expanded && (
        <div
          className={`invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-blue-100 
          px-2 py-1 text-sm text-blue-500 opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
        >
          {text}
        </div>
      )}
    </a>
  );
}
