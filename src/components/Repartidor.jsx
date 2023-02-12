import React from "react";

function Repartidor() {
  return (
    <div className="py-10 h-full">
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Esta es mi amplia experiencia en el sector del desarrollo
          </h1>
          <div className="flex justify-between my-10 gap-5">
            <div className="flex flex-col items-center w-full">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                KUKORO
              </h1>
              <div className="flex flex-col justify-center h-full p-5">
                <p>
                  Cuento con una amplia experiencia jugando Kukoro, si bien es
                  cierto que nunca he ganado una partida, he decir que mis
                  habilidades tecleando <strong>"!go"</strong> y{" "}
                  <strong>"!stop"</strong> son realmente buenas.
                </p>
                <br />
                <p>
                  Definitivamente mi proyección es óptima y tengo un amplio
                  rango de mejora, con una streamer que no me mate aun cuando no
                  me muevo podría volverme una auténtica leyenda de Kukoro.
                </p>
              </div>
            </div>
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/1166990/capsule_616x353.jpg?t=1670858456"
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Repartidor;
