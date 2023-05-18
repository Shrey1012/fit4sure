import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Aboutus, Career, Contactus, Plans, Home, GetCoach, AllCoaches1, AllCoaches2, UserHome, UserCommunity, UserDashNav, Signin, AllPosts, CategoryPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/getcoach" element={<GetCoach />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/allcoaches1" element={<AllCoaches1 />}></Route>
        <Route path="/allcoaches2" element={<AllCoaches2 />}></Route>
        <Route path="/userhome" element={<UserHome />}></Route>
        <Route path="/usercommunity" element={<UserCommunity />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/posts/all" element={<AllPosts />}></Route>
        <Route path="/posts/:category" element={<CategoryPage />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
