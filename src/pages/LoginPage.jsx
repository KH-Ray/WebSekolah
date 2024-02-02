import { Button } from "@material-tailwind/react";
import logo from "../images/cropped-bakdhatlogo.svg";
import { Flowbite, Spinner, Table, Button as FlowButton } from "flowbite-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import studentServices from "../services/students";
import fileServices from "../services/files";
import { customButtonTheme } from "../themes/flowbiteThemes";
import Box from "../components/PhotoBox";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const studentPageView = (student, setStudentPage, files) => {
  return (
    <main className="h-full font-poppins">
      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-8 px-4 lg:px-6">
        <h1 className="mb-6 block text-4xl font-semibold">
          Informasi Peserta Didik
        </h1>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex items-center justify-center sm:block">
            <Box styles="w-52 h-52"></Box>
          </div>

          <div className="grid grid-cols-2">
            <p>Nama Peserta Didik</p>
            <p className="before:mr-1 before:content-[':']">{student.name}</p>

            <p>Kelas Peserta Didik</p>
            <p className="before:mr-1 before:content-[':']">{student.class}</p>

            <p>NIS Peserta Didik</p>
            <p className="before:mr-1 before:content-[':']">{student.NIS}</p>

            <p>Alamat</p>
            <p className="leading-6 before:mr-1 before:content-[':']">
              {student.address}
            </p>

            <p>Status Peserta Didik</p>
            <p className="capitalize before:mr-1 before:content-[':']">
              {student.status}
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
                <Table.Cell className="text-center">{student.sick}</Table.Cell>
                <Table.Cell className="text-center">{student.leave}</Table.Cell>
                <Table.Cell className="text-center">
                  {student.absent}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>

        <form className="flex flex-col gap-4">
          <p className="text-2xl font-medium">Unggah Dokumen</p>

          <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
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

          <Flowbite theme={{ theme: customButtonTheme }}>
            <FlowButton color="dark-green" size="lg">
              Unduh
            </FlowButton>
          </Flowbite>
        </form>
      </div>
    </main>
  );
};

const LoginPage = () => {
  const [studentPage, setStudentPage] = useState(false);
  const [student, setStudent] = useState(null);
  const [username, setUsername] = useState("");
  const [NIS, setNIS] = useState("");

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
    return studentPageView(student, setStudentPage, files);
  }

  const findStudent = students.data.find(
    (f) => f.name === username && String(f.NIS) === NIS,
  );

  return (
    <main className="relative mx-auto flex h-[900px] max-w-7xl flex-col items-center justify-center gap-16 px-4 py-12 font-antonio lg:px-6">
      <div className="flex flex-col items-center justify-center justify-items-center gap-4">
        <img src={logo} alt="Logo Sekolah Bakti Idhata" className="h-48 w-48" />
        <p className="text-5xl font-semibold uppercase">smp bakti idhata</p>
        <p className="text-2xl font-light uppercase">cerdas terampil luhur</p>
      </div>

      <form
        className="flex w-full flex-col items-center justify-center gap-6 font-poppins"
        onSubmit={(e) => {
          e.preventDefault();

          if (!findStudent) {
            console.error("Student not found!");
            return;
          }

          setStudent(findStudent);
          setStudentPage(true);
        }}
      >
        <div className="text-gray-blue absolute left-4 top-12 font-poppins text-dark-gray lg:left-6">
          <Link
            to="/siswa"
            className="flex items-center gap-2 hover:cursor-pointer"
            onClick={() => setStudentPage(false)}
          >
            <ArrowLeftIcon className="h-6 w-6 fill-dark-gray" /> Kembali
          </Link>
        </div>

        <div className="flex w-1/2 flex-col gap-2">
          <label htmlFor="name">Nama</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded border-gray-400"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6 flex w-1/2 flex-col gap-2">
          <label htmlFor="nisn">NISN</label>
          <input
            type="password"
            id="nisn"
            name="nisn"
            className="rounded border-gray-400"
            onChange={(e) => setNIS(e.target.value)}
          />
        </div>

        <Button
          variant="outlined"
          className="w-36 border-2 border-blue-300 text-base capitalize"
          type="submit"
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default LoginPage;
