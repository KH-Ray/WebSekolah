import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TeachersPage from "./pages/TeachersPage";
import LearningPage from "./pages/LearningPage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import ExtracurricularPage from "./pages/ExtracurricularPage";
import StudentsPage from "./pages/StudentsPage";
import RabuCeria from "./pages/RabuCeria";
import ActivitiesPage from "./pages/ActivitiesPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminHeader from "./components/AdminHeader";
import AdminNav from "./components/AdminNav";
import AdminHome from "./pages/admin/AdminHome";

const MainPage = (page) => {
  return (
    <>
      <NavBar />
      {page}
      <Footer />
    </>
  );
};

const AdminPage = (page, showNav = true) => {
  return (
    <>
      <AdminHeader />
      {showNav ? (
        <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[300px_1fr]">
          <AdminNav />
          {page}
        </div>
      ) : (
        page
      )}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={MainPage(<HomePage />)} />
        <Route path="/login" element={MainPage(<LoginPage />)} />
        <Route path="/profile" element={MainPage(<ProfilePage />)} />
        <Route path="/guru" element={MainPage(<TeachersPage />)} />
        <Route path="/organisasi" element={MainPage(<LearningPage />)} />
        <Route path="/berita" element={MainPage(<NewsPage />)} />
        <Route
          path="/extrakurikuler"
          element={MainPage(<ExtracurricularPage />)}
        />
        <Route path="/siswa" element={MainPage(<StudentsPage />)} />
        <Route path="/rabuceria" element={MainPage(<RabuCeria />)} />
        <Route path="/kegiatan" element={MainPage(<ActivitiesPage />)} />

        <Route path="/admin" element={AdminPage(<AdminLogin />, false)} />
        <Route path="/admin/beranda" element={AdminPage(<AdminHome />)} />
      </Routes>
    </Router>
  );
};

export default App;
