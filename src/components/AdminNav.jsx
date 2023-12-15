import { Link } from "react-router-dom";
import { classNames } from "../helper";

const AdminNav = () => {
  const navigation = [
    { title: "Halaman Beranda", link: "/beranda", current: true },
    { title: "Profile Sekolah", link: "/profil", current: false },
    { title: "Staff Pengajar", link: "/guru", current: false },
    { title: "Program Kerja", link: "/organisasi", current: false },
    { title: "Berita", link: "/berita", current: false },
    { title: "Kegiatan", link: "/kegiatan", current: false },
    { title: "Peserta Didik", link: "/siswa", current: false },
    { title: "Rabu Ceria", link: "/rabuceria", current: false },
  ];

  return (
    <nav className="bg-gradient-to-b from-dark-blue to-main-blue font-poppins">
      <div className="flex flex-col gap-4 p-6">
        {navigation.map((nav, i) => (
          <Link key={i} to={`/admin${nav.link}`}>
            <div
              className={classNames(
                nav.current
                  ? "bg-white font-semibold text-dark-blue"
                  : "bg-main-gray/50 text-white",
                "flex items-center justify-center rounded-lg px-12 py-4 hover:cursor-pointer",
              )}
            >
              {nav.title}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AdminNav;
