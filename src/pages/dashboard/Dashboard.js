import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <>
      <aside>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">Menu</label>

        <ul>
          <li>
            <Link to="/dashboard/usuarios">Usuarios</Link>
          </li>
        </ul>
      </aside>

      <Outlet />
    </>
  );
};
