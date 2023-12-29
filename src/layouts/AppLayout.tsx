import { Outlet } from "react-router-dom";
import AppNav from "../components/ui/AppNav";
import Footer from "../components/ui/Footer";

const AppLayout = () => {
  return (
    <div className="max-w-4xl mx-auto min-h-screen flex justify-between flex-col">
      <AppNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
