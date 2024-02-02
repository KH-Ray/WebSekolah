import Notice from "../components/Notice";
import { Spinner } from "flowbite-react";
import { Input } from "@material-tailwind/react";
import { Pagination } from "@mui/material";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import React, {useEffect, useState} from "react";
import axios from "axios";

function stripTags(html) {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
}

const AnnoucementsPage = () => {
  const [annoucements, setAnnoucements] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const AnnoucementsResponse = await axios.get("http://localhost:8080/pengumuman/:id");
        setAnnoucements(AnnoucementsResponse.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  if (annoucements.isLoading) {
    return (
      <main className="flex h-screen items-center justify-center">
        <div>
          <Spinner size="xl" />
        </div>
      </main>
    );
  }

  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="whitespace-pre-wrap break-all text-6xl font-semibold uppercase">
            pengumuman
          </h1>
          <p className="text-xl">Beranda - Pengumuman</p>
        </div>
      </div>

      <div className="my-12 max-w-7xl px-4 lg:mx-auto lg:px-6">
        <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <div className="w-full sm:w-1/2">
            <Input
              label="Masukan Nama Pengumuman"
              color="teal"
              icon={<MagnifyingGlassIcon />}
            />
          </div>
          <div className="">
            <Pagination count={Math.ceil(annoucements.data || 1)} variant="outlined" shape="rounded" />
          </div>
        </div>

        <div className="divide-y divide-solid divide-gray-400">
          {annoucements.map((a, id) => (
            <Link key={id} to={`/pengumuman/${a.id}`}>
              <Notice
                title={a.judul}
                date={a.date}
                subtitle={stripTags(a.descNotice)} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AnnoucementsPage;
