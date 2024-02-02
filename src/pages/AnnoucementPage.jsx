import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import fileServices from "../services/files";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";

import React, {useEffect, useState} from "react";
import axios from "axios";

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const AnnoucementPage = () => {
  const { id } = useParams();
  const [notice, setNotice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const noticeResponse = await axios.get(`http://localhost:8080/pengumuman/${id}`);
          setNotice(noticeResponse.data);
        }
      } catch (err) {
        setError("Error fetching data");
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [id]);

  const files = useQuery({
    queryKey: ["files"],
    queryFn: () => fileServices.getAllFile(),
  });

  if (!notice || files.isLoading) {
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );
  }

  const currentAnnoucement = notice.find((a) => a.id === Number(id));

  return (
    <main className="font-poppins">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          className="h-full w-full object-cover brightness-50"
          src="https://i.ibb.co/6tKXXbV/foto-gedung-2.jpg"
          alt="Gambar Pengumuman"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="absolute bottom-5 text-3xl font-bold text-white">
            {currentAnnoucement.judul}
          </h1>
        </div>
      </div>

      <div className="mx-auto mb-12 mt-4 flex max-w-7xl flex-col gap-6 px-4 text-justify leading-6 lg:px-6">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <CalendarDaysIcon className="h-6 w-6" />
          <div>{currentAnnoucement.date}</div>
        </div>

        {stripTags(currentAnnoucement.descNotice)}

        <div className="flex flex-wrap gap-8">
          {notice.map((f) => {
            if (f.id !== 1) return;

            return (
              <div
                key={f.id}
                className="flex h-44 w-64 flex-col items-center justify-center gap-2 rounded border border-solid border-black"
              >
                <img src={f.type} alt="document image" className="h-20 w-20" />
                <p className="capitalize">{f.name}</p>
              </div>
            );
          })}
        </div>

        <button className="w-36 rounded-lg bg-dark-green px-8 py-4 text-white">
          Unduh
        </button>
      </div>
    </main>
  );
};

export default AnnoucementPage;
