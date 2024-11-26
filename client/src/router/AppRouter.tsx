import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/register/Register";
import ParentPage from "../pages/parent/ParentPage";
import ErrorPage from "../pages/error/ErrorPage";
import AboutPage from "../pages/about/AboutPage";
import { LoginPage } from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import DisplayBabisitterPage from "../pages/display/DisplayBabisitterPage";
import BaybisitterHomePage from "../pages/babySitter/BabysitterHomePage";
import { EditBabysitter } from "../components/edit/EditBabysitter";
import PrivateRoute from "../guard/PrivateRoute";
import IsAdmin from "../guard/IsAdmin";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/babysitter/*" element={<PrivateRoute><BaybisitterHomePage /></PrivateRoute>} />
        <Route path="/Edit/:id" element={<EditBabysitter />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register" element={<IsAdmin><Register /></IsAdmin>} />
        <Route path="/parent" element={<PrivateRoute><IsAdmin><ParentPage /></IsAdmin></PrivateRoute>} />
        <Route path="/display/:id" element={<DisplayBabisitterPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
  
}

