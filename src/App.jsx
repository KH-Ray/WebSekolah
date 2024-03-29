import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import TeachersPage from "./pages/TeachersPage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import ExtracurricularPage from "./pages/ExtracurricularPage";
import StudentsPage from "./pages/StudentsPage";
import RabuCeria from "./pages/RabuCeria";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminHeader from "./components/AdminHeader";
import AdminNav from "./components/AdminNav";
import AdminHome from "./pages/admin/AdminHome";
import AdminRabuCeria from "./pages/admin/AdminRabuCeria";
import AdminProfile from "./pages/admin/AdminProfile";
import AdminTeachers from "./pages/admin/AdminTeachers";
import AdminNews from "./pages/admin/AdminNews";
import AdminAnnouncement from "./pages/admin/AdminAnnouncement";
import AdminExtracurricular from "./pages/admin/AdminExtracurricular";
import AdminStudents from "./pages/admin/AdminStudents";
import NewPage from "./pages/NewPage";
import AnnoucementsPage from "./pages/AnnoucementsPage";
import AnnoucementPage from "./pages/AnnoucementPage";
import DimensionsPage from "./pages/DImensionsPage";
import AdminDimensions from "./pages/admin/AdminDimensions";
import GalleryPage from "./pages/GalleryPage";
import AdminGallery from "./pages/admin/AdminGallery";
import AdminSchoolGround from "./pages/admin/AdminSchoolGround";
import LearningPage from "./pages/LearningPage";
import AdminLearning from "./pages/admin/AdminLearning";

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
        <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr]">
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
        <Route path="/berita" element={MainPage(<NewsPage />)} />
        <Route path="/berita/:id" element={MainPage(<NewPage />)} />
        <Route path="/pengumuman" element={MainPage(<AnnoucementsPage />)} />
        <Route path="/pengumuman/:id" element={MainPage(<AnnoucementPage />)} />
        <Route
          path="/ekstrakurikuler"
          element={MainPage(<ExtracurricularPage />)}
        />
        <Route path="/siswa" element={MainPage(<StudentsPage />)} />
        <Route path="/program-kerja" element={MainPage(<LearningPage />)} />
        <Route path="/rabuceria" element={MainPage(<RabuCeria />)} />
        <Route path="/dikmensi" element={MainPage(<DimensionsPage />)} />
        <Route path="/galeri" element={MainPage(<GalleryPage />)} />

        <Route path="/admin" element={AdminPage(<AdminLogin />, false)} />
        <Route path="/admin/beranda" element={AdminPage(<AdminHome />)} />
        <Route path="/admin/profil" element={AdminPage(<AdminProfile />)} />
        <Route path="/admin/guru" element={AdminPage(<AdminTeachers />)} />
        <Route path="/admin/berita" element={AdminPage(<AdminNews />)} />
        <Route
          path="/admin/pengumuman"
          element={AdminPage(<AdminAnnouncement />)}
        />
        <Route
          path="/admin/ekstrakurikuler"
          element={AdminPage(<AdminExtracurricular />)}
        />
        <Route
          path="/admin/extrakurikuler"
          element={AdminPage(<AdminExtracurricular />)}
        />
        <Route path="/admin/siswa" element={AdminPage(<AdminStudents />)} />
        <Route
          path="/admin/program-kerja"
          element={AdminPage(<AdminLearning />)}
        />
        <Route
          path="/admin/rabuceria"
          element={AdminPage(<AdminRabuCeria />)}
        />
        <Route
          path="/admin/dikmensi"
          element={AdminPage(<AdminDimensions />)}
        />
        <Route path="/admin/galeri" element={AdminPage(<AdminGallery />)} />
        <Route path="/admin/denah" element={AdminPage(<AdminSchoolGround />)} />
      </Routes>
    </Router>
  );
};

export default App;
