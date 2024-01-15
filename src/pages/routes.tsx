
import {createBrowserRouter} from "react-router-dom";
import { Deashboard } from "./app/deshboard";
import { SingIn } from "./auth/singIn";

export const router = createBrowserRouter([
  {    path: "/", element: <Deashboard/>,},
  {    path: "/sing-in", element: <SingIn/>,},
]);