import { Button } from "@material-tailwind/react";
import logo from "../images/cropped-bakdhatlogo.svg";

const LoginPage = () => {
  return (
    <main className="flex h-[900px] flex-col items-center justify-center gap-16 py-12 font-antonio">
      <div className="flex flex-col items-center justify-center justify-items-center gap-4">
        <img src={logo} alt="Logo Sekolah Bakti Idhata" className="h-48 w-48" />
        <p className="text-5xl font-semibold uppercase">smp bakti idhata</p>
        <p className="text-2xl font-light uppercase">cerdas terampil luhur</p>
      </div>

      <form className="flex w-full flex-col items-center justify-center gap-6 font-poppins">
        <div className="flex w-1/2 flex-col gap-2">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded border-gray-400"
          />
        </div>

        <div className="mb-6 flex w-1/2 flex-col gap-2">
          <label htmlFor="nisn">NISN</label>
          <input
            type="password"
            id="nisn"
            name="nisn"
            className="rounded border-gray-400"
          />
        </div>

        <Button
          variant="outlined"
          className="w-36 border-2 border-main-blue text-base capitalize"
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
