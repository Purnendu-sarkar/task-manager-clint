import { Route, Routes } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import LogIn from "../Page/Authentication/LogIn";
import AddTask from "../Page/Task/AddTask";
import TaskBord from "../Page/Task/TaskBord";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route path="/addTask" element={<AddTask></AddTask>}></Route>
        <Route path="/taskBord" element={<TaskBord></TaskBord>}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
