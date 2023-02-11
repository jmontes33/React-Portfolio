import React from "react";

export function Erdd() {
  return (
    <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10">
      <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        El Rincón Del Dev
      </h1>

      <div className="hidden md:flex items-center">
        <div className="flex-col">
          <h1 className="text-3xl font-bold mb-5">¿Qué es esto?</h1>
          <p className="text-lg w-9/12 mb-5">
            Una de las cosas que me encantan del desarrollo es su comunidad,{" "}
            <strong>
              ya que probablemente sea una de las más altruistas de cualquier
              ámbito.
            </strong>
          </p>
          <p className="mb-5 text-lg w-9/12">
            Esto me ha animado a aportar mi granito de arena, compartiendo mis
            conocimientos, ayudando a los que están empezando, y también
            intentando sacar alguna sonrisa de vez en cuando ✌🏻😁.
          </p>
          <p className="mb-5 text-lg w-9/12">
            Pensando en el <strong>futuro de "El Rincón Del Dev"</strong>, me
            gustaría crear un contenido más divulgativo, ayudar a la gente que
            está empezando, y también motivar a quienes aún no se atreven a dar
            el paso para entrar en este mundo.
          </p>
          <div className="flex items-center w-full mt-14 mb-24">
            <div className="flex flex-1 ml-14">
              <a
                href="https://www.instagram.com/elrincondeldev/"
                target={"_blank"}
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <img
                  src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/20d9cedab15245df7dbed1c63ebc814c6d655c57/src/assets/instagram-logo.svg"
                  alt="instagram logo"
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                <span className="ml-3">Instagram</span>
              </a>
            </div>
            <div className="flex flex-1 mr-14">
              <a
                href="https://www.tiktok.com/@elrincondeldev"
                target={"_blank"}
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <img
                  src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/20d9cedab15245df7dbed1c63ebc814c6d655c57/src/assets/tiktok-logo.svg"
                  alt="tiktok logo"
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                <span className="ml-3">TikTok</span>
              </a>
            </div>
          </div>
        </div>
        <img
          src="https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/iphone13-insta.png?raw=true"
          alt="profile image"
          className="max-w-xs ml-auto"
        />
      </div>
      <div className="flex md:hidden content-center p-8">
        <div className="flex flex-col gap-2 content-center">
          <h1 className="text-3xl font-bold mb-5 text-center">¿Qué es esto?</h1>
          <img
          src="https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/iphone13-insta.png?raw=true"
          alt="profile image"
          className="ml-auto"
        />
        <p className="flex items-center p-2 text-lg">
            Una de las cosas que me encantan del desarrollo es su comunidad, ya que probablemente sea una de las más altruistas de cualquier ámbito.
          </p>
          <p className="flex items-center p-2 text-lg">
            Esto me ha animado a aportar mi granito de arena, compartiendo mis
            conocimientos, ayudando a los que están empezando, y también
            intentando sacar alguna sonrisa de vez en cuando ✌🏻😁.
          </p>
          <p className="flex items-center p-2 text-lg">
            Pensando en el futuro de "El Rincón Del Dev", me
            gustaría crear un contenido más divulgativo, ayudar a la gente que
            está empezando, y también motivar a quienes aún no se atreven a dar
            el paso para entrar en este mundo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Erdd;
