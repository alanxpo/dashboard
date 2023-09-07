import Link from "next/link";
import React from "react";
import { RiHome2Line, RiInformationLine, RiUserLine } from "react-icons/ri";

const rutas = [
  { ruta: "/", label: "Inicio", icon: <RiHome2Line /> },
  { ruta: "/about", label: "Sobre mí", icon: <RiInformationLine /> },
  { ruta: "/composition", label: "Composición Corporal", icon: <RiUserLine /> },
];

const Sidebar = () => {
  return (
    <div className="text-white w-[300px] h-screen bg-[#232c3c] text-left p-3 flex flex-col gap-y-2 shadow-md">
      <h1 className="mb-4 text-2xl font-semibold text-center">Menú</h1>
      <ul>
        {rutas.map((menu, index) => (
          <Link href={menu.ruta} key={index}>
            <li className="flex items-center my-2 p-3 rounded-md transition duration-300 ease-in-out hover:bg-[#006496]">
              <span className="flex items-center">{menu.icon}</span>
              <span className="ml-2"> {menu.label}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
