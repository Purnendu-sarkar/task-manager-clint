import { Route, Routes } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import LogIn from "../Page/Authentication/LogIn";
import AddTask from "../Page/Task/AddTask";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="/addTask" element={<AddTask></AddTask>}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
