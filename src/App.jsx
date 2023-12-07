import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeachersPage from "./pages/TeachersPage";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
