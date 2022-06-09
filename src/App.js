import { Route, Routes } from "react-router-dom";
import NavBar from "./nav/NavBar";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import ToDos from "./pages/ToDos";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/todos/:id" element={<ToDos></ToDos>}></Route>
        <Route path="/todos" element={<ToDos></ToDos>}></Route>
        <Route path="/contacts" element={<Contacts></Contacts>}></Route>
      </Routes>
    </>
  );
}

export default App;
