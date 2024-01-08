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
            <p>Waktu : Hari {extracurricular.time}</p>
            <p>Tempat: {extracurricular.room}</p>
          </div>

          <p>{extracurricular.description}</p>

          <div className="flex justify-center">
            <img
              className="h-48 w-64 rounded-lg"
              src={extracurricular.imageInModal}
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
          <h1 className="whitespace-pre-wrap break-all text-6xl font-semibold uppercase">
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
