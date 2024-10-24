"use client";

import { Card } from "flowbite-react";

export default function CardPerfil({
  fullname,
  email,
}: {
  fullname: string;
  email: string;
}) {
  return (
    <Card className="mb-5 mt-10 max-w-sm">
      <div className="flex flex-col items-center">
        <img
          alt={`Logo ${fullname}`}
          height="96"
          src={`https://ui-avatars.com/api/?name=${fullname}?background=c7d2fe&color=3730a3&bold=true`}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-center text-xl font-medium text-gray-900 dark:text-white">
          {fullname}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
      </div>
    </Card>
  );
}
