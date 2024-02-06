import { useEffect, useState } from "react";
import { classNames, getFloorImages } from "../helper";
import { Carousel, Flowbite, Modal, Spinner } from "flowbite-react";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import places from "../places";
import { customModalTheme } from "../themes/flowbiteThemes";

const schoolGroundsModal = (openModal, setOpenModal, place, setPlace) => {
  return (
    <Flowbite theme={{ theme: customModalTheme }}>
      <Modal
        dismissible
        show={openModal}
        size="3xl"
        onClose={() => {
          setPlace(null);
          setOpenModal(false);
        }}
      >
        <Modal.Body>
          <div className="flex flex-col gap-4 p-4 font-poppins">
            <p className="text-3xl font-bold">
              <strong>{place?.title}</strong>
            </p>
            <p className="leading-6">{place?.content}</p>
            <img
              src="https://i.ibb.co/6tKXXbV/foto-gedung-2.jpg"
              alt={`${place?.title} foto modal`}
            />
          </div>
        </Modal.Body>
      </Modal>
    </Flowbite>
  );
};

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
        <h1 className="mb-2 text-xl font-semibold">Tujuan SMP Bakti Idhata</h1>
        <p>
          Tujuan besar pendidikan SMP Bakti Idhata adalah mewujudkan visi dan
          melaksanakan misi agar tercapai lulusan yang berkualitas. Adapun
          ekspektasi dalam jangka waktu tertentu sebagai berikut.
        </p>
        <ol className="ms-4 list-outside list-decimal">
          <li>
            Terbentuknya sikap peserta didik yang bertakwa dan berakhlak mulia.
          </li>
          <li>
            Terbentuknya karakter peserta didik yang berkerpibadian tangguh dan
            mandiri dalam menghadapi tantangan dan menyelesaikan persoalan.
          </li>
          <li>
            Terwujudnya gagasan orisinal sebagai bagian dari ide kreatif dan
            inovatif peserta didik.
          </li>
          <li>Terciptanya iklim keamanan sekolah.</li>
          <li>Terciptanya iklim kebinekaan sekolah.</li>
          <li>
            Tercapainya mutu lulusan yang mampu menghargai dan menjunjung tinggi
            kearifan budaya lokal.
          </li>
        </ol>
      </div>
    </>
  );
};

const structureOrganization = () => {
  return (
    <img src="https://i.ibb.co/6H7WN7X/image-9.png" alt="Struktur Organisasi" />
  );
};

