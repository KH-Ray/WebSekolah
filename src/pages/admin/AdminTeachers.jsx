import { PlusIcon } from "@heroicons/react/24/outline";
import Box from "../../components/PhotoBox";

const AdminTeachers = () => {
  const teachersData = [
    { name: "Nama Kepala Sekolah", role: "Kepala Sekolah" },
    { name: "Nama Wakil Kepala Sekolah", role: "Wakil Kepala Sekolah" },
    { name: "Nama Guru", role: "Guru Bidang" },
    { name: "Nama Guru", role: "Guru Bidang" },
    { name: "Nama Guru", role: "Guru Bidang" },
    { name: "Nama Staff", role: "Staff Bidang" },
    { name: "Nama Staff", role: "Staff Bidang" },
    { name: "Nama Staff", role: "Staff Bidang" },
  ];

  return (
    <main className="overflow-auto font-poppins">
      <div className="mx-auto my-12 flex max-w-7xl flex-col justify-items-center gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:px-6 xl:grid-cols-4">
        <div className="flex flex-col items-center justify-center text-center lg:translate-x-1/2 xl:col-start-2 xl:translate-x-0">
          <Box styles="w-48 h-48 mb-2"></Box>
          <p className="mb-2 text-lg font-bold">
            <strong>{teachersData[0].name}</strong>
          </p>
          <p>{teachersData[0].role}</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center sm:col-start-2 lg:col-start-3 lg:-translate-x-1/2 xl:translate-x-0">
          <Box styles="w-48 h-48 mb-2"></Box>
          <p className="mb-2 text-lg font-bold">
            <strong>{teachersData[1].name}</strong>
          </p>
          <p>{teachersData[1].role}</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center lg:col-start-1">
          <Box styles="w-48 h-48 mb-2"></Box>
          <p className="mb-2 text-lg font-bold">
            <strong>{teachersData[2].name}</strong>
          </p>
          <p>{teachersData[2].role}</p>
        </div>

        {teachersData.slice(3).map((teacher, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center text-center"
          >
            <Box styles="w-48 h-48 mb-2"></Box>
            <p className="mb-2 text-lg font-bold">
              <strong>{teacher.name}</strong>
            </p>
            <p>{teacher.role}</p>
          </div>
        ))}

        <div className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 bg-white hover:cursor-pointer">
          <PlusIcon className="h-16 w-16 stroke-dark-blue" />
        </div>
      </div>
    </main>
  );
};

export default AdminTeachers;
