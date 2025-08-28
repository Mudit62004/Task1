import React from 'react'
import {NavLink} from 'react-router-dom'
import navItems from '../constants/FooterConstant'

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow fixed bottom-0 left-0 z-50 border-t">
      <nav className="flex items-center justify-between px-6 py-2">
        {navItems.map(({ to, label, icon, activeClass }) => (
          <NavLink
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs font-semibold text-gray-500 hover:text-red-600 transition ${isActive ? activeClass || "text-red-600" : ""}`
            }
            key={label}
            end
          >
            <div>{icon}</div>
            <span className="mt-1">{label}</span>
          </NavLink>
        ))}
      </nav>
    </footer>
  );
}

export default Footer