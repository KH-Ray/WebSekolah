import { Modal, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";

const extracurricularModal = (
  openModal,
  setOpenModal,
  ekskul,
  setEkskul
) => {
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => {
        setOpenModal(false);
        setEkskul({
          data: [],
          isLoading: false,
        });
      }}
    >
      <Modal.Body>  
        <div className="flex flex-col gap-4 font-poppins leading-5">
          <h1 className="text-3xl font-bold capitalize">
            {ekskul?.tittle}
          </h1>

          <div>
            <p>Waktu : Hari {ekskul?.schedule}</p>
            <p>Tempat: {ekskul?.location}</p>
          </div>

          <p>{ekskul?.description}</p>

          <div className="flex justify-center">
            <img
              className="h-48 w-64 rounded-lg"
              src={`http://localhost:8080/${ekskul?.picture}`}
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
  const [ekskul, setEkskul] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ekskulResponse = await axios.get("http://localhost:8080/ekstrakurikuler");
        setEkskul({
          data: ekskulResponse.data,
          isLoading: false,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setEkskul({
          data: [],
          isLoading: false,
        });
      }
    };
    fetchData();
  }, []);

  if (ekskul.isLoading)
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
          openModal,
          setOpenModal,
          ekskul,
          setEkskul
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
            {ekskul.data?.map((e,id) => (
              <div
                key={id}
                onClick={() => {
                  setEkskul(e);
                  setOpenModal(true);
                }}
                className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg text-2xl capitalize text-white hover:cursor-pointer sm:w-56 lg:h-64 lg:w-64"
              >
                <img
                  className="h-full w-full object-cover brightness-50"
                  src={`http://localhost:8080/${e.picture}`}
                  alt=""
                />
                <p className="absolute top-1/2 -translate-y-1/2 font-bold text-white">
                  {e.tittle}
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
            {ekskul.data?.map((e, id) => (
              <div
                key={id}
                onClick={() => {
                  setEkskul(e);
                  setOpenModal(true);
                }}
                className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg text-2xl capitalize text-white hover:cursor-pointer sm:w-56 lg:h-64 lg:w-64"
              >
                <img
                  className="h-full w-full object-cover brightness-50"
                  src={`http://localhost:8080/${e.picture}`}
                  alt=""
                />
                <p className="absolute top-1/2 -translate-y-1/2 font-bold text-white">
                  {e.tittle}
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
