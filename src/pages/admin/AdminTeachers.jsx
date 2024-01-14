import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Box from "../../components/PhotoBox";
import { Button, Flowbite, Modal, Spinner } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import teacherServices from "../../services/teachers";
import { useState } from "react";
import { customButtonTheme } from "../../themes/flowbiteThemes";

const adminTeacherModal = (
  teacherData,
  setTeacher,
  openModal,
  setOpenModal,
) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => {
        setTeacher("");
        setOpenModal(false);
      }}
    >
      <Modal.Body>
        <div className="flex flex-col gap-4 font-poppins">
          <div className="flex items-center justify-center">
            <Box styles="mb-2 h-48 w-48"></Box>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nama</label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="name"
                id="name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="position">Jabatan</label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="position"
                id="position"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="education">Pendidikan</label>
              <textarea
                name="education"
                id="education"
                className="h-24 resize-none rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="achievement">Prestasi</label>
              <textarea
                name="achievement"
                id="achievement"
                className="h-24 resize-none rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
              ></textarea>
            </div>

            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="border-semi-green" size="lg">
                Simpan
              </Button>
            </Flowbite>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const AdminTeachers = () => {
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
    <main className="overflow-auto font-poppins">
      <div className="focus-visible:border-none">
        {adminTeacherModal(teacher, setTeacher, openModal, setOpenModal)}
      </div>

      <div className="mx-auto my-12">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <Box
            styles="w-48 h-48 mb-2 relative group hover:cursor-pointer"
            onClick={() => {
              setTeacher(teachersData[0]);
              setOpenModal(true);
            }}
          >
            <button className="absolute right-2 top-2 hidden group-hover:inline">
              <XCircleIcon className="z-10 h-8 w-8 stroke-dark-gray hover:opacity-50" />
            </button>
          </Box>
          <p className="mb-2 text-lg font-bold">
            <strong>{teachersData[0].name}</strong>
          </p>
          <p>{teachersData[0].role}</p>
        </div>
        <div className="mx-auto flex flex-col justify-items-center gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:px-6 xl:grid-cols-4">
          {teachersData.slice(1).map((teacher) => (
            <div
              key={teacher.id}
              className="flex flex-col items-center justify-center text-center"
            >
              <Box
                styles="w-48 h-48 mb-2 relative group hover:cursor-pointer"
                onClick={() => {
                  setTeacher(teacher);
                  setOpenModal(true);
                }}
              >
                <button
                  className="absolute right-2 top-2 z-10 hidden group-hover:inline"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Delete Teacher");
                  }}
                >
                  <XCircleIcon className="z-10 h-8 w-8 stroke-dark-gray hover:opacity-50" />
                </button>
              </Box>
              <p className="mb-2 text-lg font-bold">
                <strong>{teacher.name}</strong>
              </p>
              <p>{teacher.role}</p>
            </div>
          ))}
          <div
            className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 bg-white hover:cursor-pointer"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <PlusIcon className="h-16 w-16 stroke-blue-800" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminTeachers;
