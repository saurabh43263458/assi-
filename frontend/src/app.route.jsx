import Login from "./pages/login";
import Register from "./pages/register";
import {createBrowserRouter} from "react-router";
import Dashboard from "./pages/dashboard";
 const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    }
])
export default router;