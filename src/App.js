import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddUser from "./components/user/AddUser";
import EditUser from "./components/user/EditUser";
import ViewUser from "./components/user/ViewUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/users/:id" exact element={<ViewUser />} />
        <Route path="/add-user" exact element={<AddUser />} />
        <Route path="/edit-user/:id" exact element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
