import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
// import { LoginPage } from "../pages/LoginPage";
// import { Register } from "../pages/register/Register";
// import AboutPage from "../pages/AboutPage";
// import ParentPage from "../pages/parentPage/ParentPage";
// import { BaybisitterHomePage } from "../pages/baybisitterHomePage/BaybisitterHomePage";
// import { EditBabysitter } from "../componnets/EditBabysitter";
// import DisplayBabisitterPage from "../pages/DisplayBabisitterPage";
import ErrorPage from "../pages/ErrorPage";
import GardsUser from "../gards/GerdsUser";
import GardsIsAdmin from "../gards/GardsIsAdmin";
import { RegisterPage } from "../pages/register/RegisterPage";
import { LoginPage } from "../pages/login/LoginPage";
import { DispleyPage } from "../pages/displey/DispleyPage";

export default function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DispleyPage />} />

        {/* <Route path="/babysitter/*" element={<BaybisitterHomePage />} /> */}

        {/* <Route path="/Edit/:id" element={<EditBabysitter />} /> */}
        {/* <Route path="about" element={<AboutPage />} /> */}
        {/* <Route path="/parent" element={<ParentPage />} /> */}
        {/* <Route path="/display/:id" element={<DisplayBabisitterPage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
