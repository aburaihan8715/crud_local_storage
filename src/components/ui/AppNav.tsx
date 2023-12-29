import { Link } from "react-router-dom";

const AppNav = () => {
  return (
    <div>
      <nav className="bg-slate-600 p-4 flex justify-between items-center rounded">
        <Link to={"/"} className="flex flex-col">
          <div className="text-2xl">
            RE<span className="text-4xl text-orange-500">A</span>CT CRUD
          </div>
          <div className="text-xs">local storage typescript</div>
        </Link>
        <Link to={"/createTopic"} className="p-2 bg-red-500 rounded capitalize">
          Add topic
        </Link>
      </nav>
    </div>
  );
};

export default AppNav;
