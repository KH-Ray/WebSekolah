import { useState } from "react";
import { classNames } from "../helper";

const intracurricular = () => {
  return (
    <p>
      SMP Bakti Idhata menerapkan proses pembelajaran yang mengintegrasikan
      karakteristik dan budaya sekolah sebagai pengalaman bermakna. Ini termasuk
      pembelajaran intrakurikuler, projek penguatan profil pelajar Pancasila,
      dan ekstrakurikuler. Sesuai Keputusan Menteri Pendidikan, Kebudayaan,
      Riset, dan Teknologi Nomor 56/M/2022, struktur kurikulum di pendidikan
      menengah terdiri dari dua kegiatan utama: pembelajaran intrakurikuler dan
      projek penguatan profil pelajar Pancasila. Pembelajaran intrakurikuler
      diarahkan untuk menjadi pengalaman menyenangkan dengan dukungan
      sumber-sumber belajar dari lingkungan sekitar, teknologi, dan sumber
      lainnya. Kegiatan ini memperhatikan prinsip pembelajaran dan asesmen, di
      mana pembelajaran dan asesmen membentuk satu siklus untuk mengecek
      efektivitas pembelajaran yang berfokus pada perkembangan kompetensi
      peserta didik. Pembelajaran intrakurikuler dilaksanakan melalui tatap muka
      dengan berbagai metode, model, pendekatan, dan strategi pembelajaran.
    </p>
  );
};

const cocurricular = () => {
  return (
    <p>
      Projek Penguatan Profil Pelajar Pancasila (P5) di SMP Bakti Idhata adalah
      kegiatan kokurikuler berbasis proyek yang dirancang untuk mencapai Profil
      Pelajar Pancasila berdasarkan Standar Kompetensi Lulusan (SKL). Proses
      pembelajaran berbasis proyek ini mengikuti model Pembelajaran Berbasis
      Proyek (PJBL) dengan langkah-langkah seperti pemilihan topik, perancangan,
      penjadwalan, pemantauan, pengujian hasil, dan evaluasi pengalaman.
    </p>
  );
};

const extracurricular = () => {
  return (
    <p>
      Kegiatan ekstrakurikuler merupakan wadah untuk mengembangkan potensi,
      bakat, minat, kemampuan, kepribadian, kerjasama, dan kemandirian peserta
      didik secara optimal. Kegiatannya dilakukan di luar pembelajaran
      intrakurikuler. Ekstrakurikuler SMP Bakti Idhata bertujuan untuk
      mengembangkan kepribadian, bakat, minat, dan kemampuan peserta didik yang
      lebih luas.
    </p>
  );
};

const LearningPage = () => {
  const [sections, setSections] = useState([
    { title: "Intrakurikuler", current: true, content: intracurricular() },
    { title: "Ko - Kurikuler", current: false, content: cocurricular() },
    { title: "Ekstrakurikuler", current: false, content: extracurricular() },
  ]);

  const currentPage = sections.filter((s) => s.current)[0];

  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-3xl font-semibold uppercase md:text-6xl">
            pengorganisasian pembelajaran
          </h1>
          <p className="text-lg md:text-xl">
            Beranda - Pengorganisasian Pembelajaran
          </p>
        </div>
      </div>

      <div className="mx-auto my-12 flex max-w-7xl flex-col-reverse gap-8 px-4 leading-6 sm:grid sm:grid-cols-[60fr_40fr] sm:gap-0 lg:px-6">
        <div>
          <div className="mx-auto my-12 flex max-w-7xl flex-col-reverse gap-8 px-4 leading-6 sm:gap-0 lg:px-6">
            <div>
              <h1 className="mb-2 py-2 text-2xl font-semibold">
                {currentPage.title}
              </h1>
              <article className="flex flex-col gap-6 text-justify">
                {currentPage.content}
              </article>
            </div>
          </div>
        </div>
        <aside className="space-y-2 justify-self-center">
          {sections.map((section, i) => (
            <div key={i} className="flex w-full flex-col sm:w-64">
              <button
                value={section.title}
                className={classNames(
                  section.current
                    ? "bg-semi-green font-semibold text-white"
                    : "bg-light-green text-black",
                  "w-full rounded-lg px-12 py-4",
                )}
                onClick={(e) => {
                  setSections(
                    sections.map((s) =>
                      s.title === e.target.value
                        ? { ...s, current: true }
                        : { ...s, current: false },
                    ),
                  );
                }}
              >
                {section.title}
              </button>
            </div>
          ))}
        </aside>
      </div>
    </main>
  );
};

export default LearningPage;
