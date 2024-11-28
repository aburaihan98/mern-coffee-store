import React from "react";
import { Outlet } from "react-router";
import Footer from "./component/footer/Footer";
import NavBar from "./component/headers/NavBar";

export default function Root() {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <Outlet />
      <Footer />
    </>
  );
}
