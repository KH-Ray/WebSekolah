import Box from "../components/PhotoBox";

const TeachersPage = () => {
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
    <main className="font-poppins">
      <div className=" bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">staff pengajar</h1>
          <p className="text-xl">Beranda - Staff Pengajar</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <Box styles="lg:w-64 lg:h-64 w-56 h-56 mb-2"></Box>
          <p className="mb-2 text-xl font-bold">
            <strong>{teachersData[0].name}</strong>
          </p>
          <p>{teachersData[0].role}</p>
        </div>

        <div className="mx-auto flex flex-col justify-items-center gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-36 lg:px-6 xl:grid-cols-4">
          {teachersData.slice(1).map((teacher, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center"
            >
              <Box styles="lg:w-64 lg:h-64 w-56 h-56 mb-2"></Box>
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
