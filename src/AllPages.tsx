import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Authentication from "./components/Auth/Authentication";
import Navbar from "./components/navbar/Navbar";

const AllPages = () => {
  return (
    <>
      <Authentication>
        <Navbar />
        <Outlet />
      </Authentication>
    </>
  );
};

export default AllPages;
