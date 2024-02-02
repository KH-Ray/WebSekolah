import { Button, Carousel, Flowbite, Modal } from "flowbite-react";
import places from "../../places";
import { classNames, getFloorImages } from "../../helper";
import { useState } from "react";
import { PhotoIcon, PlusIcon } from "@heroicons/react/24/outline";
import {
  customButtonTheme,
  customModalTheme,
} from "../../themes/flowbiteThemes";

const schoolGroundsModal = (
  openSchoolGroundModal,
  setOpenSchoolGroundModal,
  place,
  setPlace,
) => {
  return (
    <Flowbite theme={{ theme: customModalTheme }}>
      <Modal
        dismissible
        show={openSchoolGroundModal}
        size="3xl"
        onClose={() => {
          setPlace(null);
          setOpenSchoolGroundModal(false);
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

const adminSchoolGroundModal = (
  photos,
  openAdminSchoolGroundModal,
  setAdminSchoolGroundModal,
) => {
  return (
    <Modal
      dismissible
      show={openAdminSchoolGroundModal}
      size="4xl"
      onClose={() => {
        setAdminSchoolGroundModal(false);
      }}
    >
      <Modal.Body>
        <form className="p-4 font-poppins">
          <div className="mb-8 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-2xl font-medium" htmlFor="Place title">
                Nama Ruangan
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="Place title"
                id="Place title"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="text-2xl font-medium"
                htmlFor="place description"
              >
                Deskirpsi Ruangan
              </label>
              <textarea
                id="place description"
                name="place description"
                className="h-52 rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
              ></textarea>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-4">
            <p className="text-2xl font-medium">Foto Ruangan</p>
            <div className="flex flex-wrap gap-8">
              {photos.map((photo, i) => {
                return (
                  <div
                    key={i}
                    className="flex h-44 w-64 flex-col items-center justify-center gap-2 rounded border border-solid border-black"
                  >
                    <PhotoIcon className="h-16 w-16" />
                    <p className="capitalize">{photo.title}</p>
                  </div>
                );
              })}
            </div>
            <label className="mb-8 flex h-16 w-64 items-center justify-center gap-2 rounded bg-[#d9d9d9] text-lg text-[#7f7f7f] hover:cursor-pointer">
              <input type="file" className="hidden" />
              <PlusIcon className="h-8 w-8" /> Pilih Dokumen
            </label>
          </div>

          <div className="flex justify-end">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="border-semi-green-fixedWidth" size="lg">
                Simpan
              </Button>
            </Flowbite>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const AdminSchoolGround = () => {
  const [place, setPlace] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openAdminSchoolGroundModal, setAdminSchoolGroundModal] =
    useState(false);
  const [openSchoolGroundModal, setOpenSchoolGroundModal] = useState(false);

  const placeObj = places[0];

  return (
    <main className="max-h-full min-h-screen p-12 font-poppins">
      {adminSchoolGroundModal(
        placeObj.photos,
        openAdminSchoolGroundModal,
        setAdminSchoolGroundModal,
      )}
      {schoolGroundsModal(
        openSchoolGroundModal,
        setOpenSchoolGroundModal,
        place,
        setPlace,
      )}

      <div className="h-full">
        <h1 className="mb-8 block text-4xl font-semibold" htmlFor="rabuceria">
          Halaman Denah
        </h1>

        <form>
          <div className="relative">
            <p className="absolute left-1/2 top-8 z-10 -translate-x-1/2 text-xl font-bold text-dark-green">
              Lantai {currentSlide + 1}
            </p>

            <Carousel
              className="mb-4 h-[682px] w-full rounded-t-lg bg-light-gray-green"
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

            <label className="absolute -bottom-2 right-4 mb-8 flex h-16 w-64 items-center justify-center gap-2 rounded bg-[#d9d9d9] text-lg text-[#7f7f7f] hover:cursor-pointer">
              <input type="file" className="hidden" />
              <PlusIcon className="h-8 w-8" /> Pilih Gambar
            </label>
          </div>

          <div>
            <div className="mb-4 grid grid-cols-1 gap-4 bg-light-gray-green px-16 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {currentSlide === 0
                ? placeObj.first.map((f, i) => (
                    <div
                      key={i}
                      className="flex h-14 w-full items-center justify-center rounded bg-dark-seagreen px-1 text-center text-sm font-semibold tracking-wide text-white hover:cursor-pointer"
                      onClick={() => {
                        setPlace(f);
                        setOpenSchoolGroundModal(true);
                      }}
                    >
                      {f.title}
                    </div>
                  ))
                : currentSlide === 1
                  ? placeObj.second.map((s, i) => (
                      <div
                        key={i}
                        className="flex h-14 w-full items-center justify-center rounded bg-dark-seagreen px-1 text-center text-sm font-semibold tracking-wide text-white hover:cursor-pointer"
                        onClick={() => {
                          setPlace(s);
                          setOpenSchoolGroundModal(true);
                        }}
                      >
                        {s.title}
                      </div>
                    ))
                  : placeObj.third.map((t, i) => (
                      <div
                        key={i}
                        className="flex h-14 w-full items-center justify-center rounded bg-dark-seagreen px-1 text-center text-sm font-semibold tracking-wide text-white hover:cursor-pointer"
                        onClick={() => {
                          setPlace(t);
                          setOpenSchoolGroundModal(true);
                        }}
                      >
                        {t.title}
                      </div>
                    ))}

              <button
                type="button"
                className="flex h-14 w-full items-center justify-center gap-2 rounded bg-[#d9d9d9] text-base text-[#7f7f7f] hover:cursor-pointer"
                onClick={() => {
                  setAdminSchoolGroundModal(true);
                }}
              >
                <PlusIcon className="h-6 w-6" /> Tambah
              </button>
            </div>

            <label className="mb-8 flex h-16 w-64 items-center justify-center gap-2 rounded bg-[#d9d9d9] text-lg text-[#7f7f7f] hover:cursor-pointer">
              <input type="file" className="hidden" />
              <PlusIcon className="h-8 w-8" /> Pilih Gambar
            </label>
          </div>

          <div className="flex justify-end">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="border-semi-green-fixedWidth" size="lg">
                Simpan
              </Button>
            </Flowbite>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AdminSchoolGround;
