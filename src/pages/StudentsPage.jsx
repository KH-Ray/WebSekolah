import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import { Pagination } from "@mui/material";
import Box from "../components/PhotoBox";

const StudentsPage = () => {
  const students = [
    { name: "Faza Rama Nugraha", class: "VII A" },
    { name: "Muhamad Bagas Prasetio", class: "VII A" },
    { name: "Muhammad Raid", class: "VII A" },
    { name: "Khanza Arrayyan", class: "VII A" },
  ];

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
              color="blue"
              icon={<MagnifyingGlassIcon />}
            />
          </div>

          <div className="">
            <Pagination count={4} variant="outlined" shape="rounded" />
          </div>
        </div>

        <div>
          <Box styles="w-full h-12 px-6 mb-2 flex justify-between items-center">
            <p>No.</p>
            <p>Nama Siswa</p>
            <p>Kelas</p>
          </Box>

          <hr className="mb-2 border-t border-gray-400" />

          <div className="flex flex-col gap-2">
            {students.map((s, i) => {
              return (
                <Box
                  key={i}
                  styles="w-full h-12 px-6 flex justify-between items-center"
                >
                  <p>{i + 1}.</p>
                  <p>{s.name}</p>
                  <p>{s.class}</p>
                </Box>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentsPage;
