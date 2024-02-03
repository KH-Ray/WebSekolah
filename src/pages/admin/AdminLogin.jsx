import { Button } from "@material-tailwind/react";
import logo from "../../images/cropped-bakdhatlogo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [admin, setAdmin] = useState([]);
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminResponse = await axios.get("http://localhost:8080/admin");
        setAdmin(adminResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const findAdmin = admin.find(
    (f) => f.userName === userName && String(f.passWord) === passWord,
  );

  const handleLogin = (e) => {
    e.preventDefault();
    if (findAdmin) {
      navigate("/admin/beranda"); // Menggunakan navigate untuk navigasi
    } else {
      alert("Username atau password salah!");
    }
  };


  return (
    <main className="flex h-[900px] flex-col items-center justify-center gap-16 py-12 font-antonio">
      <div className="flex flex-col items-center justify-center justify-items-center gap-4">
        <img src={logo} alt="Logo Sekolah Bakti Idhata" className="h-48 w-48" />
        <p className="text-5xl font-semibold uppercase">smp bakti idhata</p>
        <p className="text-2xl font-light uppercase">cerdas terampil luhur</p>
      </div>

      <form className="flex w-full flex-col items-center justify-center gap-6 font-poppins"
      onSubmit={handleLogin}>
        <div className="flex w-1/2 flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="userName"
            onChange={(e) => setUserName(e.target.value)}
            className="rounded border-gray-400"
          />
        </div>

        <div className="mb-6 flex w-1/2 flex-col gap-2">
          <label htmlFor="nisn">Password</label>
          <input
            type="password"
            id="password"
            name="passWord"
            onChange={(e) => setPassWord(e.target.value)}
            className="rounded border-gray-400"
          />
        </div>

        <Button
          variant="outlined"
          className="w-36 border-2 border-main-blue text-base capitalize"
          type="submit"
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default AdminLogin;
