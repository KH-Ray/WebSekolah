import { Button } from "@material-tailwind/react";
import logo from "../../images/cropped-bakdhatlogo.svg";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const history = useNavigate();
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const hashedPassword = await bcrypt.hash(passWord, 10);

      const response = await axios.post("http://localhost:8080/admin", {
        userName,
        passWord: hashedPassword,
      });

      if (response.data.login) {
        history("/admin/beranda", { state: { id: userName } });
      } else if (response.data !== "Failed") {
        alert("Wrong username or password");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="flex h-[900px] flex-col items-center justify-center gap-16 py-12 font-antonio">
      <div className="flex flex-col items-center justify-center justify-items-center gap-4">
        <img src={logo} alt="Logo Sekolah Bakti Idhata" className="h-48 w-48" />
        <p className="text-5xl font-semibold uppercase">smp bakti idhata</p>
        <p className="text-2xl font-light uppercase">cerdas terampil luhur</p>
      </div>

      <form className="flex w-full flex-col items-center justify-center gap-6 font-poppins">
        <div className="flex w-1/2 flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="rounded border-gray-400"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="mb-6 flex w-1/2 flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="rounded border-gray-400"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <Button
          variant="outlined"
          className="w-36 border-2 border-main-blue text-base capitalize"
          onClick={submit}
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default AdminLogin;