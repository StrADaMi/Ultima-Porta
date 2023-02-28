import { Box } from "@mui/system";
import { Routes, Route, Outlet } from "react-router-dom";
import About from "./About";
import Login from "./login/Login";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import { UnauthorizedRoute } from "../components/UnauthorizedRoute";
import Offer from "./Offer";
import Service from "./Service";
import Client from "./Client";
import { ProtectedRoute } from "./ProtectedRoute";

export default function Router() {
  return (
    <div>
      <Navbar />
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='offer' element={<Offer />} />
          <Route path='service' element={<Service />} />
          <Route path='contact' element={<Contact />} />

          <Route
            path='login'
            element={
              <UnauthorizedRoute>
                <Login />
              </UnauthorizedRoute>
            }
          ></Route>
          <Route
            path='client'
            element={
              <ProtectedRoute>
                <Client />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        {/* <Outlet/> */}
      </Box>
    </div>
  );
}
