import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Footer, Navbar } from "./components";
import {
  Aboutus,
  Career,
  Contactus,
  Plans,
  Home,
  GetCoach,
  AllCoaches1,
  AllCoaches2,
  UserHome,
  UserCommunity,
  UserDashNav,
  Signin,
  Signup,
  AllPosts,
  CategoryPage,
  BMI,
  BMR,
  BFP,
  TDEE,
  WorkoutPlanner,
  DailyCalorie,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        ></Route>
        <Route path="/getcoach" element={<GetCoach />}></Route>
        <Route
          path="/aboutus"
          element={
            <GuestRoute>
              <Aboutus />
            </GuestRoute>
          }
        ></Route>
        <Route path="/plans" element={<Plans />}></Route>
        <Route
          path="/career"
          element={
            <GuestRoute>
              <Career />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/contactus"
          element={
            <GuestRoute>
              <Contactus />
            </GuestRoute>
          }
        ></Route>
        <Route path="/allcoaches1" element={<AllCoaches1 />}></Route>
        <Route path="/allcoaches2" element={<AllCoaches2 />}></Route>
        <Route
          path="/userhome"
          element={
            <PrivateRoute>
              <UserHome />
            </PrivateRoute>
          }
        />
        <Route
          path="/usercommunity"
          element={
            <PrivateRoute>
              <UserCommunity />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <GuestRoute>
              <Signin />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <Signup />
            </GuestRoute>
          }
        ></Route>
        <Route
          path="/posts/all"
          element={
            <PrivateRoute>
              <AllPosts />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/posts/:category"
          element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/bmi"
          element={
            <PrivateRoute>
              <BMI />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/bmr"
          element={
            <PrivateRoute>
              <BMR />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/bfp"
          element={
            <PrivateRoute>
              <BFP />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/tdee"
          element={
            <PrivateRoute>
              <TDEE />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/workoutplanner"
          element={
            <PrivateRoute>
              <WorkoutPlanner />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dailycalorie"
          element={
            <PrivateRoute>
              <DailyCalorie />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { authData } = useSelector((state) => state.auth);
  return authData ? (
    <Navigate to="/userhome" state={{ from: rest.location }} />
  ) : (
    <>
      <Navbar />
    {children}
      <Footer />
    </>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const { authData } = useSelector((state) => state.auth);
  return authData ? (
    <>
      <UserDashNav />
    {children}
    </>
  ) : (
    <Navigate to="/signin" state={{ from: rest.location }} />
  );
};

export default App;
