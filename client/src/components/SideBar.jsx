"use client";
import logo from "../../public/assets/logo.png";

import IconButton from "./IconButton";
import Image from "./Image";

import SidebarIcons from "./SidebarIcons";
import { useDataContext } from "../context/DataContext";
function MenuItem({ item: { id, title, notifications }, onClick, selected }) {
  return (
    <div
      className={`w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer
          ${selected === id ? "sidebar-item-selected" : "sidebar-item"}`}
      onClick={() => onClick(id)}
    >
      <SidebarIcons id={id} />
      <div className="block sm:hidden xl:block ml-2">{title}</div>
      <div className="block sm:hidden xl:block flex-grow" />
      {notifications && (
        <div className=" sm:hidden xl:flex bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2">
          <div className="text-white text-sm">{notifications}</div>
        </div>
      )}
    </div>
  );
}

function Sidebar({ onSidebarHide, showSidebar }) {
  const sidebarItems = [
    [
      { id: "0", title: "Home", notifications: false },
      { id: "1", title: "Subnets", notifications: false },
      { id: "2", title: "Validators", notifications: 6 },
      { id: "3", title: "Teleporter", notifications: false },
    ],
    [
      { id: "4", title: "Stats", notifications: false },
      { id: "5", title: "Tools", notifications: false },
      { id: "6", title: "Settings", notifications: false },
    ],
  ];
  const {selected,setSelected} = useDataContext();
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10
          ${showSidebar ? "flex" : "hidden"}`}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
            Subnet Vision
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
        </div>
      </div>
      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
       
        {sidebarItems[0].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block">
          SHORTCUTS
        </div>
        {sidebarItems[1].map((i) => (
          <MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
        ))}
        <div className="flex-grow" />
       
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <Image path="mock_faces_8" className="w-10 h-10" />
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            Nikku.Dev
          </div>
          <div className="flex-grow block sm:hidden xl:block" />

        </div>
      </div>
    </div>
  );
}

export default Sidebar;
