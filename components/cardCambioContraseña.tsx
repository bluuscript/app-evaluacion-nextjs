import { Label, TextInput, Button } from "flowbite-react";

export default function CardCambioContraseña() {
  return (
    <>
      <h3 className="mb-4 text-xl font-semibold dark:text-white">
        Cambiar Contraseña
      </h3>
      <form action="#">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="current-password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Current password
            </label>
            <input
              type="text"
              name="current-password"
              id="current-password"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              New password
            </label>
            <input
              data-popover-target="popover-password"
              data-popover-placement="bottom"
              type="password"
              id="password"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
            <div
              data-popover=""
              id="popover-password"
              role="tooltip"
              className="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm font-light text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              <div className="space-y-2 p-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Must have at least 6 characters
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="h-1 bg-orange-300 dark:bg-orange-400" />
                  <div className="h-1 bg-orange-300 dark:bg-orange-400" />
                  <div className="h-1 bg-gray-200 dark:bg-gray-600" />
                  <div className="h-1 bg-gray-200 dark:bg-gray-600" />
                </div>
                <p>It’s better to have:</p>
                <ul>
                  <li className="mb-1 flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-green-400 dark:text-green-500"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Upper &amp; lower case letters
                  </li>
                  <li className="mb-1 flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-gray-300 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    A symbol (#$&amp;)
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 text-gray-300 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    A longer password (min. 12 chars.)
                  </li>
                </ul>
              </div>
              <div data-popper-arrow="" />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="confirm-password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="text"
              name="confirm-password"
              id="confirm-password"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="sm:col-full col-span-6 flex flex-col">
            <Button type="submit" color="yellow">
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
