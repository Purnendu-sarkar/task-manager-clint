import NavBar from "../Page/Shared/NavBar";
import { Outlet } from "react-router-dom";


const Main = () => {
  return (
    <div>
      <NavBar></NavBar>

      <div className="mt-16 lg:mt-[68px]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
