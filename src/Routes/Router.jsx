import { Route, Routes } from "react-router";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import LogIn from "../Page/Authentication/LogIn";
import AddTask from "../Page/Task/AddTask";
import TaskBord from "../Page/Task/TaskBord";
import PrivateRoute from "./PrivateRoute";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/logIn" element={<LogIn></LogIn>}></Route>
        <Route
          path="/addTask"
          element={
            <PrivateRoute>
              <AddTask></AddTask>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/taskBoard"
          element={
            <PrivateRoute>
              <TaskBord></TaskBord>
            </PrivateRoute>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default Router;
