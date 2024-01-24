import { useQuery } from "@tanstack/react-query";
import teacherServices from "../services/teachers";
import { Flowbite, Modal, Spinner } from "flowbite-react";
import { useState } from "react";
import { customModalTheme } from "../themes/flowbiteThemes";
import Box from "../components/PhotoBox";

const adminTeacherModal = (
  teacherData,
  setTeacher,
  openModal,
  setOpenModal,
) => {
  return (
    <Flowbite theme={{ theme: customModalTheme }}>
      <Modal
        dismissible
        show={openModal}
        onClose={() => {
          setTeacher("");
          setOpenModal(false);
        }}
      >
        <Modal.Body>
          <div className="flex flex-col items-center gap-8 p-2 sm:flex-row sm:p-8">
            <div className="bottom-1/2 h-60 w-60 flex-none">
              <Box styles="h-60 w-60"></Box>
              {/* <img
                src={teacherData.image}
                alt={teacherData.name}
                className="h-60 w-60"
              /> */}
            </div>

            <div className="flex w-full flex-col justify-evenly gap-4 font-poppins">
              <div className="space-y-1">
                <strong className="text-xl font-bold">
                  {teacherData.name}
                </strong>
                <p className="leading-6">{teacherData.role}</p>
              </div>

              <div className="space-y-1">
                <strong className="font-bold">Pendidikan</strong>
                <p className="leading-6">{teacherData.education}</p>
              </div>

              <div className="space-y-1">
                <strong className="font-bold">Prestasi</strong>
                <p className="leading-6">{teacherData.achievement}</p>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
};

const TeachersPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [teacher, setTeacher] = useState("");

  const teachers = useQuery({
    queryKey: ["teachers"],
    queryFn: () => teacherServices.getAllTeachers(),
  });

  if (teachers.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  const teachersData = teachers.data;

  return (
    <main className="font-poppins">
      <div className="flex focus-visible:border-none">
        {adminTeacherModal(teacher, setTeacher, openModal, setOpenModal)}
      </div>

      <div className=" bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">staff pengajar</h1>
          <p className="text-xl">Beranda - Staff Pengajar</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl">
        <div
          className="mb-12 flex flex-col items-center justify-center text-center hover:cursor-pointer"
          onClick={() => {
            setOpenModal(true);
            setTeacher(teachersData[0]);
          }}
        >
          <Box styles="mb-2 h-56 w-56 lg:h-64 lg:w-64"></Box>
          {/* <img
            src={teachersData[0].image}
            alt={teachersData[0].name}
            className="mb-2 h-56 w-56 lg:h-64 lg:w-64"
          /> */}
          <p className="mb-2 text-xl font-bold">
            <strong>{teachersData[0].name}</strong>
          </p>
          <p>{teachersData[0].role}</p>
        </div>

        <div className="mx-auto flex flex-col justify-items-center gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-36 lg:px-6 xl:grid-cols-4">
          {teachersData.slice(1).map((teacher) => (
            <div
              key={teacher.id}
              className="flex flex-col items-center justify-center text-center hover:cursor-pointer"
              onClick={() => {
                setOpenModal(true);
                setTeacher(teacher);
              }}
            >
              <Box styles="mb-2 h-56 w-56 lg:h-64 lg:w-64"></Box>
              {/* <img
                src={teacher.image}
                alt={teacher.name}
                className="mb-2 h-56 w-56 lg:h-64 lg:w-64"
              /> */}
              <p className="mb-2 text-xl font-bold">
                <strong>{teacher.name}</strong>
              </p>
              <p>{teacher.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TeachersPage;
