import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const AllPages = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AllPages;
