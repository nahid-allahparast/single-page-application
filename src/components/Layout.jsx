import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="layout">
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
