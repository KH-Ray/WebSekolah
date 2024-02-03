import { Carousel } from "flowbite-react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import React, { useState, useEffect } from "react";
import axios from "axios";

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const introduction = (profil) => {
  return (
    <>
      <div>
        {
          profil.map(introItem => (
            <div key={introItem}>
              <div>{stripTags(introItem.kataPen)}</div>
            </div>
            )
          )
        }
      </div>
    </>
  );
};

const visionAndMission = (profil) => {
  return (
    <>
      <div>
          {
            profil.map(visimisiItem => (
            <div key={visimisiItem}>
              <div>{stripTags(visimisiItem.visimisi)}</div>
            </div>
            )
            )
          }
        </div>
    </>
  );
};

const structureOrganization = (profil) => {
  return (
    <div>
      {
        profil.map(strukturItem => (
        <div key={strukturItem}>
          <img src={`http://localhost:8080/${strukturItem.struktur}`} alt="Struktur Organisasi" />
        </div>
        )
        )
      }
    </div>
  );
};

const schoolGrounds = () => {
  return (
    <Carousel className="bg-light-gray-green h-[682px] w-full">
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
  const [profil, setprofil] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profilResponse = await axios.get("http://localhost:8080/profil");
        setprofil(profilResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);
  
  const [sections, setSections] = useState([
    { title: "Pengantar", current: true, content: introduction(profil) },
    { title: "Visi dan Misi", current: false, content: visionAndMission(profil) },
    {
      title: "Struktur Organisasi",
      current: false,
      content: structureOrganization(profil),
    },
    { title: "Denah Sekolah", current: false, content: schoolGrounds(profil) },
  ]);

  const currentPage = sections.filter((s) => s.current)[0];

  return (
    <main className="font-poppins">
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
              {currentPage.title === 'Pengantar' ? introduction(profil)
                : currentPage.title === 'Visi dan Misi' ? visionAndMission(profil)
                : structureOrganization(profil)}
            </article>
          </div>

          <aside className="space-y-2 justify-self-center">
            {sections.map((section, i) => (
              <div key={i} className="flex w-64 flex-col">
                <button
                  value={section.title}
                  className={classNames(
                    section.current
                      ? "bg-semi-green font-semibold text-white"
                      : "bg-light-green text-black",
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
        <div className="mx-auto my-12 max-w-7xl px-4 lg:px-6">
          <div className="mb-8 text-gray-blue">
            <button
              className="flex items-center gap-4 text-gray-600 hover:cursor-pointer"
              onClick={() =>
                setSections([
                  {
                    title: "Pengantar",
                    current: true,
                    content: introduction(profil),
                  },
                  {
                    title: "Visi dan Misi",
                    current: false,
                    content: visionAndMission(profil),
                  },
                  {
                    title: "Struktur Organisasi",
                    current: false,
                    content: structureOrganization(profil),
                  },
                  {
                    title: "Denah Sekolah",
                    current: false,
                    content: schoolGrounds(profil),
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
