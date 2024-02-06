import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";
import { Pagination } from "@mui/material";
import Box from "../../components/PhotoBox";
import studentServices from "../../services/students";
import fileServices from "../../services/files";
import { useQuery } from "@tanstack/react-query";
import { Button, Flowbite, Spinner, Table } from "flowbite-react";
import { useState } from "react";
import { customButtonTheme } from "../../themes/flowbiteThemes";

const studentPageView = (student, setStudent, setStudentPage, files) => {
  return (
    <main className="h-screen overflow-auto font-poppins">
      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-8 px-4 lg:px-6">
        <div className="text-gray-blue text-dark-gray">
          <button
            className="flex items-center gap-2 hover:cursor-pointer"
            onClick={() => setStudentPage(false)}
          >
            <ArrowLeftIcon className="h-6 w-6 fill-dark-gray" /> Kembali
          </button>
        </div>

        <h1 className="mb-6 block text-4xl font-semibold">
          Informasi Peserta Didik
        </h1>

        <div className="flex gap-4">
          <div>
            <Box styles="w-52 h-52"></Box>
          </div>

          <div className="grid w-full grid-cols-[180px_1fr]">
            <p>Nama Peserta Didik</p>
            <p className="before:relative before:-top-1 before:mr-4 before:content-[':']">
              <input
                type="text"
                placeholder="Nama Peserta Didik"
                value={student.name || ""}
                className="relative -top-1 w-11/12 border-none p-0"
                onChange={({ target }) => {
                  setStudent({ ...student, name: target.value });
                }}
              />
            </p>

            <p>Kelas Peserta Didik</p>
            <p className="before:relative before:-top-1 before:mr-4 before:content-[':']">
              <input
                type="text"
                placeholder="Kelas Peserta Didik"
                value={student.class || ""}
                className="relative -top-1 w-11/12 border-none p-0"
                onChange={({ target }) => {
                  setStudent({ ...student, class: target.value });
                }}
              />
            </p>

            <p>NISN Peserta Didik</p>
            <p className="before:relative before:-top-1 before:mr-4 before:content-[':']">
              <input
                type="text"
                placeholder="NISN Peserta Didik"
                value={student.NIS || ""}
                className="relative -top-1 w-11/12 border-none p-0"
                onChange={({ target }) => {
                  setStudent({ ...student, NIS: target.value });
                }}
              />
            </p>

            <p>Alamat</p>
            <p className="leading-6 before:relative before:-top-[76px] before:mr-1 before:content-[':']">
              <textarea
                className="relative -top-3 h-full w-11/12 resize-none overflow-auto border-none"
                placeholder="Alamat Peserta Didik"
                value={student.address || ""}
                onChange={({ target }) => {
                  setStudent({ ...student, address: target.value });
                }}
              ></textarea>
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <Table.Head className="">
              <Table.HeadCell className="text-center font-semibold">
                Sakit
              </Table.HeadCell>
              <Table.HeadCell className="text-center font-semibold">
                Izin
              </Table.HeadCell>
              <Table.HeadCell className="text-center font-semibold">
                Tanpa Keterangan
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="text-center">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Jumlah Sakit"
                      value={student.sick ?? ""}
                      className="w-full border-none p-0 text-center"
                      onChange={({ target }) => {
                        setStudent({ ...student, sick: target.value });
                      }}
                    />
                  </div>
                </Table.Cell>
                <Table.Cell className="text-center">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Jumlah Izin"
                      value={student.leave ?? ""}
                      className="w-full border-none p-0 text-center"
                      onChange={({ target }) => {
                        setStudent({ ...student, leave: target.value });
                      }}
                    />
                  </div>
                </Table.Cell>
                <Table.Cell className="text-center">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Jumlah Tanpa Keterangan"
                      value={student.absent ?? ""}
                      className="w-full border-none p-0 text-center"
                      onChange={({ target }) => {
                        setStudent({ ...student, absent: target.value });
                      }}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <form className="flex flex-col gap-4">
          <p className="text-2xl font-medium">Unggah Dokumen</p>

          <div className="flex flex-wrap gap-8">
            {files.data.map((f) => {
              return (
                <div
                  key={f.id}
                  className="flex h-44 w-64 flex-col items-center justify-center gap-2 rounded border border-solid border-black"
                >
                  <img
                    src={f.type}
                    alt="document image"
                    className="h-20 w-20"
                  />
                  <p className="capitalize">{f.name}</p>
                </div>
              );
            })}
          </div>

          <label className="text-dark-greenhover:cursor-pointer mb-8 flex h-16 w-64 cursor-pointer items-center justify-center gap-2 rounded bg-main-seagreen text-lg text-dark-green">
            <input type="file" className="hidden" />
            <PlusIcon className="h-8 w-8" /> Pilih Dokumen
          </label>

          <Flowbite theme={{ theme: customButtonTheme }}>
            <Button color="dark-green" size="lg">
              Unggah
            </Button>
          </Flowbite>
        </form>
      </div>
    </main>
  );
};

const AdminStudents = () => {
  const [studentPage, setStudentPage] = useState(false);
  const [student, setStudent] = useState({});
  const [search, setSearch] = useState("");

  const students = useQuery({
    queryKey: ["students"],
    queryFn: () => studentServices.getAllStudents(),
  });

  const files = useQuery({
    queryKey: ["files"],
    queryFn: () => fileServices.getAllFile(),
  });

  if (students.isLoading || files.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  if (studentPage) {
    return studentPageView(student, setStudent, setStudentPage, files);
  }

  return (
    <main className="h-screen overflow-auto font-poppins">
      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-8 px-4 lg:px-6">
        <h1 className="mb-6 block text-4xl font-semibold">
          Halaman Peserta Didik
        </h1>

        <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <div className="w-full sm:w-1/2">
            <Input
              label="Masukan Nama Siswa atau Kelas"
              color="green"
              icon={<MagnifyingGlassIcon />}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <Pagination count={4} variant="outlined" shape="rounded" />
          </div>
        </div>
        <div>
          <Box styles="w-full h-12 px-6 mb-2 flex justify-between items-center !bg-semi-green text-white">
            <p>No.</p>
            <p>Nama Siswa</p>
            <p>Kelas</p>
          </Box>
          <hr className="mb-2 border-t border-gray-400" />
          <div className="flex flex-col gap-2">
            {students.data
              .filter((s) =>
                s.name.toLowerCase().includes(search.toLowerCase()),
              )
              .map((s, i) => {
                return (
                  <Box
                    key={s.id}
                    styles="w-full h-12 px-6 flex justify-between items-center !bg-main-seagreen hover:cursor-pointer"
                    onClick={() => {
                      setStudent(s);
                      setStudentPage(true);
                    }}
                  >
                    <p>{i + 1}.</p>
                    <p>{s.name}</p>
                    <p>{s.class}</p>
                  </Box>
                );
              })}
            <div
              className="mt-2 flex h-20 w-full items-center justify-center gap-4 rounded-xl border border-solid border-gray-500 py-2 text-3xl text-blue-800 hover:cursor-pointer"
              onClick={() => {
                setStudent({});
                setStudentPage(true);
              }}
            >
              <PlusIcon className="h-10 w-10" /> Tambahkan Peserta Didik
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminStudents;
