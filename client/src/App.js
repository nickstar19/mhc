import "./App.css";
import Nav from "./Components/Common/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Common/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Collector from "./Pages/Collector";
// import Result from "./Pages/Result";
import Profile from "./Pages/Profile";
import Courses from "./Pages/Courses";
import CourseClgList from "./Pages/CourseClgList";
import Dashboard from "./Pages/Dashboard";
import Payment from "./Pages/Payment";
import Policy from "./Pages/Policy";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import LogoutProtect from "./ProtectedRoutes/LogoutProtect";
import PaymentProtect from "./ProtectedRoutes/PaymentProtect";
import LoginProtect from "./ProtectedRoutes/LoginProtect";
import { useState } from "react";
import Contact from "./Pages/Contact";
function App() {
  const [collegeList, setCollegeList] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LogoutProtect />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="/" element={<PaymentProtect />}>
            <Route
              path="/result"
              element={<Profile collegeList={collegeList} />}
            />
            <Route
              path="/collect"
              element={<Collector setCollegeList={setCollegeList} />}
            />
          </Route>

          <Route path="/" element={<LoginProtect />}>
            <Route
              path="/dashboard"
              element={<Dashboard setCollegeList={setCollegeList} />}
            />
            <Route path="/pay" element={<Payment />} />
          </Route>

          <Route path="/" index element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route
            path="/courses-college-list/:course"
            element={<CourseClgList />}
          />
          <Route path="/policy" element={<Policy />} />
          <Route path="/term" element={<Terms />} />
          <Route path="*" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
