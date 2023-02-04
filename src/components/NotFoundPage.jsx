import React from "react";

export function NotFoundPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex min-h-full flex-col bg-white lg:relative">
          <div className="flex flex-grow flex-col">
            <main className="flex flex-grow flex-col bg-white">
              <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0 pt-10 sm:pt-16">
                </div>
                <div className="my-auto flex-shrink-0 py-16 sm:py-32">
                  <p className="text-5xl font-semibold text-indigo-600">404</p>
                  <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Página no encontrada
                  </h1>
                  <p className="mt-2 text-base text-gray-500">
                    Lo siento, no puedo encontrar la página que estás buscando.
                  </p>
                  <div className="mt-6">
                    <a
                      href="/"
                      className="text-base font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Vuelve a la página principal
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </main>
            <footer className="flex-shrink-0">
              <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
              </div>
            </footer>
          </div>
          <div className="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
