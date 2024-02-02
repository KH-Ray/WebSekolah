import { PlusIcon } from "@heroicons/react/24/outline";
import Box from "../../components/PhotoBox";
import { Button, Flowbite } from "flowbite-react";
import { customButtonTheme } from "../../themes/flowbiteThemes";
import fileServices from "../../services/files";
import { useQuery } from "@tanstack/react-query";
import { Modal, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setId } from "@material-tailwind/react/components/Tabs/TabsContext";

const adminExtracurriculerModal = (
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
  setMsg,
  selectedEkskulId,
  setselectedEkskulId,
  handleSubmit,
  handleEditEkskuls
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
        <form className="font-poppins" onSubmit={handleSubmit}>
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="exracurricular title">
                Judul Extrakurikuler Favorite
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="exracurricular title"
                value={tittle}
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
                value={schedule}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                id="exracurricular practice location"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="font-medium"
                htmlFor="exracurricular description"
              >
                Deskripsi Extrakurikuler
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="exracurricular description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="exracurricular description"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium">Unggah Gambar</p>
            <div className="flex flex-wrap gap-8">
              {files.data?.map((f) => {
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
                onChange={(e) => setPicture(e.target.files[0])}
              />
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

const adminExtracurriculerModal1 = (
  extracurricular1,
  setExtracurricular1,
  openModal1,
  setOpenModal1,
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
  setMsg,
  selectedEkskulId,
  setselectedEkskulId,
  handleSubmit1,
  handleEditEkskuls1
) => {
  return (
    <Modal
      dismissible
      show={openModal1}
      onClose={() => {
        setExtracurricular1("");
        setOpenModal1(false);
      }}
    >
      <Modal.Body>
        <form className="font-poppins" onSubmit={handleSubmit1}>
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="exracurricular title">
                Judul Extrakurikuler Pilihan
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="exracurricular title"
                value={tittle}
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
                value={schedule}
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                id="exracurricular practice location"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="font-medium"
                htmlFor="exracurricular description"
              >
                Deskripsi Extrakurikuler
              </label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="exracurricular description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="exracurricular description"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-medium">Unggah Gambar</p>
            <div className="flex flex-wrap gap-8">
              {files.data?.map((f) => {
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
                onChange={(e) => setPicture(e.target.files[0])}
              />
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
  const [openModal1, setOpenModal1] = useState(false);
  const [extracurricular, setExtracurricular] = useState("");
  const [extracurricular1, setExtracurricular1] = useState("");
  const [tittle, setTittle] = useState('');
  const [schedule, setSchedule] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState('');
  const [msg, setMsg] = useState('');
  const [selectedEkskulId, setselectedEkskulId] = useState(null);
  const [ekskul, setEkskul] = useState([]);
  const [ekskul1, setEkskul1] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ekskulResponse = await axios.get("http://localhost:8080/ekstrakurikuler/favorite");
        setEkskul(ekskulResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ekskulResponse = await axios.get("http://localhost:8080/ekstrakurikuler/pilihan");
        setEkskul1(ekskulResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  const handleEditEkskuls = (selectedEkskul) => {
    setselectedEkskulId(selectedEkskul.ID);
    setPicture(selectedEkskul.picture);
    setTittle(selectedEkskul.tittle);
    setSchedule(selectedEkskul.schedule);
    setLocation(selectedEkskul.location);
    setDescription(selectedEkskul.description);

    setOpenModal(true);
  };

  const handleEditEkskuls1 = (selectedEkskul) => {
    setselectedEkskulId(selectedEkskul.ID);
    setPicture(selectedEkskul.picture);
    setTittle(selectedEkskul.tittle);
    setSchedule(selectedEkskul.schedule);
    setLocation(selectedEkskul.location);
    setDescription(selectedEkskul.description);

    setOpenModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('tittle', tittle);
    formData.append('schedule', schedule);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('picture', picture);

    try {
      let response;

      if (selectedEkskulId) {
        response = await axios.put(`http://localhost:8080/admin/ekstrakurikuler/favorite/${selectedEkskulId}`, formData);
      } else {
        response = await axios.post('http://localhost:8080/admin/ekstrakurikuler/favorite', formData);
      }

      if (response.data.Status === 'Success') {
        navigate('/admin/ekstrakurikuler');
        setMsg('File Successfully Uploaded');
        setOpenModal(false);
        setPicture('');
        setTittle('');
        setSchedule('');
        setLocation('');
        setDescription('');
        setselectedEkskulId(null);
      } else {
        setMsg('Error');
      }
      window.location.reload();
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error' + error.message);
    }
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('tittle', tittle);
    formData.append('schedule', schedule);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('picture', picture);

    try {
      let response;

      if (selectedEkskulId) {
        response = await axios.put(`http://localhost:8080/admin/ekstrakurikuler/pilihan/${selectedEkskulId}`, formData);
      } else {
        response = await axios.post('http://localhost:8080/admin/ekstrakurikuler/pilihan', formData);
      }

      if (response.data.Status === 'Success') {
        navigate('/admin/ekstrakurikuler');
        setMsg('File Successfully Uploaded');
        setOpenModal(false);
        setPicture('');
        setTittle('');
        setSchedule('');
        setLocation('');
        setDescription('');
        setselectedEkskulId(null);
      } else {
        setMsg('Error');
      }
      window.location.reload();
    } catch (error) {
      console.error('Error submitting data:', error);
      setMsg('Error' + error.message);
    }
  };

  const files = useQuery({
    queryKey: ["files"],
    queryFn: () => fileServices.getAllFile(),
  });

  if (extracurricular.isLoading)
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
        {adminExtracurriculerModal(
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
          setMsg,
          selectedEkskulId,
          setselectedEkskulId,
          handleSubmit,
          handleEditEkskuls
        )}
      </div>
      <div className="focus-visible:border-none">
        {adminExtracurriculerModal1(
          extracurricular1,
          setExtracurricular1,
          openModal1,
          setOpenModal1,
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
          setMsg,
          selectedEkskulId,
          setselectedEkskulId,
          handleSubmit1,
          handleEditEkskuls1
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
            {ekskul.map((e) => (
              <div
                key={e.ID}
                onClick={() => handleEditEkskuls(e)}
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
            {ekskul1.map((e) => (
              <div
                key={e.ID}
                onClick={() => handleEditEkskuls1(e)}
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
            <div
              className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 text-blue-800 hover:cursor-pointer"
              onClick={() => setOpenModal1(true)}
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

