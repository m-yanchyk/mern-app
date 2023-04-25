import React from "react";
import { NavLink } from "react-router-dom";
import nav from "./_nav";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      {nav.map((item) => (
        <NavLink key={item.to} to={item.to} className="sidebar-link">
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
