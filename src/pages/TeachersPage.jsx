import Box from "../components/PhotoBox";
import { Spinner } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";

const TeachersPage = () => {
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
  
  const teachersData = guru.data.map((teacher) => teacher);

  return (
    <main className="font-poppins">
      <div className=" bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">staff pengajar</h1>
          <p className="text-xl">Beranda - Staff Pengajar</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl">
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <Box styles="lg:w-64 lg:h-64 w-56 h-56 mb-2">
            <img src={`http://localhost:8080/${teachersData[0].fotoGuru}`} alt="" />
          </Box>
          <p className="mb-2 text-xl font-bold">
            <strong>{teachersData[0].name}</strong>
          </p>
          <p>{teachersData[0].position}</p>
        </div>

        <div className="mx-auto flex flex-col justify-items-center gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-36 lg:px-6 xl:grid-cols-4">
          {teachersData.slice(1).map((guru, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center"
            >
              <Box styles="lg:w-64 lg:h-64 w-56 h-56 mb-2">
                <img src={`http://localhost:8080/${guru.fotoGuru}`} alt="" />
              </Box>
              <p className="mb-2 text-xl font-bold">
                <strong>{guru.name}</strong>
              </p>
              <p>{guru.position}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TeachersPage;
