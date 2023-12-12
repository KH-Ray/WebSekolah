import { classNames } from "../helper";

const AdminNav = () => {
  const navigation = [
    { title: "Halaman Beranda", current: true },
    { title: "Profile Sekolah", current: false },
    { title: "Staff Pengajar", current: false },
    { title: "Program Kerja", current: false },
    { title: "Berita", current: false },
    { title: "Kegiatan", current: false },
    { title: "Peserta Didik", current: false },
    { title: "Rabu Ceria", current: false },
  ];

  return (
    <nav className="bg-gradient-to-b from-dark-blue to-main-blue font-poppins">
      <div className="flex flex-col gap-4 p-6">
        {navigation.map((nav, i) => (
          <div
            key={i}
            className={classNames(
              nav.current
                ? "bg-white font-semibold text-dark-blue"
                : "bg-main-gray/50 text-white",
              "flex items-center justify-center rounded-lg px-12 py-4 hover:cursor-pointer",
            )}
          >
            {nav.title}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default AdminNav;
