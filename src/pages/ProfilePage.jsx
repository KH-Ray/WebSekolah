import { useState } from "react";
import { classNames } from "../helper";
import { Carousel } from "flowbite-react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const introduction = () => {

  return (
    <>
      <p>
        Tantangan pendidikan di SMP Bakti Idhata saat ini adalah bagaimana
        sekolah mampu melakukan tata kelola pendidikan yang terencana, terarah,
        dan berkelanjutan. Hal utama yang harus dilakukan adalah menumbuhkan
        pola pikir positif terkait dengan sebuah perubahan. Pola pikir yang
        positif akan mendukung akses perubahan ke arah hasil pendidikan yang
        bermutu.
      </p>

      <p>
        Terencana. Pendidikan di SMP Bakti Idhata perlu melakukan perencanaan
        yang disesuaikan dengan kebijakan pendidikan. Beberapa kebijakan
        pendidikan mengarah pada Merdeka Belajar, seperti implementasi
        kurikulum, pemanfaatan Platform Merdeka Mengajar (PMM), sekolah
        komunits, dan komunitas belajar.
      </p>

      <p>
        SMP Bakti Idhata berupaya menyiapkan akses pendukung dan penyesuaiannya.
        Akses pendukung berupa kesiapan sumber daya manusia, sarana prasarana,
        kualitas pembelajaran, dan pembiayaan. Selanjutnya sekolah harus
        memutuskan strategi pengelolaan pendidikan dengan mempertimbangkan tahap
        perkembangan, tingkat pencapaian, kebutuhan belajar, dan karakteristik
        peserta didik. Terdapat lima aspek utama untuk mendukung hal tersebut,
        yakni adanya potensi diri, pemberdayaan diri, peningkatan diri,
        pemahaman diri, dan peran sosial. Kelima aspek utama itu diselenggarakan
        dalam proses belajar yang interaktif, inspiratif, menyenangkan,
        menantang, dan memotivasi. Selain itu, sekolah memberikan ruang yang
        cukup bagi prakarsa, kreativitas, kemandirian sesuai dengan bakat,
        minat, dan perkembangan fisik, serta psikologis peserta didik.
      </p>

      <p>
        Delapan Standar Kompetensi Lulusan (SKL) SMP merupakan core yang
        pemenuhannya dapat diimplementasikan melalui program- program sekolah.
        Karakteristik utama dalam upaya pencapaian tersebut adalah kegiatan-
        kegiatan yang mencerminkan karakteristik profil pelajar Pancasila,
        literasi, dan numerasi.
      </p>

      <div>
        <ol className="ms-4 list-outside list-decimal">
          <li>
            Pembelajaran berbasis projek untuk pengembangan soft skills dan
            karakter sesuai profil Pelajar Pancasila (P3).
          </li>
          <li>
            Fokus pada materi esensial sehingga ada waktu cukup untuk
            pembelajaran yang mendalam bagi kompetensi dasar seperti literasi
            dan numerasi.
          </li>
          <li>
            Fleksibilitas guru untuk melakukan pembelajaran yang berdiferensiasi
            sesuai dengan kemampuan peserta didik dan melakukan penyesuaian
            dengan konteks dan muatan lokal.
          </li>
        </ol>
      </div>
    </>
  );
};

const visionAndMission = () => {
  return (
    <>
      <div>
        <h1 className="mb-2 text-xl font-semibold">Visi SMP Bakti Idhata</h1>
        <p>
          Mengintegrasikan proses pendidikan sehingga terwujudnya peserta didik
          yang berakhlak mulia, berkepribadian tangguh, mandiri, kreatif,
          inovatif, dan menjunjung tinggi budaya bangsa.
        </p>
      </div>

      <div>
        <h1 className="mb-2 text-xl font-semibold">Misi SMP Bakti Idhata</h1>
        <ol className="ms-4 list-outside list-decimal">
          <li>
            Menyelenggarakan pendidikan yang mencerminkan ketakwaan dan akhlak
            mulia;
          </li>
          <li>
            Membiasakan penanaman sikap yang mencirikan kepribadian tangguh;
          </li>
          <li>
            Menyelenggarakan proses pembelajaran yang melatih peserta didik
            untuk berjiwa mandiri;
          </li>
          <li>
            Menciptakan lingkungan belajar yang mengembangkan kreativitas peseta
            didik;
          </li>
          <li>
            Mengoptimalkan kegiatan yang memotivasi peserta didik untuk
            melakukan inovasi; dan
          </li>
          <li>
            Menciptakan lingkungan sekolah yang dan menjunjung tinggi budaya
            lokal.
          </li>
        </ol>
      </div>

      <div>
        <h1 className="mb-2 text-xl font-semibold">Visi SMP Bakti Idhata</h1>
        <p>
          Mengintegrasikan proses pendidikan sehingga terwujudnya peserta didik
          yang berakhlak mulia, berkepribadian tangguh, mandiri, kreatif,
          inovatif, dan menjunjung tinggi budaya bangsa.
        </p>
      </div>
    </>
  );
};

