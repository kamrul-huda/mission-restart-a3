import React from "react";
import { Outlet, useNavigation } from "react-router";
import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="">
      {navigation.state === "loading" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
