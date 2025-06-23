import React from "react";

import { NavLink, Outlet } from "react-router-dom";

const Atletic = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center justify-center min-h-screen">
      <div className="flex mt-30    flex-row justify-center items-center gap-5">
        <NavLink
          to="community"
          className={({ isActive }) =>
            isActive
              ? " text-[#06724b] px-2 font-bold border-b-5"
              : "text-[#06724b] capitalize"
          }
        >
          Community
        </NavLink>
        <NavLink
          to="athletics"
          className={({ isActive }) =>
            isActive
              ? " text-[#06724b] px-2 font-bold border-b-5"
              : "text-[#06724b] capitalize"
          }
        >
          Sports
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Atletic;
