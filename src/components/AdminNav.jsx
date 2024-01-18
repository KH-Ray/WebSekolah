import { Link } from "react-router-dom";
import { classNames } from "../helper";
import { useState } from "react";

const AdminNav = () => {
  const [navigations, setNavigations] = useState([
    { title: "Halaman Beranda", link: "/beranda", current: true },
    { title: "Profile Sekolah", link: "/profil", current: false },
    { title: "Staff Pengajar", link: "/guru", current: false },
    { title: "Program Kerja", link: "/organisasi", current: false },
    { title: "Berita", link: "/berita", current: false },
    { title: "Pengumuman", link: "/pengumuman", current: false },
    { title: "Ekstrakurikuler", link: "/ekstrakurikuler", current: false },
    { title: "Kegiatan", link: "/kegiatan", current: false },
    { title: "Peserta Didik", link: "/siswa", current: false },
    { title: "Rabu Ceria", link: "/rabuceria", current: false },
    { title: "Dikmensi", link: "/dikmensi", current: false },
    { title: "Galeri", link: "/galeri", current: false },
  ]);

  return (
    <nav className="bg-gradient-to-b from-dark-green to-main-seagreen font-poppins">
      <div className="flex flex-col gap-4 p-6">
        {navigations.map((nav, i) => (
          <Link key={i} to={`/admin${nav.link}`}>
            <button
              value={nav.title}
              onClick={(e) => {
                setNavigations(
                  navigations.map((nav) =>
                    nav.title === e.target.value
                      ? { ...nav, current: true }
                      : { ...nav, current: false },
                  ),
                );
              }}
              className={classNames(
                nav.current
                  ? "bg-white font-semibold text-dark-green"
                  : "bg-main-gray/50 text-white",
                "flex w-full items-center justify-center rounded-lg px-6 py-4 hover:cursor-pointer xl:px-12",
              )}
            >
              {nav.title}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AdminNav;
