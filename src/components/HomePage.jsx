import React from "react";
import { EnvelopeIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";

const projects = [
  {
    name: "To Do",
    description:
      "Una aplicación To-Do con D&D, en ella puedes crear tareas, marcarlas, moverlas a diferentes estados e incluso eliminarlas.",
    role: "HTML, CSS, JS",
    imageUrl: "https://github.com/jmontes33/To-Do-D-D/raw/main/to-do.png",
    netlify: "https://wonderful-babka-974508.netlify.app/",
    github: "https://github.com/jmontes33/To-Do-D-D",
  },
  {
    name: "Pomodoro-timer",
    description:
      "Un cronómetro en el que podrás configurar el tiempo de trbajo y descanso como tu desees.",
    role: "HTML, CSS, JS",
    imageUrl:
      "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/pomodoro-def.png?raw=true",
    netlify: "https://timely-otter-1b8a49.netlify.app/",
    github: "https://github.com/jmontes33/Pomodoro-App",
  },
  {
    name: "Portfolio",
    description: "Mi propio portfolio.",
    role: "React, Tailwind",
    imageUrl:
      "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/portfolio.png?raw=true",
    netlify: "https://www.elrincondeldev.com",
    github: "https://github.com/jmontes33/React-Portfolio",
  },
  {
    name: "Login/Register",
    description:
      "Una aplicación que te permite registrarte y acceder a tu cuenta.",
    role: "PHP, CSS",
    imageUrl:
      "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/Acceder.png?raw=true",
    netlify: "https://github.com/jmontes33/php-login",
    github: "https://github.com/jmontes33/php-login",
  },
];

function HomePage() {
  return (
    <div className="py-10">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Jose Ramón Montes
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
          <h1 className="hidden md:flex text-3xl font-bold mt-8">Sobre mi</h1>
          <div className="hidden md:flex items-center">
            <div className="flex-col">
              <p className="text-lg  w-9/12 mb-5">
                Como persona proactiva, disfruto de la emoción de asumir y
                superar nuevos retos.
                <br />
                Mi pasión por la tecnología, espcialmente por el desarrollo web,
                me ha impulsado a profundizar mis conocimientos y compartirlos
                con otros a través de <a href="/erdd">
                  "El Rincón Del Dev"
                </a>. <br />
                Mi objetivo es seguir creciendo y aprendiendo para llegar a ser
                una fuente de información valiosa para aquellas personas que
                estén empezando o quieran empezar en este mundo.
              </p>
              <NavLink
                to="./repartidor"
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Linkedin
              </NavLink>
            </div>
            <img
              src="https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/profile.png?raw=true"
              alt="profile image"
              className="rounded-full"
            />
          </div>
          <div className="flex md:hidden items-center p-8">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mt-8 text-center">Sobre mi</h1>
              <img
                src="https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/profile.png?raw=true"
                alt="profile image"
                className="rounded-full scale-75"
              />
              <p className="flex items-center pt-6 pb-4 text-lg">
                Como persona proactiva, disfruto de la emoción de asumir y
                superar nuevos retos. Mi pasión por la tecnología, espcialmente
                por el desarrollo web, me ha impulsado a profundizar mis
                conocimientos y compartirlos con otros a través de "El Rincón
                Del Dev". Mi objetivo es seguir creciendo y aprendiendo para
                llegar a ser una fuente de información valiosa para aquellas
                personas que estén empezando o quieran empezar en este mundo.
              </p>
              <a
                href="https://www.linkedin.com/in/jose-ram%C3%B3n-montes-hermida-a8a635193/"
                target={"_blank"}
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Linkedin
              </a>
            </div>
          </div>
          <div className="px-4 py-8 sm:px-0">
            <h1 className="text-3xl font-bold mb-10">Proyectos</h1>
            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
            >
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-slate-100 text-center shadow"
                >
                  <div className="flex flex-1 flex-col p-8">
                    <img
                      className="mx-auto flex-shrink-0 max-h-56"
                      src={project.imageUrl}
                      alt=""
                    />
                    <h3 className="mt-6 mb-4 text-xl font-bold text-gray-900">
                      {project.name}
                    </h3>
                    <dl className="flex flex-grow flex-col justify-between">
                      <dd className="text-sm text-gray-500">
                        {project.description}
                      </dd>
                      <dd className="mt-3">
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                          {project.role}
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-200">
                      <div className="flex w-0 flex-1">
                        <a
                          href={project.github}
                          target={"_blank"}
                          className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                          <img
                            src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/20d9cedab15245df7dbed1c63ebc814c6d655c57/src/assets/github-logo.svg"
                            alt="github"
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">Github</span>
                        </a>
                      </div>
                      <div className="-ml-px flex w-0 flex-1">
                        <a
                          target={"_blank"}
                          href={project.netlify}
                          className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                        >
                          <ComputerDesktopIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-3">Probar</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
