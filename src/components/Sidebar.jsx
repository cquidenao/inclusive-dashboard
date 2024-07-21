import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiCameraLine,
  RiDatabaseLine,
  RiCustomerService2Line,
  RiCalendarTodoLine,
  RiLogoutCircleRLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleSubmenu = () => setShowSubmenu(!showSubmenu);

  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 transition-all ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div>
        <h1 className="text-center text-2xl font-bold text-white mb-10 flex items-center justify-center gap-2">
            <Link to="/" className="text-white flex items-center gap-2">
              <img
                src="./images/logo2.png"
                alt="Logo Inclusive"
                className="w-15 h-10"
              />
              Inclusive<span className="text-primary text-4xl">.</span>
            </Link>
          </h1>

          <ul>
            <li>
              <Link
                to="/camaras"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCameraLine className="text-primary" /> Cámaras
              </Link>
            </li>
            <li>
              <button
                onClick={toggleSubmenu}
                className="w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiDatabaseLine className="text-primary" /> Métricas
                </span>
                <RiArrowRightSLine
                  className={`mt-1 transition-all ${
                    showSubmenu ? "rotate-90" : ""
                  }`}
                />
              </button>
              <ul
                className={`overflow-y-hidden transition-all ${
                  showSubmenu ? "h-[130px]" : "h-0"
                }`}
              >
                <li>
                  <Link
                    to="/amperajes"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Amperajes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/estadisticas"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Estadísticas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/precio"
                    className="py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors"
                  >
                    Precio
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/tickets"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCustomerService2Line className="text-primary" /> Soporte
                técnico
              </Link>
            </li>
            <li>
              <Link
                to="/calendario"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCalendarTodoLine className="text-primary" /> Calendario
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/login"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={toggleMenu}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
