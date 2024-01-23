import { PlusIcon } from "@heroicons/react/24/outline";
import Box from "../../components/PhotoBox";
import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import extracurriculerServices from "../../services/extracurriculer";
import fileServices from "../../services/files";
import { useQuery } from "@tanstack/react-query";
import { Modal, Spinner } from "flowbite-react";
import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const adminExtracurriculerModal = (
  extracurriculerData,
  setExtracurriculer,
  openModal,
  setOpenModal,
  files,
  tittle,
  setTittle,
  schedule,
  setSchedule,
  location,
  setLocation,
  description,
  setDescription,
  picture,
  setPicture,
  navigate,
  setMsg
) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('tittle', tittle);
    formData.append('schedule', schedule);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('picture', picture);

    try {
      const response = await axios.post('http://localhost:8080/admin/ekstrakurikuler', formData);

      console.log(response.data);

      if (response.data.Status === 'Success') {
        navigate('/ekstrakurikuler');
        setMsg('File Successfully Uploaded');
      } else {
        setMsg('Error');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error' + error.message);
    }
  };
  return (
    <Modal
      dismissible
      show={openModal}
      onClose={() => {
        setExtracurriculer("");
        setOpenModal(false);
      }}
    >
      <Modal.Body>
        <form className="font-poppins" onSubmit={handleSubmit}>
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="exracurricular title">
                Judul Extrakurikuler
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="exracurricular title"
                onChange={(e) => setTittle(e.target.value)}
                id="exracurricular title"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="exracurricular schedule">
                Waktu
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="date"
                name="exracurricular schedule"
                onChange={(e) => setSchedule(e.target.value)}
                id="exracurricular schedule"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="font-medium"
                htmlFor="exracurricular practice location"
              >
                Tempat Latihan
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="exracurricular practice location"
                onChange={(e) => setLocation(e.target.value)}
                id="exracurricular practice location"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="font-medium"
                htmlFor="exracurricular description"
              >
                Deskirpsi Extrakurikuler
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="exracurricular description"
                onChange={(e) => setDescription(e.target.value)}
                id="exracurricular description"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium">Unggah Gambar</p>
            <div className="flex flex-wrap gap-8">
              {files.data.map((f) => {
                return (
                  <div
                    key={f.id}
                    className="flex h-44 w-64 flex-col items-center justify-center gap-2 rounded border border-solid border-black"
                  >
                    <img
                      src={f.type}
                      alt="document image"
                      className="h-20 w-20"
                    />
                    <p className="capitalize">{f.name}</p>
                  </div>
                );
              })}
            </div>
            <label className="mb-8 flex h-16 w-64 items-center justify-center gap-2 rounded bg-[#d9d9d9] text-lg text-[#7f7f7f] hover:cursor-pointer">
              <input
                type="file"
                className="hidden"
                onChange={(e) => setPicture(e.target.files[0])} />
              <PlusIcon className="h-8 w-8" /> Pilih Dokumen
            </label>
          </div>
          <div className="ml-auto pb-6">
            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="border-semi-green-fixedWidth" size="lg" type="submit">
                Simpan
              </Button>
            </Flowbite>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};


const AdminExtracurricular = () => {
  const [openModal, setOpenModal] = useState(false);
  const [extracurricular, setExtracurricular] = useState("");
  const [tittle, setTittle] = useState('');
  const [schedule, setSchedule] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const extracurriculars = useQuery({
    queryKey: ["extracurriculer"],
    queryFn: () => extracurriculerServices.getAllExtracurriculer(),
  });

  const files = useQuery({
    queryKey: ["files"],
    queryFn: () => fileServices.getAllFile(),
  });

  if (extracurriculars.isLoading || files.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );
  
  if (openModal) {
    return adminExtracurriculerModal(
      extracurricular,
      setExtracurricular,
      openModal,
      setOpenModal,
      files,
      tittle,
      setTittle,
      schedule,
      setSchedule,
      location,
      setLocation,
      description,
      setDescription,
      picture,
      setPicture,
      navigate,
      setMsg
    );
  }

  return (
    <main className="font-poppins">
      <div className="focus-visible:border-none">
        {adminExtracurriculerModal(
          extracurricular,
          setExtracurricular,
          openModal,
          setOpenModal,
          files,
        )}
      </div>

      <div className="mx-auto my-12 flex max-w-7xl flex-col gap-8 px-4 lg:px-6">
        <h1 className="mb-6 block text-4xl font-semibold">
          Halaman Ekstrakurikuler
        </h1>
        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Favorit
          </h2>

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {extracurriculars.data[0].favorite.map((e) => (
              <Box
                key={e.id}
                styles="w-48 h-48 flex items-center justify-center text-white text-2xl capitalize hover:cursor-pointer"
                onClick={() => {
                  setExtracurricular(e.name);
                  setOpenModal(true);
                }}
              >
                {e.name}
              </Box>
            ))}

            <div
              className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 text-blue-800 hover:cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <PlusIcon className="h-16 w-16" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-2xl font-semibold">
            Ekstrakurikuler Pilihan
          </h2>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {extracurriculars.data[0].optional.map((e) => (
              <Box
                key={e.id}
                styles="w-48 h-48 flex items-center justify-center text-white text-2xl capitalize hover:cursor-pointer"
                onClick={() => {
                  setExtracurricular(e.name);
                  setOpenModal(true);
                }}
              >
                {e.name}
              </Box>
            ))}

            <div
              className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 text-blue-800 hover:cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <PlusIcon className="h-16 w-16" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminExtracurricular;
