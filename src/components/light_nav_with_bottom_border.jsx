import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import "./active.css";
import "./noActive.css";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "El Rincón Del Dev", href: "/erdd", current: false },
  { name: "Todo Empezó...", href: "/resume", current: false },
  { name: "Habilidades", href: "/skills", current: false },
  { name: "Experiencia", href: "/repartidor", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="https://github.com/jmontes33" target="_blank">
                        <img
                          className="block h-8 w-auto lg:hidden"
                          src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/20d9cedab15245df7dbed1c63ebc814c6d655c57/src/assets/github-logo.svg"
                          alt="logo"
                        />
                      </a>
                      <a href="https://github.com/jmontes33" target="_blank">
                        <img
                          className="hidden h-8 w-auto lg:block"
                          src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/20d9cedab15245df7dbed1c63ebc814c6d655c57/src/assets/github-logo.svg"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            isActive ? "active" : "noActive"
                          }
                          aria-current={({ isActive }) =>
                            isActive ? "page" : undefined
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center"></div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Abrir menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}