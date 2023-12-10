import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeachersPage from "./pages/TeachersPage";
import LearningPage from "./pages/LearningPage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import ExtracurricularPage from "./pages/ExtracurricularPage";
import StudentsPage from "./pages/StudentsPage";
import RabuCeria from "./pages/RabuCeria";
import ActivitiesPage from "./pages/ActivitiesPage";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/guru" element={<TeachersPage />} />
        <Route path="/organisasi" element={<LearningPage />} />
        <Route path="/berita" element={<NewsPage />} />
        <Route path="/extrakurikuler" element={<ExtracurricularPage />} />
        <Route path="/siswa" element={<StudentsPage />} />
        <Route path="/rabuceria" element={<RabuCeria />} />
        <Route path="/kegiatan" element={<ActivitiesPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
