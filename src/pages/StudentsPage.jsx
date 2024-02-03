import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import { Pagination } from "@mui/material";
import Box from "../components/PhotoBox";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

import axios from "axios";

const StudentsPage = () => {

  const [siswa, setSiswa] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const siswwaResponse = await axios.get("http://localhost:8080/siswa");
          setSiswa(siswwaResponse.data);
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      };
      fetchData();
  }, [])

  if (siswa.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-4xl font-semibold uppercase md:text-5xl lg:text-6xl">
            peserta didik
          </h1>
          <p className="text-lg lg:text-xl">Beranda - Peserta Didik</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl px-4 lg:px-6">
        <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <div className="w-full sm:w-1/2">
            <Input
              label="Masukan Nama Siswa atau Kelas"
              color="teal"
              icon={<MagnifyingGlassIcon />}
            />
          </div>

          <Link to="/login">
            <button className="bg-semi-green rounded-lg px-8 py-3 text-white">
              Lihat Profile Peserta Didik
            </button>
          </Link>
        </div>

        <div>
          <Box styles="w-full h-12 px-6 mb-2 flex justify-between items-center !bg-semi-green text-white">
            <p>No.</p>
            <p>Nama Siswa</p>
            <p>Kelas</p>
          </Box>

          <hr className="mb-2 border-t border-gray-400" />

          <div className="mb-4 flex flex-col gap-2">
            {siswa.map((s, i) => {
              return (
                <Box
                  key={i}
                  styles="w-full h-12 px-6 flex justify-between items-center !bg-main-seagreen"
                >
                  <p>{i + 1}.</p>
                  <p>{s.nama}</p>
                  <p>{s.kelas}</p>
                </Box>
              );
            })}
          </div>
        </div>

        <div className="ml-auto flex">
          <div className="mr-auto"></div>
          <Pagination count={4} variant="outlined" shape="rounded" />
        </div>
      </div>
    </main>
  );
};

export default StudentsPage;
