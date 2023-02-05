import { HomeModernIcon, CalendarDaysIcon } from "@heroicons/react/20/solid";
import React from "react";

function Resume() {
  return (
    <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10">
      <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        Toda historia tiene un comienzo.
      </h1>
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Sistemas Microinformáticos y redes</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              <HomeModernIcon className="h-7" />
              <p className="font-semibold pl-2">IES de Teis, Vigo</p>
            </div>
            <div className="flex place-items-center mt-2">
              <CalendarDaysIcon className="h-7" />
              <p className="font-semibold pl-2">2017 - 2019</p>
            </div>
            <p className="mt-2">
              En esta formación de grado medio fue donde toqué por primera vez
              el desarrollo web, también aprendí sobre aplicaciones ofimáticas,
              redes y Linux.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center ">
        <div className="flex-col">
          <h1 className="hidden md:flex text-3xl font-bold mb-8">
            Sin embargo...
          </h1>
          <p className="text-lg  w-9/12 mb-5">
            Cuando terminé este ciclo empecé a trabajar en un sector que no
            tenía nada que ver con lo que a mi me gustaba, y no fue hasta 2021
            que volvería a retomar mi camino.
          </p>
        </div>
        <img
          src="./src/assets/flecha-1.png"
          alt="flecha"
          className="h-40 mr-20"
        />
      </div>
      <div className="flex md:hidden items-center px-8 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-center">Sin embargo...</h1>
          <p className="flex items-center pt-6 pb-4 text-lg">
            Cuando terminé este ciclo empecé a trabajar en un sector que no
            tenía nada que ver con lo que a mi me gustaba, y no fue hasta 2021
            que volvería a retomar mi camino.
          </p>
        </div>
      </div>
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Técnico en Gestión de Redes Virtuales</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              <HomeModernIcon className="h-7" />
              <p className="font-semibold pl-2">Forbe, Vigo</p>
            </div>
            <div className="flex place-items-center mt-2">
              <CalendarDaysIcon className="h-7" />
              <p className="font-semibold pl-2">2021 - 2022</p>
            </div>
            <p className="mt-2">
              Este curso está orientado sobre todo al perfil de Community
              Manager, pero también aprendí SEO, SEM, creación y gestión de
              estrategias de publicidad, análisis de mercado...
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center ">
        <div className="flex-col">
          <p className="text-lg  w-9/12 mb-5">
            El marketing siempre me había llamado la atención, sobre todo la
            gestión de comunidades virtuales, por eso decidí hacer este curso,
            sin embargo, el resultado acabó siendo...
          </p>
        </div>
        <img
          src="./src/assets/flecha-1.png"
          alt="flecha"
          className="h-40 mr-20"
        />
      </div>
      <div className="flex md:hidden items-center px-8 mb-8">
        <div className="flex flex-col">
          <p className="flex items-center pt-6 pb-4 text-lg">
            El marketing siempre me había llamado la atención, sobre todo la
            gestión de comunidades virtuales, por eso decidí hacer este curso,
            sin embargo, el resultado acabó siendo...
          </p>
        </div>
      </div>
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Desarrollo web Full Stack</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              <HomeModernIcon className="h-7" />
              <p className="font-semibold pl-2">Autodidacta</p>
            </div>
            <div className="flex place-items-center mt-2">
              <CalendarDaysIcon className="h-7" />
              <p className="font-semibold pl-2">Septiembre 2022 - Actualidad</p>
            </div>
            <p className="mt-2">
              Llegados a este punto, se podría decir que aquí es cuando
              realmente entendí que es lo que quería hacer, después de hacer el
              ciclo de SMR y el curso de CM, me di cuenta que lo que a mi
              realmente me gustaba era el desarrollo web, así que en Septiembre
              de 2022 empecé a estudiar de manera autodidacta desarrollo web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
