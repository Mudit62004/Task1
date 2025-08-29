import React, { useState } from "react";
import { HomeIcon, SearchIcon, TicketIcon, UserIcon } from "@heroicons/react/outline";

const Footer = () => {
  const [active, setActive] = useState("home");
  const tabs = [
    { name: "Home", icon: HomeIcon, key: "home" },
    { name: "Search", icon: SearchIcon, key: "search" },
    { name: "Orders", icon: TicketIcon, key: "orders" },
    { name: "Profile", icon: UserIcon, key: "profile" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md">
      <nav className="flex justify-around items-center py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="flex flex-col items-center text-sm space-y-1 focus:outline-none"
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-red-600" : "text-gray-400"}`} />
              <span className={`${isActive ? "text-red-600" : "text-gray-500"}`}>{tab.name}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};

export default Footer;
