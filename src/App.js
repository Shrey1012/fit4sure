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
  PostDetails,
  UserSettings,
  ShowPlans,
  Coaches,
  Trackers,
  ShortVideos,
  Schedule,
  Notifications,
} from "./pages";

function App() {

const { authData } = useSelector((state) => state.auth);

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
        />
        <Route
          path="/getcoach"
          element={
            <GuestRoute>
              <GetCoach />
            </GuestRoute>
          }
        />
        <Route
          path="/aboutus"
          element={
            <GuestRoute>
              <Aboutus />
            </GuestRoute>
          }
        />
        <Route
          path="/plans"
          element={
            <GuestRoute>
              <Plans />
            </GuestRoute>
          }
        />
        <Route
          path="/career"
          element={
            <GuestRoute>
              <Career />
            </GuestRoute>
          }
        />
        <Route
          path="/contactus"
          element={
            <GuestRoute>
              <Contactus />
            </GuestRoute>
          }
        />
        {authData ? (
          <Route
            path="/allcoaches1"
            element={
              <PrivateRoute>
                <AllCoaches1 />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/allcoaches1"
            element={
              <GuestRoute>
                <AllCoaches1 />
              </GuestRoute>
            }
          />
        )}
        {authData ? (
          <Route
            path="/allcoaches2"
            element={
              <PrivateRoute>
                <AllCoaches2 />
              </PrivateRoute>
            }
          />
        ) : (
          <Route
            path="/allcoaches2"
            element={
              <GuestRoute>
                <AllCoaches2 />
              </GuestRoute>
            }
          />
        )}
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
        />
        <Route
          path="/usersettings/*"
          element={
            <PrivateRoute>
              <UserSettings />
            </PrivateRoute>
          }
        />
        <Route
          path="/trackers/*"
          element={
            <PrivateRoute>
              <Trackers />
            </PrivateRoute>
          }
        />

        <Route
          path="/signin"
          element={
            
              <Signin />
            
          }
        />
        <Route
          path="/signup"
          element={
            
              <Signup />
            
          }
        />
        <Route
          path="/shortvideos"
          element={
            <PrivateRoute>
              <ShortVideos />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/all"
          element={
            <PrivateRoute>
              <AllPosts />
            </PrivateRoute>
          }
        />
        <Route
          path="/post-details/:postId"
          element={
            <PrivateRoute>
              <PostDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/posts/:category"
          element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/bmi"
          element={
            <PrivateRoute>
              <BMI />
            </PrivateRoute>
          }
        />
        <Route
          path="/bmr"
          element={
            <PrivateRoute>
              <BMR />
            </PrivateRoute>
          }
        />
        <Route
          path="/bfp"
          element={
            <PrivateRoute>
              <BFP />
            </PrivateRoute>
          }
        />
        <Route
          path="/tdee"
          element={
            <PrivateRoute>
              <TDEE />
            </PrivateRoute>
          }
        />
        <Route
          path="/workoutplanner"
          element={
            <PrivateRoute>
              <WorkoutPlanner />
            </PrivateRoute>
          }
        />
        <Route
          path="/dailycalorie"
          element={
            <PrivateRoute>
              <DailyCalorie />
            </PrivateRoute>
          }
        />
        <Route
          path="/showplans"
          element={
            <PrivateRoute>
              <ShowPlans />
            </PrivateRoute>
          }
        />
        <Route
          path="/coaches"
          element={
            <PrivateRoute>
              <Coaches />
            </PrivateRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <PrivateRoute>
              <Schedule />
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <Notifications />
            </PrivateRoute>
          }
        />
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
