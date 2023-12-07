import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeachersPage from "./pages/TeachersPage";
import LearningPage from "./pages/LearningPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/learning" element={<LearningPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
