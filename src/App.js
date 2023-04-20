import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Aboutus, Career, Contactus, Plans, Home } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
      </Routes>
    </>
  );
}

export default App;
