import { Modal, Spinner } from "flowbite-react";
import Box from "../components/PhotoBox";
import { useQuery } from "@tanstack/react-query";
import extracurriculerServices from "../services/extracurriculer";
import { useState } from "react";

const extracurricularModal = (
  extracurricular,
  setExtracurricular,
  openModal,
  setOpenModal,
) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => {
        setExtracurricular("");
        setOpenModal(false);
      }}
    >
      <Modal.Body>
        <div className="flex flex-col gap-4 font-poppins leading-5">
          <h1 className="text-3xl font-bold capitalize">
            {extracurricular.name}
          </h1>

          <div>
            <p>Waktu : Hari Sabtu 09.00 - 10.30 WIB</p>
            <p>Tempat: Ruang Audio Visual</p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            dignissimos eum amet cum soluta id recusandae architecto! Ab labore
            eos nulla magni omnis beatae fuga odio pariatur aspernatur fugiat
            eveniet ipsa inventore atque totam officiis, maxime aliquid ea modi,
            nisi voluptatibus itaque molestiae, cum sit odit. Quod earum minima
            inventore, mollitia aspernatur esse architecto ipsum consequatur
            similique odit fugiat doloremque maxime, pariatur voluptatum est
            culpa officiis voluptas deleniti repellat exercitationem placeat ea
            error vitae! Accusantium tempora repellat earum, assumenda inventore
            atque, itaque suscipit, rerum ab porro praesentium non debitis quo
            saepe soluta. Hic odio quod, adipisci nam nisi at quam?
          </p>

          <div className="flex justify-center">
            <img
              className="h-48 w-64 rounded-lg"
              src={extracurricular.image}
              alt=""
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

const ExtracurricularPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [extracurricular, setExtracurricular] = useState("");

  const extracurriculars = useQuery({
    queryKey: ["extracurriculer"],
    queryFn: () => extracurriculerServices.getAllExtracurriculer(),
  });

  if (extracurriculars.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );

  return (
    <main className="font-poppins">
      <div className="focus-visible:border-none">
        {extracurricularModal(
          extracurricular,
          setExtracurricular,
          openModal,
          setOpenModal,
        )}
      </div>

      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-4xl font-semibold uppercase lg:text-6xl">
            ekstrakurikuler
          </h1>
          <p className="text-lg lg:text-xl">Beranda - Ekstrakurikuler</p>
        </div>
      </div>

      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-8 px-4 lg:px-6">
        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Favorit
          </h2>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-y-12 xl:grid-cols-4">
            {extracurriculars.data[0].favorite.map((e) => (
              <div
                key={e.id}
                onClick={() => {
                  setExtracurricular(e);
                  setOpenModal(true);
                }}
                className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg text-2xl capitalize text-white hover:cursor-pointer sm:w-56 lg:h-64 lg:w-64"
              >
                <img
                  className="h-full w-full object-cover brightness-50"
                  src={e.image}
                  alt=""
                />
                <p className="absolute top-1/2 -translate-y-1/2 font-bold text-white">
                  {e.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Pilihan
          </h2>
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-y-12 xl:grid-cols-4">
            {extracurriculars.data[0].optional.map((e) => (
              <div
                key={e.id}
                onClick={() => {
                  setExtracurricular(e);
                  setOpenModal(true);
                }}
                className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg text-2xl capitalize text-white hover:cursor-pointer sm:w-56 lg:h-64 lg:w-64"
              >
                <img
                  className="h-full w-full object-cover brightness-50"
                  src={e.image}
                  alt=""
                />
                <p className="absolute top-1/2 -translate-y-1/2 font-bold text-white">
                  {e.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExtracurricularPage;