const structureOrganization = () => {
  return (
    <img src="https://i.ibb.co/6H7WN7X/image-9.png" alt="Struktur Organisasi" />
  );
};

const schoolGrounds = () => {
  return (
    <Carousel className="h-[682px] w-full bg-main-blue">
      <img
        src="https://i.ibb.co/9VcWzL4/bismillah-denah-sekolah-lantai-1-fix.png"
        alt="Denah Sekolah 1"
      />
      <img
        src="https://i.ibb.co/m6PJnWv/bismillah-denah-sekolah-lantai-2-fix.png"
        alt="Denah Sekolah 2"
      />
      <img
        src="https://i.ibb.co/t21VcXP/bismillah-denah-sekolah-lantai-3-fix-1.png"
        alt="Denah Sekolah 3"
      />
    </Carousel>
  );
};

const ProfilePage = () => {
  const [sections, setSections] = useState([
    { title: "Pengantar", current: true, content: introduction() },
    { title: "Visi dan Misi", current: false, content: visionAndMission() },
    {
      title: "Struktur Organisasi",
      current: false,
      content: structureOrganization(),
    },
    { title: "Denah Sekolah", current: false, content: schoolGrounds() },
  ]);

  const currentPage = sections.filter((s) => s.current)[0];

  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">profil sekolah</h1>
          <p className="text-xl">Beranda - Staff Pengajar</p>
        </div>
      </div>

      {currentPage.title !== "Denah Sekolah" ? (
        <div className="mx-auto my-12 flex max-w-7xl flex-col-reverse gap-8 px-4 leading-6 sm:grid sm:grid-cols-[60fr_40fr] sm:gap-0 lg:px-6">
          <div>
            <h1 className="mb-2 py-2 text-2xl font-semibold uppercase">
              {currentPage.title}
            </h1>
            <article className="flex flex-col gap-6">
              {currentPage.content}
            </article>
          </div>

          <aside className="space-y-2 justify-self-center">
            {sections.map((section, i) => (
              <div key={i} className="flex w-full flex-col">
                <button
                  value={section.title}
                  className={classNames(
                    section.current
                      ? "bg-main-blue font-semibold text-white"
                      : "bg-light-blue text-black",
                    "rounded-lg px-12 py-4",
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
      ) : (
        <div className="my-12 max-w-7xl px-4 lg:px-6">
          <div className="mb-8 text-gray-blue">
            <button
              className="flex items-center gap-4 hover:cursor-pointer"
              onClick={() =>
                setSections([
                  {
                    title: "Pengantar",
                    current: true,
                    content: introduction(),
                  },
                  {
                    title: "Visi dan Misi",
                    current: false,
                    content: visionAndMission(),
                  },
                  {
                    title: "Struktur Organisasi",
                    current: false,
                    content: structureOrganization(),
                  },
                  {
                    title: "Denah Sekolah",
                    current: false,
                    content: schoolGrounds(),
                  },
                ])
              }
            >
              <ArrowLeftIcon className="h-6 w-6" /> Kembali
            </button>
          </div>

          <div>
            <h1 className="mb-2 py-2 text-2xl font-semibold uppercase">
              {currentPage.title}
            </h1>
            <article className="flex max-w-7xl flex-col gap-6">
              {currentPage.content}
            </article>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProfilePage;
