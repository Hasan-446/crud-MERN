import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import AddedUser from "./components/AddedUser";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/all" element={<AllUser />}></Route>
          <Route path="/add" element={<AddUser />}></Route>
          <Route path="/update/:id" element={<AddedUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
