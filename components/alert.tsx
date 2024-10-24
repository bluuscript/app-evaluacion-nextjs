"use client";

import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

export default function AlertComponent({
  typeAlert,
  message,
}: {
  typeAlert: string;
  message: string;
}) {
  return (
    <div className="flex flex-row justify-center">
      <Alert
        className="absolute top-24 transition-all md:right-10 md:top-24 "
        color={typeAlert}
        icon={HiInformationCircle}
      >
        <span className="font-medium">{message}</span>
      </Alert>
    </div>
  );
}
