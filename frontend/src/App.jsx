
import {RouterProvider} from "react-router-dom";
import router from "./app.route"
import "./App.css"
function App() {
  return (
  <RouterProvider router={router}/>);
}

export default App;