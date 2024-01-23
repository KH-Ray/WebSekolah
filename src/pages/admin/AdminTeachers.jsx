import { PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Box from "../../components/PhotoBox";
import { Button, Flowbite, Modal, Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import { customButtonTheme } from "../../themes/flowbiteThemes";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const adminTeacherModal = (
  setTeacher,
  teacher,
  openModal,
  setguru,
  guru,
  setOpenModal,
  name,
  position,
  education,
  achievement,
  fotoGuru,
  setName,
  setPosition,
  setEducation,
  setAchievement,
  setFotoGuru,
  setMsg,
  navigate
) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('position', position);
    formData.append('education', education);
    formData.append('achievement', achievement);
    formData.append('fotoGuru', fotoGuru);

    try {
      const response = await axios.post('http://localhost:8080/admin/guru', formData);

      console.log(response.data);

      if (response.data.Status === 'Success') {
        navigate('/guru');
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
        setOpenModal(false);
      }}
    >
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="flex flex-col gap-4 font-poppins">
            <div className="flex items-center justify-center">
              <Box styles="mb-2 h-48 w-48">
                <input
                  type="file"
                  name="fotoGuru"
                  onChange={(e) => setFotoGuru(e.target.files[0])}/>
              </Box>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Nama</label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="name"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="position">Jabatan</label>
              <input
                className="rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
                type="text"
                name="position"
                id="position"
                onChange={(e) => setPosition(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="education">Pendidikan</label>
              <textarea
                name="education"
                id="education"
                onChange={(e) => setEducation(e.target.value)}
                className="h-24 resize-none rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
              ></textarea>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="achievement">Prestasi</label>
              <textarea
                name="achievement"
                id="achievement"
                onChange={(e) => setAchievement(e.target.value)}
                className="h-24 resize-none rounded border-[1.5px] border-solid border-gray-400 px-2 py-1"
              ></textarea>
            </div>

            <Flowbite theme={{ theme: customButtonTheme }}>
              <Button color="border-semi-green" size="lg" type="submit">
                Simpan
              </Button>
            </Flowbite>
          </div>
        </Modal.Body>
      </form>
    </Modal>
  );
};

const AdminTeachers = () => {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [education, setEducation] = useState('');
  const [achievement, setAchievement] = useState('');
  const [fotoGuru, setFotoGuru] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const [guru, setGuru] = useState({
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const guruResponse = await axios.get("http://localhost:8080/guru");
        setGuru({
          data: guruResponse.data,
          isLoading: false,
        });
      } catch (err) {
        console.error("Error fetching data:", err);
        setGuru({
          data: [],
          isLoading: false,
        });
      }
    };
    fetchData();
  
  }, [])

  if (guru.isLoading)
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );
  
  if (openModal) {
    return adminTeacherModal
      (
        setTeacher,
        teacher,
        setOpenModal,
        guru,
        setGuru,
        openModal,
        name,
        position,
        education,
        achievement,
        fotoGuru,
        setName,
        setPosition,
        setEducation,
        setAchievement,
        setFotoGuru,
        setMsg,
        navigate
      );
  }

  const teachersData = guru.data.map((teacher) => teacher);

  return (
    <main className="overflow-auto font-poppins">
      <div className="focus-visible:border-none">
        {adminTeacherModal(guru, setGuru, openModal, setOpenModal)}
      </div>

      <div className="mx-auto my-12">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <Box
            styles="w-48 h-48 mb-2 relative group hover:cursor-pointer"
            onClick={() => {
              setPosition("Kepala Sekolah");
              setOpenModal(true);
            }}
          >
            <img src={`http://localhost:8080/${teachersData[0].fotoGuru}`} alt="" />
            <button className="absolute right-2 top-2 hidden group-hover:inline">
              <XCircleIcon className="z-10 h-8 w-8 stroke-dark-gray hover:opacity-50" />
            </button>
          </Box>
          <p className="mb-2 text-lg font-bold">
            <strong>{teachersData[0].name}</strong>
          </p>
          <p>{teachersData[0].position}</p>
        </div>
        <div className="mx-auto flex flex-col justify-items-center gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:px-6 xl:grid-cols-4">
          {teachersData.slice(1).map((guru) => (
            <div
              key={guru.ID}
              className="flex flex-col items-center justify-center text-center"
            >
              <Box
                styles="w-48 h-48 mb-2 relative group hover:cursor-pointer"
                onClick={() => {
                  setGuru("");
                  setOpenModal(true);
                }}
              >
                <img src={`http://localhost:8080/${guru.fotoGuru}`} alt="" />
                <button
                  className="absolute right-2 top-2 z-10 hidden group-hover:inline"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("Delete Teacher");
                  }}
                >
                  <XCircleIcon className="z-10 h-8 w-8 stroke-dark-gray hover:opacity-50" />
                </button>
              </Box>
              <p className="mb-2 text-lg font-bold">
                <strong>{guru.name}</strong>
              </p>
              <p>{guru.position}</p>
            </div>
          ))}
          <div
            className="flex h-48 w-48 items-center justify-center rounded-xl border border-solid border-gray-600 bg-white hover:cursor-pointer"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <PlusIcon className="h-16 w-16 stroke-blue-800" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminTeachers;
