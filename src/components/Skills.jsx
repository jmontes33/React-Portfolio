import React from "react";

function Skills() {
  return (
    <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10">
      <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8">
        Habilidades
      </h1>
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Front End</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="hidden md:flex space-x-10">
              <div className="flex flex-col space-y-2">
                <img className="h-20" src="https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/html5.png" alt="html" />
                <p className="flex justify-center">HTML</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img className="h-20" src="src/assets/css3.png" alt="css" />
                <p className="flex justify-center">CSS</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  className="h-20 rounded-2xl"
                  src="src/assets/javascript.png"
                  alt="javascript"
                />
                <p className="flex justify-center">JavaScript</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  className="h-20 rounded-2xl"
                  src="src/assets/react.png"
                  alt="react"
                />
                <p className="flex justify-center">React</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  className="h-20"
                  src="src/assets/tailwind.png"
                  alt="Tailwind"
                />
                <p className="flex justify-center">Tailwind</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:hidden">
              <div className="flex flex-col space-y-2">
                <img src="src/assets/html5.png" alt="html" />
                <p className="flex justify-center">HTML</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img src="src/assets/css3.png" alt="css" />
                <p className="flex justify-center">CSS</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  className=" rounded-2xl"
                  src="src/assets/javascript.png"
                  alt="javascript"
                />
                <p className="flex justify-center">JavaScript</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  className=" rounded-2xl"
                  src="src/assets/react.png"
                  alt="react"
                />
                <p className="flex justify-center">React</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img src="src/assets/tailwind.png" alt="Tailwind" />
                <p className=" flex justify-center">Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Back End</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="hidden md:flex space-x-10">
              <div className="flex flex-col space-y-2">
                <img
                  className="h-20"
                  src="src/assets/postgresql.png"
                  alt="postgresql"
                />
                <p className="flex justify-center">PostgreSql</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img className="h-20" src="src/assets/nodejs.png" alt="node" />
                <p className="flex justify-center">Node.Js</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:hidden">
              <div className="flex flex-col space-y-2">
                <img src="src/assets/postgresql.png" alt="postgresql" />
                <p className="flex justify-center">PostgreSql</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img src="src/assets/nodejs.png" alt="node" />
                <p className="flex justify-center">Node.Js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border drop-shadow-sm rounded-lg">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Herramientas</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="hidden md:flex space-x-10">
              <div className="flex flex-col space-y-2">
                <img className="h-20" src="src/assets/git.png" alt="git" />
                <p className="flex justify-center">Git</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  className="h-20"
                  src="src/assets/github.png"
                  alt="github"
                />
                <p className="flex justify-center">GitHub</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img className="h-20" src="src/assets/npm.png" alt="npm" />
                <p className="flex justify-center">Npm</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img
                  className="h-20"
                  src="src/assets/netlify.png"
                  alt="netlify"
                />
                <p className="flex justify-center">Netlify</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:hidden">
              <div className="flex flex-col space-y-2">
                <img src="src/assets/git.png" alt="git" />
                <p className="flex justify-center">Git</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img src="src/assets/github.png" alt="github" />
                <p className="flex justify-center">GitHub</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img src="src/assets/npm.png" alt="npm" />
                <p className="flex justify-center">Npm</p>
              </div>
              <div className="flex flex-col space-y-2">
                <img src="src/assets/netlify.png" alt="netlify" />
                <p className="flex justify-center">Netlify</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