const schoolGrounds = (
  currentSlide,
  setCurrentSlide,
  arrayAt,
  setArrayAt,
  setPlace,
  setOpenModal,
) => {
  const placeObj = places[0];

  return (
    <div>
      <div className="relative">
        <p className="absolute left-1/2 top-8 z-10 -translate-x-1/2 text-xl font-bold text-dark-green">
          Lantai {currentSlide + 1}
        </p>

        <Carousel
          className="h-[341px] w-full rounded-t-lg bg-light-gray-green md:h-[682px]"
          indicators={false}
          onSlideChange={(index) => {
            setCurrentSlide(index);
          }}
          slide={false}
        >
          <img
            className="scale-75"
            src={getFloorImages().lantai1}
            alt="Denah Sekolah 1"
          />
          <img
            className="scale-75"
            src={getFloorImages().lantai2}
            alt="Denah Sekolah 2"
          />
          <img
            className="scale-75"
            src={getFloorImages().lantai3}
            alt="Denah Sekolah 3"
          />
        </Carousel>
        <div className="mb-4 flex w-full items-center justify-evenly rounded-b-lg bg-dark-seagreen py-8">
          <img
            className={classNames(
              currentSlide === 0
                ? "sm:scale-125"
                : "hidden sm:block sm:scale-100",
              "h-24 w-40",
            )}
            src={getFloorImages().lantai1NonLabel}
            alt="Denah Sekolah 1 Non-Label"
          />
          <img
            className={classNames(
              currentSlide === 1
                ? "sm:scale-125"
                : "hidden sm:block sm:scale-100",
              "h-24 w-40",
            )}
            src={getFloorImages().lantai2NonLabel}
            alt="Denah Sekolah 2 Non-Label"
          />
          <img
            className={classNames(
              currentSlide === 2
                ? "sm:scale-125"
                : "hidden sm:block sm:scale-100",
              "h-24 w-40",
            )}
            src={getFloorImages().lantai3NonLabel}
            alt="Denah Sekolah 3 Non-Label"
          />
        </div>
      </div>
      <div
        className={classNames(
          currentSlide === 0
            ? "justify-between gap-2 lg:gap-0"
            : "justify-center gap-2 lg:gap-20",
          "flex flex-col items-center rounded-lg bg-light-gray-green px-4 py-4 lg:flex-row lg:px-2 lg:py-8",
        )}
      >
        {currentSlide === 0 && (
          <>
            <ChevronUpIcon
              className="h-12 w-12 stroke-dark-green p-2 hover:cursor-pointer lg:hidden"
              onClick={() => {
                if (arrayAt <= 0) return;
                setArrayAt(Math.abs(arrayAt - 5));
              }}
            />
            <ChevronLeftIcon
              className="hidden h-12 w-12 stroke-dark-green p-2 hover:cursor-pointer lg:block"
              onClick={() => {
                if (arrayAt <= 0) return;
                setArrayAt(Math.abs(arrayAt - 5));
              }}
            />
          </>
        )}
        {/* {places.map((place) => {
          console.log(place.slice(arrayAt, arrayAt + 5));
          return place.slice(arrayAt, arrayAt + 5).map((p, i) => {
            return (
              <div
                key={i}
                className="w-full rounded bg-dark-seagreen px-6 py-3 text-center text-sm font-semibold tracking-wide text-white hover:cursor-pointer lg:w-auto"
                onClick={() => {
                  setPlace(p);
                  setOpenModal(true);
                }}
              >
                {p.title}
              </div>
            );
          });
        })} */}
        {currentSlide === 0
          ? placeObj.first.slice(arrayAt, arrayAt + 5).map((f, i) => (
              <div
                key={i}
                className="w-full rounded bg-dark-seagreen px-6 py-3 text-center text-sm font-semibold tracking-wide text-white hover:cursor-pointer lg:w-auto"
                onClick={() => {
                  setPlace(f);
                  setOpenModal(true);
                }}
              >
                {f.title}
              </div>
            ))
          : currentSlide === 1
            ? placeObj.second.map((s, i) => (
                <div
                  key={i}
                  className="w-full rounded bg-dark-seagreen px-6 py-3 text-center text-sm font-semibold tracking-wide text-white hover:cursor-pointer lg:w-auto"
                  onClick={() => {
                    setPlace(s);
                    setOpenModal(true);
                  }}
                >
                  {s.title}
                </div>
              ))
            : placeObj.third.map((t, i) => (
                <div
                  key={i}
                  className="w-full rounded bg-dark-seagreen px-6 py-3 text-center text-sm font-semibold tracking-wide text-white hover:cursor-pointer lg:w-auto"
                  onClick={() => {
                    setPlace(t);
                    setOpenModal(true);
                  }}
                >
                  {t.title}
                </div>
              ))}
        {currentSlide === 0 && (
          <>
            <ChevronDownIcon
              className="h-12 w-12 stroke-dark-green p-2 hover:cursor-pointer lg:hidden"
              onClick={() => {
                if (arrayAt >= 15) return;
                setArrayAt(Math.abs(arrayAt + 5));
              }}
            />
            <ChevronRightIcon
              className="hidden h-12 w-12 stroke-dark-green p-2 hover:cursor-pointer lg:block"
              onClick={() => {
                if (arrayAt >= 15) return;
                setArrayAt(Math.abs(arrayAt + 5));
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [place, setPlace] = useState(null);
  const [arrayAt, setArrayAt] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sections, setSections] = useState([
    { title: "Pengantar", current: true, content: introduction() },
    { title: "Visi dan Misi", current: false, content: visionAndMission() },
    {
      title: "Struktur Organisasi",
      current: false,
      content: structureOrganization(),
    },
    {
      title: "Denah Sekolah",
      current: false,
      content: schoolGrounds(
        currentSlide,
        setCurrentSlide,
        arrayAt,
        setArrayAt,
        setPlace,
        setOpenModal,
      ),
    },
  ]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  const handleArrayChange = (index) => {
    setArrayAt(index);
  };

  const handlePlaceChange = (p) => {
    setPlace(p);
  };

  const handleModalChange = (m) => {
    setOpenModal(m);
  };

  const currentPage = sections.filter((s) => s.current)[0];

  useEffect(() => {
    setSections(
      sections.map((s) => ({
        ...s,
        content:
          s.title === "Denah Sekolah"
            ? schoolGrounds(
                currentSlide,
                handleSlideChange,
                arrayAt,
                handleArrayChange,
                handlePlaceChange,
                handleModalChange,
              )
            : s.content,
      })),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, setCurrentSlide, arrayAt, setArrayAt]);

  return (
    <main className="font-poppins">
      <div className="focus-visible:border-none">
        {schoolGroundsModal(
          openModal,
          handleModalChange,
          place,
          handlePlaceChange,
        )}
      </div>

      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">profil sekolah</h1>
          <p className="text-xl">Beranda - Profil Sekolah</p>
        </div>
      </div>

      {currentPage.title !== "Denah Sekolah" ? (
        <div className="mx-auto my-12 flex max-w-7xl flex-col-reverse gap-8 px-4 leading-6 sm:grid sm:grid-cols-[60fr_40fr] sm:gap-0 lg:px-6">
          <div>
            <h1 className="mb-2 py-2 text-2xl font-semibold uppercase">
              {currentPage.title}
            </h1>
            <article className="flex flex-col gap-6 text-justify">
              {currentPage.content}
            </article>
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
      ) : (
        <div className="mx-auto my-12 max-w-7xl px-4 lg:px-6">
          <div className="text-gray-blue mb-8">
            <button
              className="flex items-center gap-4 text-gray-600 hover:cursor-pointer"
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
                    content: schoolGrounds(
                      currentSlide,
                      handleSlideChange,
                      arrayAt,
                      handleArrayChange,
                      handlePlaceChange,
                      handleModalChange,
                    ),
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
