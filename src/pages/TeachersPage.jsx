import Box from "../components/PhotoBox";
import React, {useEffect, useState} from "react";
import axios from "axios";

const TeachersPage = () => {
  const [guru, setGuru] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const stafResponse = await axios.get("http://localhost:8080/guru");
        console.log("Response data:", stafResponse.data);
        setGuru(stafResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="font-poppins">
      <div className=" bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">staff pengajar</h1>
          <p className="text-xl">Beranda - Staff Pengajar</p>
        </div>
      </div>

      {
        guru.map(guruItem => (
          <div className="mx-auto my-12 max-w-7xl" key={guruItem.ID}>
            <div className="mb-12 flex flex-col items-center justify-center text-center">
              <Box styles="lg:w-64 lg:h-64 w-56 h-56 mb-2">
                <img src={`http://localhost:8080/${guruItem.fotoGuru}`} alt="" />
              </Box>
              <p className="mb-2 text-xl font-bold">

                <strong>{guruItem.name}</strong>
              </p>
              <p>{guruItem.position}</p>
            </div>

            <div className="mx-auto flex flex-col justify-items-center gap-x-6 gap-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-0 lg:gap-y-36 lg:px-6 xl:grid-cols-4">

                <div
                  className="flex flex-col items-center justify-center text-center"
                >
                <Box styles="lg:w-64 lg:h-64 w-56 h-56 mb-2">
                  <img src={`http://localhost:8080/${guruItem.fotoGuru}`}/>
                  </Box>
                  <p className="mb-2 text-xl font-bold">
                    <strong>{guruItem.name}</strong>
                  </p>
                  <p>{guruItem.role}</p>
                </div>
            </div>
          </div>
        ))
      }
    </main>
  );
};

export default TeachersPage;
