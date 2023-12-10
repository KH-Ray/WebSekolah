import { Input } from "@material-tailwind/react";
import { Pagination } from "@mui/material";
import FotoGedung from "../images/foto-gedung-2.jpg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const news = [
  { title: "Headline Berita #1" },
  { title: "Headline Berita #2" },
  { title: "Headline Berita #3" },
  { title: "Headline Berita #4" },
];

const NewsPage = () => {
  return (
    <main className="font-poppins">
      <div className="bg-main-gray">
        <div className="mx-auto flex h-96 max-w-7xl flex-col items-start justify-center gap-4 px-4 lg:px-6">
          <h1 className="text-6xl font-semibold uppercase">berita</h1>
          <p className="text-xl">Beranda - Berita</p>
        </div>
      </div>

      <div className="mx-auto my-12 max-w-7xl px-4 lg:px-6">
        <div className="mb-4 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
          <div className="w-full sm:w-1/2">
            <Input
              label="Cari Berita"
              color="blue"
              icon={<MagnifyingGlassIcon />}
            />
          </div>

          <div className="">
            <Pagination count={4} variant="outlined" shape="rounded" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {news.map((n, i) => (
            <div
              key={i}
              className="relative h-48 w-full overflow-hidden rounded-xl"
            >
              <img src={FotoGedung} alt="Foto Gedung" />
              <p className="absolute bottom-5 left-5 text-3xl font-bold text-white">
                {n.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
